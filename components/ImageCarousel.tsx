import classNames from "classnames"
import Image from "next/image"
import { ImageProps } from "next/image"
import {
  FunctionComponent,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from "react"

interface props {
  images: Array<ImageProps["src"]>
  blurs?: Array<string | null> | null
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const changeImage = useCallback(
    (requestedIdx: number) => {
      if (requestedIdx === current) return
      setIsLoading(true)
      setCurrent(requestedIdx)
    },
    [setIsLoading, setCurrent, current],
  )
  const onLoadingComplete = useCallback(
    () => setIsLoading(false),
    [setIsLoading],
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
          "overflow-hidden",
        )}
      >
        <div
          className={classNames(
            "w-full",
            "h-full",
            "bg-contain",
            "blur-2xl",
            "brightness-50",
            "transition-all",
            "duration-1000",
          )}
          style={{ backgroundImage: `url(${blur})` }}
        />
        <a href={String(images[current])} target="_blank">
          <Image
            src={images[current]}
            key={String(images[current])}
            alt="Displayed image"
            fill
            style={{ objectFit: "contain" }}
            quality={80}
            priority={true}
            onLoadingComplete={onLoadingComplete}
            className={classNames(
              "transition-all",
              "duration-300",
              isLoading ? "opacity-0" : "opacity-100",
            )}
          />
        </a>
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
  const action = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      onClick(i)
    },
    [onClick, i],
  )

  return (
    <a
      key={`carousel-${i}`}
      onClick={action}
      className="w-[100px] h-[100px]"
      href={String(img)}
    >
      <Image
        className="rounded w-[100px] h-[100px] min-w-[100px]"
        src={img}
        alt="Slider Image"
        style={{ objectFit: "cover" }}
        width="100"
        height="100"
        quality={75}
        placeholder={blur ? "blur" : "empty"}
        blurDataURL={blur ?? undefined}
      />
    </a>
  )
}
