/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react"
import { ReactMarkdownProps } from "react-markdown/lib/complex-types"

export const Youtube: FunctionComponent<{ id: string }> = (props) => (
  <div className={"flex aspect-w-16 aspect-h-9"}>
    <iframe
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="clipboard-write; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </div>
)

export const YoutubeImageReplacer: FunctionComponent<
  React.PropsWithChildren<
    React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement> &
      ReactMarkdownProps
  >
> = (props) => {
  const isYoutube = props.src?.startsWith("youtube://")
  if (isYoutube) {
    return <Youtube id={props.src!.replace("youtube://", "")} />
  } else {
    return <img {...props} />
  }
}
