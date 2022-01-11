import classNames from "classnames"
import { ImageProps } from "next/image"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface ImageItem {
  title: string
  link: string
  image?: ImageProps["src"] | null
}

interface GridProps {
  items: ImageItem[]
  xlText?: boolean
}

export const ImageItemGrid: React.FunctionComponent<GridProps> = ({
  items,
  xlText,
}) => {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-3 gap-3"}>
      {items.map((item, i) => (
        <ImageItemComponent key={`item-${i}`} item={item} xlText={xlText} />
      ))}
    </div>
  )
}

interface ItemProps {
  item: ImageItem
  xlText?: boolean
}

const ImageItemComponent: React.FunctionComponent<ItemProps> = ({
  item,
  xlText,
}) => {
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
            "rounded-3xl",
            "bg-slate-700"
          )}
        >
          {item.image ? (
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
            />
          ) : null}
          <div
            className={classNames(
              "w-full",
              "h-full",
              "flex",
              "flex-col",
              "place-content-end"
            )}
          >
            <h2
              className={classNames(
                "bg-slate-900/75",
                "text-right",
                "px-5",
                "pb-3",
                "min-h-[30%]",
                xlText
                  ? "text-5xl xl:text-6xl"
                  : "text-4xl lg:text-xl xl:text-3xl",
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
