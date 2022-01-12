import { FunctionComponent } from "react"

export const Column: FunctionComponent<{ className?: string }> = (props) => (
  <div className={"flex flex-col flex-1 " + (props.className ?? "")}>
    {props.children}
  </div>
)

export const PageTitle: FunctionComponent<{
  subtitle?: string | null
  className?: string
}> = (props) => (
  <>
    <h1
      className={
        "text-6xl font-light pb-6 text-purple-100 " + (props.className ?? "")
      }
    >
      {props.children}
    </h1>
    {props.subtitle && <p className={"pt-0"}>{props.subtitle}</p>}
  </>
)

export const Spacer: FunctionComponent = () => <div className={"pt-4"} />
export const Filler: FunctionComponent = () => <div className="grow" />
