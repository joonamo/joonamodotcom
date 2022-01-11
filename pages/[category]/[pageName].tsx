import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"

import {
  Column,
  DesktopTitle,
  MobileTitle,
  Spacer,
} from "../../components/Basic"
// import { ImageCarousel } from '../../components/ImageCarousel'
import { Youtube, YoutubeImageReplacer } from "../../components/Youtube"
import { getPostData, getPostsByCategory } from "../../lib/posts"
import { PageData } from "../../lib/postsModel"

interface Props extends PageData {}

const Project: NextPage<Props> = ({ data, content }) => {
  return (
    <div className={"container mx-auto"}>
      <div className={"md:grid grid-cols-2"}>
        <Column>
          <MobileTitle subtitle={data.date}>{data.title}</MobileTitle>
          <Youtube id="xObRmJujaG8" />
          <Spacer />
          {/* <ImageCarousel
            images={[an1, an7, an2, an3, an4, an5, an6, an1, an7, an2, an3, an4, an5, an6]}
          /> */}
        </Column>
        <Column>
          <DesktopTitle subtitle={data.date}>{data.title}</DesktopTitle>
          <ReactMarkdown
            transformImageUri={undefined}
            components={{
              img: YoutubeImageReplacer,
            }}
          >
            {content}
          </ReactMarkdown>
        </Column>
      </div>
    </div>
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
  const data = await getPostData(
    props.params!.category as string,
    props.params!.pageName as string
  )

  return {
    props: data,
  }
}

export default Project
