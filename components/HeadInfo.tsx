import Head from "next/head"
import React from "react"

import { baseUrl } from "../lib/nextHelpers"

export interface HeadInfoProps {
  title: string
  path: string
  description: string
  image: string
}

export const HeadInfo: React.FunctionComponent<HeadInfoProps> = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="og:title" content={props.title} />
    <meta name="description" content={props.description} />
    <meta name="og:description" content={props.description} />
    <meta
      name="og:image"
      content={`${baseUrl}/_next/image?url=${encodeURIComponent(
        props.image
      )}&w=640&q=75`}
    />
    <meta name="og:type" content="website" />
    <meta name="og:url" content={baseUrl + props.path} />
    <meta name="theme-color" content="#111827" />
  </Head>
)
