import Head from "next/head"
import React from "react"

import { Header, HeaderProps } from "./Header"

export interface BasePageProps extends HeaderProps {}

export const BasePage: React.FunctionComponent<BasePageProps> = (props) => (
  <>
    <Head>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "fcbdeed83e0f4ad4b978c6c564a61ca1"}'
      ></script>
    </Head>
    <Header key="header" {...props} />
    <div key="content" className="jm-container mb-[150px]">
      {props.children}
    </div>
  </>
)
