import type { GetStaticProps, GetStaticPaths, NextPage } from "next"
import React from "react"
import {
  Column,
  MobileTitle,
  Spacer,
  DesktopTitle,
} from "../../components/Basic"
// import { ImageCarousel } from '../../components/ImageCarousel'
import { Youtube, YoutubeImageReplacer } from "../../components/Youtube"
import { getAllPosts, getPostData } from "../../lib/posts"
import ReactMarkdown from "react-markdown"

interface Props {
  content: string
  data: {
    year?: string
    title?: string
  }
}

const Project: NextPage<Props> = ({ data, content }) => {
  return (
    <div className={"container mx-auto"}>
      <div className={"md:grid grid-cols-2"}>
        <Column>
          <MobileTitle subtitle={data.year}>{data.title}</MobileTitle>
          <Youtube id="xObRmJujaG8" />
          <Spacer />
          {/* <ImageCarousel
            images={[an1, an7, an2, an3, an4, an5, an6, an1, an7, an2, an3, an4, an5, an6]}
          /> */}
        </Column>
        <Column>
          <DesktopTitle subtitle={data.year}>{data.title}</DesktopTitle>
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
  const allPosts = await getAllPosts()
  return {
    paths: allPosts.posts.map((post) => ({
      params: {
        pageName: post.pageName,
        category: post.category,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  if (!props.params?.category && props.params?.pageName) {
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
