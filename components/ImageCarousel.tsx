import Image from 'next/image'
import { ImageProps } from 'next/image'
import { FunctionComponent, useState } from 'react'

interface props {
  images: Array<ImageProps["src"]>
}

export const ImageCarousel: FunctionComponent<props> = (props) => {
  const [current, setCurrent] = useState(0)
  const { images } = props

  if (images.length === 0)
    return null

  return <>
    <div className={"aspect-w-16 aspect-h-9 relative bg-gray-900"}>
      <Image 
        className={"aspect-w-16 aspect-h-9"}
        src={images[current]}
        alt="mainImage"
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div
      className={"overflow-x-auto"}
    >
      <div 
        style={{width: `${images.length * 100}px`}}
      >
        {
          images.map((im, i) => (
            <div
              key={`carousel-${i}`}
              onClick={setCurrent.bind(this, i)}
              style={{ width: "100px", height: "100px", position: "relative" }}
              className={"float-left"}
            >
              <Image
                src={im}
                alt="Cool Image"
                layout="fill"
                objectFit="cover"
              />
            </div>)
          )
        }
      </div>
    </div>
  </>
}