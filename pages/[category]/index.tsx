import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"

import { Column, PageTitle } from "../../components/Basic"
import { ImageItemGrid } from "../../components/ImageItemGrid"
import { getAllCategoryNames, getCategoryInfo } from "../../lib/categories"
import { getPostsByCategory } from "../../lib/posts"
import { CategoryInfo, CategoryName, PostInfo } from "../../lib/postsModel"

interface Props {
  category: CategoryInfo
  posts: PostInfo[]
}

const CategoryPage: NextPage<Props> = (props) => {
  const { category, posts } = props
  return (
    <div className={"container mx-auto"}>
      <Column>
        <PageTitle>{category.title}</PageTitle>
        <ImageItemGrid
          items={posts?.map(({ pageName, title, cover }) => ({
            title: title,
            link: `${category.name}/${pageName}`,
            image: cover,
          }))}
        />
      </Column>
    </div>
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

  const [posts, category] = await Promise.all([
    getPostsByCategory(categoryName),
    getCategoryInfo(categoryName),
  ])

  return {
    props: {
      category,
      posts,
    },
  }
}

export default CategoryPage
