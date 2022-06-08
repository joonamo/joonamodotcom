import Script from "next/script"
import React from "react"

import { Header, HeaderProps } from "./Header"

export interface BasePageProps extends HeaderProps {}

export const BasePage: React.FunctionComponent<
  React.PropsWithChildren<BasePageProps>
> = (props) => (
  <>
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon='{"token": "fcbdeed83e0f4ad4b978c6c564a61ca1"}'
    ></Script>
    <Header key="header" {...props} />
    <div key="content" className="jm-container mb-[150px]">
      {props.children}
    </div>
  </>
)
