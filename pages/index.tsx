import type { GetStaticProps, NextPage } from "next"
import React from "react"

import { BasePage, BasePageProps } from "../components/BasePage"
import { PageTitle } from "../components/Basic"
import { HeadInfo } from "../components/HeadInfo"
import { ImageItemGrid } from "../components/ImageItemGrid"
import { getAllCategories } from "../lib/categories"

interface Props extends BasePageProps {
  description: string
}

const IndexPage: NextPage<Props> = (props) => {
  const { allCategories } = props
  return (
    <BasePage allCategories={allCategories}>
      <HeadInfo
        title="Joonamo"
        path=""
        description={props.description}
        image="/images/misc/avatar.png"
      />

      <PageTitle>Portfolio</PageTitle>
      <ImageItemGrid
        xlText={true}
        items={allCategories.map((category) => ({
          title: category.title,
          link: category.name,
          image: category.cover,
        }))}
      />
    </BasePage>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allCategories = await getAllCategories()
  return {
    props: {
      allCategories,
      description: `Portfolio of all the cool stuff I've made. ${allCategories
        .map(
          (category, i) =>
            (i == 0 ? "" : i === allCategories.length - 1 ? " and " : ", ") +
            category.title
        )
        .join("")}`,
    },
  }
}

export default IndexPage
