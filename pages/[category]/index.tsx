import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"

import { BasePage, BasePageProps } from "../../components/BasePage"
import { PageTitle } from "../../components/Basic"
import { HeadInfo } from "../../components/HeadInfo"
import { ImageItemGrid } from "../../components/ImageItemGrid"
import {
  getAllCategories,
  getAllCategoryNames,
  getCategoryInfo,
} from "../../lib/categories"
import { getPostsByCategory } from "../../lib/posts"
import { CategoryInfo, CategoryName, PostInfo } from "../../lib/postsModel"

interface Props extends BasePageProps {
  category: CategoryInfo
  posts: PostInfo[]
}

const CategoryPage: NextPage<Props> = (props) => {
  const { category, posts, allCategories } = props
  return (
    <BasePage allCategories={allCategories}>
      <HeadInfo
        title={category.title}
        path={`/${category.name}`}
        description={`${category.title} projects`}
        image={category.cover}
      />
      <PageTitle>{category.title}</PageTitle>
      <ImageItemGrid
        items={posts?.map(({ pageName, title, cover }) => ({
          title: title,
          link: `${category.name}/${pageName}`,
          image: cover,
        }))}
      />
    </BasePage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategoryNames()
  return {
    paths: categories.map((category) => ({
      params: {
        category,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  if (!props.params?.category) {
    throw new Error("I need better params")
  }

  const categoryName: CategoryName = String(props.params?.category)

  const [posts, category, allCategories] = await Promise.all([
    getPostsByCategory(categoryName),
    getCategoryInfo(categoryName),
    getAllCategories(),
  ])

  posts.sort((a, b) =>
    a.date === b.date ? 0 : String(a.date) < String(b.date) ? 1 : -1
  )

  return {
    props: {
      category,
      posts,
      allCategories,
    },
  }
}

export default CategoryPage
