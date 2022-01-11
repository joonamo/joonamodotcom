import type { GetStaticProps, NextPage } from "next"
import Link from "next/link"
import React from "react"

import { Column, DesktopTitle } from "../components/Basic"
import { Category, getAllCategories } from "../lib/posts"

interface Props {
  categories: Category[]
}

const IndexPage: NextPage<Props> = (props) => {
  const { categories } = props
  return (
    <div className={"container mx-auto"}>
      <Column>
        <DesktopTitle>Joonamo</DesktopTitle>
        {categories.map((category) => (
          <p key={category}>
            <Link href={category}>{category}</Link>
          </p>
        ))}
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
