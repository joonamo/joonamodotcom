import Image from "next/image"
import { ImageProps } from "next/image"
import { FunctionComponent, useCallback, useState } from "react"

interface props {
  images: Array<ImageProps["src"]>
  blurs?: Array<string | null> | null
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const { images, blurs } = props

  if (images.length === 0) return null

  return (
    <div className={"bg-zinc-900 rounded-xl overflow-hidden"}>
      <div className="mb-1 aspect-w-3 aspect-h-2 w-full">
        <Image
          key={String(images[current])}
          src={images[current]}
          alt="Displayed image"
          layout="fill"
          objectFit="contain"
          quality={80}
          priority={true}
        />
      </div>
      {images.length > 1 ? (
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            {images.map((img, i) => (
              <CarouselImage
                key={i}
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
    <a key={`carousel-${i}`} onClick={action} className={"w-[100px] h-[100px]"}>
      <Image
        className="rounded"
        src={img}
        alt="Slider Image"
        layout="fixed"
        objectFit="cover"
        width="100px"
        height="100px"
        sizes="100px"
        quality={70}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur ?? undefined}
      />
    </a>
  )
}
