import { FunctionComponent } from "react"

export const Column: FunctionComponent = (props) => (
  <div className={"flex flex-col flex-1 p-4"}>{props.children}</div>
)

export const PageTitle: FunctionComponent = (props) => (
  <h1 className="text-6xl font-normal pb-6">{props.children}</h1>
)

export const Title: FunctionComponent = (props) => <h1>{props.children}</h1>

export const MobileTitle: FunctionComponent<{ subtitle?: string }> = (
  props
) => (
  <div className={"md:hidden"}>
    <Title>{props.children}</Title>
    {props.subtitle && <p className={"pt-0"}>{props.subtitle}</p>}
  </div>
)

export const DesktopTitle: FunctionComponent<{ subtitle?: string }> = (
  props
) => (
  <div className={"hidden md:block"}>
    <Title>{props.children}</Title>
    {props.subtitle && <p className={"pt-0"}>{props.subtitle}</p>}
  </div>
)

export const Spacer: FunctionComponent = () => <div className={"pt-4"} />
export const Filler: FunctionComponent = () => <div className="grow" />
