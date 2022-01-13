import React from "react"

import { Header, HeaderProps } from "./Header"

export interface BasePageProps extends HeaderProps {}

export const BasePage: React.FunctionComponent<BasePageProps> = (props) => (
  <>
    <Header key="header" {...props} />
    <div key="content" className="jm-container mb-[150px]">
      {props.children}
    </div>
  </>
)
