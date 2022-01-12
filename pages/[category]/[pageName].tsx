import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"

import { BasePage, BasePageProps } from "../../components/BasePage"
import { Column, PageTitle, Spacer } from "../../components/Basic"
// import { ImageCarousel } from '../../components/ImageCarousel'
import { Youtube, YoutubeImageReplacer } from "../../components/Youtube"
import { getAllCategories } from "../../lib/categories"
import { listify } from "../../lib/helpers"
import { getPostData, getPostsByCategory } from "../../lib/posts"
import { PageData } from "../../lib/postsModel"

interface Props extends BasePageProps, PageData {}

const Project: NextPage<Props> = ({ data, content, allCategories }) => {
  return (
    <BasePage allCategories={allCategories}>
      <PageTitle className="md:text-right text-fuchsia-200">
        {data.title}
      </PageTitle>
      <div className={"md:grid grid-cols-2 gap-3"}>
        <Column className="gap-4">
          {data.youtube
            ? listify(data.youtube).map((id, i) => (
                <Youtube key={`yt-${i}`} id={id} />
              ))
            : null}
          <Spacer />
          {/* <ImageCarousel
            images={[an1, an7, an2, an3, an4, an5, an6, an1, an7, an2, an3, an4, an5, an6]}
          /> */}
        </Column>
        <Column>
          <ReactMarkdown
            transformImageUri={undefined}
            components={{
              img: YoutubeImageReplacer,
            }}
            className="break-words"
          >
            {content}
          </ReactMarkdown>
        </Column>
      </div>
    </BasePage>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getPostsByCategory()
  return {
    paths: allPosts.map((post) => ({
      params: {
        pageName: post.pageName,
        category: post.category,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  if (!props.params?.category || !props.params?.pageName) {
    throw new Error("I need better params")
  }
  const [data, allCategories] = await Promise.all([
    getPostData(
      props.params!.category as string,
      props.params!.pageName as string
    ),
    getAllCategories(),
  ])

  return {
    props: { ...data, allCategories },
  }
}

export default Project
