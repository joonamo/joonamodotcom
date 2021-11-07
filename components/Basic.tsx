import { FunctionComponent } from 'react'

export const Column: FunctionComponent = (props) => (
  <div className={"flex flex-col flex-1 p-4"}>
    {props.children}
  </div>
)

export const MobileTitle: FunctionComponent<{ subtitle?: string }> = (props) => (
  <div className={"md:hidden"}>
    <h1>
    {props.children}
    </h1>
    {props.subtitle &&
      <p className={"pt-0"}>{props.subtitle}</p>}
  </div>
)

export const DesktopTitle: FunctionComponent<{ subtitle?: string }> = (props) => (
  <div className={"hidden md:block"}>
    <h1>
      {props.children}
    </h1>
    {props.subtitle &&
      <p className={"pt-0"}>{props.subtitle}</p>}
  </div>
)

export const Spacer: FunctionComponent = () => (
  <div className={"pt-4"} />
)
