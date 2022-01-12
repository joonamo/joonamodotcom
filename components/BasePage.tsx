import React from "react"

import { Header, HeaderProps } from "./Header"

export interface BasePageProps extends HeaderProps {}

export const BasePage: React.FunctionComponent<BasePageProps> = (props) => (
  <>
    <Header {...props} />
    <div className={"jm-container"}>{props.children}</div>
  </>
)
