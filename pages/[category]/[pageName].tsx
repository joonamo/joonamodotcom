import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { Column, MobileTitle, Spacer, DesktopTitle } from '../../components/Basic'
// import { ImageCarousel } from '../../components/ImageCarousel'
import { Youtube, YoutubeImageReplacer } from '../../components/Youtube'
import { getAllPostIds, getPostData } from '../../lib/posts'
import ReactMarkdown from 'react-markdown'

interface Props {
  content: string
  data: {
    year?: string
    title?: string
  }
}

const Project: NextPage<Props> = ({ data, content }) => {
  return <div className={"container mx-auto"}>
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
            img: YoutubeImageReplacer
          }}
        >
          {content}
        </ReactMarkdown>
      </Column>
    </div>
  </div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allIds = await getAllPostIds()
  return {
    paths: allIds.map(ids => ({
      params: {
        pageName: ids.pageName,
        category: ids.category
      }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (props) => {
  if (!props.params?.category && props.params?.pageName) {
    throw new Error("I need better params")
  }
  const data = await getPostData(props.params!.category as string, props.params!.pageName as string)

  return {
    props: data
  }
}

export default Project