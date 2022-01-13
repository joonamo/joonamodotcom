import React from "react"

import { Header, HeaderProps } from "./Header"

export interface BasePageProps extends HeaderProps {}

export const BasePage: React.FunctionComponent<BasePageProps> = (props) => (
  <>
    <div key="content" className="jm-container mt-[150px]">
      {props.children}
    </div>
    <Header key="header" {...props} />
  </>
)
