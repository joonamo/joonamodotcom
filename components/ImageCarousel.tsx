import Image from "next/image"
import { ImageProps } from "next/image"
import { FunctionComponent, useState } from "react"
import useDimensions from "react-cool-dimensions"

import { isServer } from "../lib/nextHelpers"

interface props {
  images: Array<ImageProps["src"]>
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const { images } = props

  const { observe, width } = useDimensions<HTMLDivElement | null>()
  const displayImage = width > 0 || isServer

  if (images.length === 0) return null

  return (
    <div className={"bg-zinc-900 rounded-xl overflow-hidden"}>
      <div className="mb-1" ref={observe}>
        {displayImage ? (
          <Image
            className={"aspect-w-16 aspect-h-9"}
            src={images[current]}
            alt="mainImage"
            layout="responsive"
            objectFit="contain"
            width={16}
            height={9}
            sizes={width > 0 ? `${Math.round(width)}px` : "100vw"}
          />
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            {images.map((im, i) => (
              <a
                key={`carousel-${i}`}
                onClick={setCurrent.bind(this, i)}
                className={"w-[100px] h-[100px] rounded overflow-hidden"}
              >
                <Image
                  src={im}
                  alt="Cool Image"
                  layout="fixed"
                  objectFit="cover"
                  width="100px"
                  height="100px"
                  sizes="100px"
                  quality={60}
                />
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
