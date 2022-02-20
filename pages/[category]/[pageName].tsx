import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import React from "react"
import ReactMarkdown from "react-markdown"

import { BasePage, BasePageProps } from "../../components/BasePage"
import { Column, PageTitle, Spacer } from "../../components/Basic"
import {
  BreadCrumbs,
  BreadCrumbsPathElement,
} from "../../components/BreadCrumbs"
import { HeadInfo } from "../../components/HeadInfo"
import { ImageCarousel } from "../../components/ImageCarousel"
import { Youtube, YoutubeImageReplacer } from "../../components/Youtube"
import { getAllCategories, getCategoryInfo } from "../../lib/categories"
import { listify } from "../../lib/helpers"
import { getPostData, getPostsByCategory } from "../../lib/posts"
import { CategoryInfo, PageData } from "../../lib/postsModel"

interface Props extends BasePageProps, PageData {
  category: CategoryInfo
}

const Project: NextPage<Props> = ({
  data,
  category,
  content,
  allCategories,
}) => {
  const breadCrumbsPath: BreadCrumbsPathElement[] = React.useMemo(
    () => [
      { name: "Portfolio", path: "/" },
      { name: category.title, path: `/${category.name}` },
      { name: data.title, path: `/${category.name}/${data.pageName}` },
    ],
    [category.title, category.name, data.title, data.pageName]
  )
  return (
    <BasePage allCategories={allCategories}>
      <HeadInfo
        title={data.title}
        path={`/${category.name}/${data.pageName}`}
        description={`${data.title}, ${category.title}, ${
          data.date ?? "not dated"
        }`}
        image={data.cover ?? category.cover}
      />
      <BreadCrumbs path={breadCrumbsPath} />
      <div className={"md:grid grid-cols-2 gap-6 mt-4"}>
        <Column className="gap-4">
          <PageTitle subtitle={data.date}>{data.title}</PageTitle>
          {data.slideshow ? (
            <ImageCarousel
              images={listify(data.slideshow)}
              blurs={data.slideshowBlur}
            />
          ) : null}
          {data.youtube
            ? listify(data.youtube).map((id, i) => (
                <Youtube key={`yt-${i}`} id={id} />
              ))
            : null}
          <Spacer />
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

  const categoryName = props.params!.category as string

  const [dataAndContent, allCategories, category] = await Promise.all([
    getPostData(categoryName, props.params!.pageName as string, {
      includeSlideshowBlur: true,
    }),
    getAllCategories(),
    getCategoryInfo(categoryName),
  ])

  return {
    props: { ...dataAndContent, category, allCategories },
  }
}

export default Project
