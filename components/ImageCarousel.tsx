import Image from "next/image"
import { ImageProps } from "next/image"
import { FunctionComponent, useCallback, useState } from "react"
import useDimensions from "react-cool-dimensions"

import { isServer } from "../lib/nextHelpers"

interface props {
  images: Array<ImageProps["src"]>
  blurs?: Array<string | null> | null
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const { images, blurs } = props

  const { observe, width } = useDimensions<HTMLDivElement | null>()
  const displayImage = width > 0 || isServer

  if (images.length === 0) return null

  return (
    <div className={"bg-zinc-900 rounded-xl overflow-hidden"}>
      <div className="mb-1" ref={observe}>
        {displayImage ? (
          <Image
            key={String(images[current])}
            className={"aspect-w-16 aspect-h-9"}
            src={images[current]}
            alt="Displayed image"
            layout="responsive"
            objectFit="contain"
            width={3}
            height={2}
            sizes={width > 0 ? `${Math.round(width)}px` : "100vw"}
          />
        ) : null}
      </div>
      {images.length > 1 ? (
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            {images.map((img, i) => (
              <CarouselImage
                key={1}
                img={img}
                onClick={setCurrent}
                i={i}
                blur={blurs && blurs[i]}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

interface CarouselImageProps {
  // eslint-disable-next-line no-unused-vars
  onClick: (arg0: number) => void
  img: ImageProps["src"]
  i: number
  blur: string | undefined | null
}
const CarouselImage: FunctionComponent<CarouselImageProps> = ({
  onClick,
  img,
  i,
  blur,
}) => {
  const action = useCallback(() => onClick(i), [onClick, i])

  return (
    <a
      key={`carousel-${i}`}
      onClick={action}
      className={"w-[100px] h-[100px] rounded overflow-hidden"}
    >
      <Image
        src={img}
        alt="Slider Image"
        layout="fixed"
        objectFit="cover"
        width="100px"
        height="100px"
        sizes="100px"
        quality={60}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur ?? undefined}
      />
    </a>
  )
}
