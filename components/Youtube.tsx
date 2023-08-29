import classNames from "classnames"
import React, { FunctionComponent } from "react"
import { ReactMarkdownProps } from "react-markdown/lib/complex-types"

export const Youtube: FunctionComponent<{ id: string }> = (props) => (
  <span
    className={classNames(
      "aspect-w-16",
      "aspect-h-9",
      "rounded-xl",
      "overflow-hidden",
      "bg-zinc-900",
      "block",
    )}
  >
    <iframe
      src={`https://www.youtube.com/embed/${props.id}`}
      title="YouTube video player"
      frameBorder="0"
      allow="clipboard-write; encrypted-media; picture-in-picture"
      allowFullScreen
    />
  </span>
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
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.title} />
  }
}
