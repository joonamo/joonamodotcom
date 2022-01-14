import type { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import React from "react"

import { BasePage, BasePageProps } from "../components/BasePage"
import { PageTitle } from "../components/Basic"
import { ImageItemGrid } from "../components/ImageItemGrid"
import { getAllCategories } from "../lib/categories"

interface Props extends BasePageProps {}

const IndexPage: NextPage<Props> = (props) => {
  const { allCategories } = props
  return (
    <BasePage allCategories={allCategories}>
      <Head>
        <title>Joonamo</title>
      </Head>
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
  return {
    props: {
      allCategories: await getAllCategories(),
    },
  }
}

export default IndexPage
