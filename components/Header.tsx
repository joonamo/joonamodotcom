import classNames from "classnames"
import React from "react"

import { Filler, Title } from "./Basic"

export const Header: React.FunctionComponent = () => {
  return (
    <div className={classNames("w-full", "bg-gray-900")}>
      <div
        className={classNames("container", "mx-auto", "flex", "mb-4", "py-1")}
      >
        <Title>Joonamo</Title>
        <Filler />
        <Title>Joonamo</Title>
      </div>
    </div>
  )
}
