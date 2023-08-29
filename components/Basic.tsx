import classNames from "classnames"
import React, { FunctionComponent } from "react"

export const Column: FunctionComponent<
  React.PropsWithChildren<{
    className?: string
  }>
> = (props) => (
  <div className={"flex flex-col flex-1 " + (props.className ?? "")}>
    {props.children}
  </div>
)

export const PageTitle: FunctionComponent<
  React.PropsWithChildren<{
    subtitle?: string | null
    className?: string
  }>
> = (props) => (
  <div>
    <h1
      className={classNames(
        "text-5xl",
        "font-light",
        "text-purple-100",
        "break-words",
        props.className,
      )}
    >
      {props.children}
    </h1>
    {props.subtitle && <p className={"py-0 my-0"}>{props.subtitle}</p>}
  </div>
)

export const Spacer: FunctionComponent = () => <div className={"pt-4"} />
export const Filler: FunctionComponent = () => <div className="grow" />
