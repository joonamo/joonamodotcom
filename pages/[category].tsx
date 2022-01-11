import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import React from "react"

import { Column, DesktopTitle } from "../components/Basic"
import {
  Category,
  getAllCategories,
  getPostsByCategory,
  PostInfo,
} from "../lib/posts"

interface Props {
  category: Category
  posts: PostInfo[]
}

const CategoryPage: NextPage<Props> = (props) => {
  const { category, posts } = props
  return (
    <div className={"container mx-auto"}>
      <Column>
        <DesktopTitle>{category}</DesktopTitle>
        {posts?.map(({ pageName, data }) => (
          <p key={pageName}>
            <Link href={`${category}/${pageName}`}>
              {data.title ?? pageName}
            </Link>
          </p>
        ))}
      </Column>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = await getAllCategories()
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

  const category: Category = String(props.params?.category)

  const posts = await getPostsByCategory(category)

  return {
    props: {
      category,
      posts,
    },
  }
}

export default CategoryPage
