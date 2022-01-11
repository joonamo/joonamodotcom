import type { GetStaticProps, NextPage } from "next"
import React from "react"

import { Column, Title } from "../components/Basic"
import { ImageItemGrid } from "../components/ImageItemGrid"
import { getAllCategories } from "../lib/categories"
import { CategoryInfo } from "../lib/postsModel"

interface Props {
  categories: CategoryInfo[]
}

const IndexPage: NextPage<Props> = (props) => {
  const { categories } = props
  return (
    <div className={"container mx-auto"}>
      <Column>
        <Title>Joonamo</Title>
        <ImageItemGrid
          xlText={true}
          items={categories.map((category) => ({
            title: category.title,
            link: category.name,
            image: category.cover,
          }))}
        />
      </Column>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      categories: await getAllCategories(),
    },
  }
}

export default IndexPage
