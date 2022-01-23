import classNames from "classnames"
import Image from "next/image"
import { ImageProps } from "next/image"
import { FunctionComponent, useCallback, useMemo, useState } from "react"

interface props {
  images: Array<ImageProps["src"]>
  blurs?: Array<string | null> | null
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const changeImage = useCallback(
    (current: number) => {
      setIsLoading(true)
      setCurrent(current)
    },
    [setIsLoading, setCurrent]
  )
  const onLoadingComplete = useCallback(
    () => setIsLoading(false),
    [setIsLoading]
  )
  const { images, blurs } = props
  const blur = useMemo(() => blurs?.[current] ?? undefined, [blurs, current])

  if (images.length === 0) return null

  return (
    <div className={"bg-zinc-900 rounded-xl overflow-hidden"}>
      <div
        className={classNames(
          "mb-1",
          "aspect-w-3",
          "aspect-h-2",
          "w-full",
          "overflow-hidden"
        )}
      >
        <div
          className={classNames(
            "w-full",
            "h-full",
            "bg-contain",
            "blur-2xl",
            "brightness-50",
            // isLoading ? "animate-pulse" : null,
            "transition-all",
            "duration-1000"
          )}
          style={{ backgroundImage: `url(${blur})` }}
        />
        <Image
          src={images[current]}
          alt="Displayed image"
          layout="fill"
          objectFit="contain"
          quality={80}
          priority={true}
          onLoadingComplete={onLoadingComplete}
          className={classNames(
            "transition-all",
            "duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        />
      </div>
      {images.length > 1 ? (
        <div className="w-full overflow-x-auto overflow-y-hidden">
          <div className="flex flex-row gap-1">
            {images.map((img, i) => (
              <CarouselImage
                key={i}
                img={img}
                onClick={changeImage}
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
