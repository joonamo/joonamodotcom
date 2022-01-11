import classNames from "classnames"
import { ImageProps } from "next/image"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { Filler } from "./Basic"

interface ImageItem {
  title: string
  link: string
  image: ImageProps["src"]
}

interface GridProps {
  items: ImageItem[]
}

export const ImageItemGrid: React.FunctionComponent<GridProps> = ({
  items,
}) => {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-3"}>
      {items.map((item, i) => (
        <ImageItemComponent key={`item-${i}`} item={item} />
      ))}
    </div>
  )
}

interface ItemProps {
  item: ImageItem
}

const ImageItemComponent: React.FunctionComponent<ItemProps> = ({ item }) => {
  return (
    <Link href={item.link} passHref>
      <a>
        <div
          className={classNames(
            "aspect-w-3",
            "aspect-h-2",
            "lg:aspect-w-1",
            "lg:aspect-h-1",
            "overflow-hidden",
            "rounded-3xl"
          )}
        >
          <Image
            src={item.image}
            alt={item.title}
            layout="fill"
            objectFit="cover"
          />
          <div className={classNames("w-full", "h-full", "flex", "flex-col")}>
            <Filler />
            <h2
              className={classNames(
                "bg-slate-900/75",
                "text-right",
                "pr-5",
                "text-6xl",
                "xl:text-7xl",
                "font-thin"
              )}
            >
              {item.title}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  )
}
