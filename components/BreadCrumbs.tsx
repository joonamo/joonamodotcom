import Link from "next/link"
import React from "react"

export type BreadCrumbsPathElement = {
  name: string
  path: string
}
interface BreadCrumbsProps {
  path: BreadCrumbsPathElement[]
}

export const BreadCrumbs: React.FunctionComponent<BreadCrumbsProps> = (
  props
) => (
  <div className="flex flex-row flex-wrap">
    {props.path.map((item, i) => (
      <React.Fragment key={`${i}-${item.path}`}>
        {i > 0 ? <p className="my-0 mx-2">/</p> : null}
        <Link href={item.path}>{item.name}</Link>
      </React.Fragment>
    ))}
  </div>
)
