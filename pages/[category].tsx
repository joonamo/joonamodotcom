import type { GetStaticProps, GetStaticPaths, NextPage } from "next"
import React from "react"
import { Column, DesktopTitle } from "../components/Basic"
import { getAllPosts, PostInfo } from "../lib/posts"

interface Props {
  category: string
  posts: PostInfo[]
}

const Category: NextPage<Props> = (props) => {
  const { category, posts } = props
  return (
    <div className={"container mx-auto"}>
      <Column>
        <DesktopTitle>{category}</DesktopTitle>
        {posts?.map((post) => (
          <p key={`project.pageName`}>{post.pageName}</p>
        ))}
      </Column>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts()
  return {
    paths: allPosts.categories.map((category) => ({
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

  const category = String(props.params?.category)

  // Todo: Just grab by category
  const allPosts = await getAllPosts()

  const posts = allPosts.postsByCategories[category] ?? []

  return {
    props: {
      category: category,
      posts,
    },
  }
}

export default Category
