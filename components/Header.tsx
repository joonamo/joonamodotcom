import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { isServer } from "../lib/nextHelpers"
import { CategoryInfo } from "../lib/postsModel"
import avatar from "../public/images/misc/avatar.png"
import { Filler } from "./Basic"

export interface HeaderProps {
  allCategories: CategoryInfo[]
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  allCategories,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(isServer)
  const toggleMenu = React.useCallback(
    () => setMenuOpen(!menuOpen),
    [menuOpen, setMenuOpen]
  )

  return (
    <div className={classNames("w-full", "py-2", "mb-6", "bg-gray-900")}>
      <div className={classNames("jm-container", "flex", "items-end")}>
        <Link href="/" passHref>
          <a>
            <Image
              src={avatar}
              alt="avatar"
              layout="fixed"
              objectFit="fill"
              width="50px"
              height="50px"
              className="rounded-full"
            />
          </a>
        </Link>
        <Filler />
        <Link href="/" passHref>
          <a>
            <h1 className="font-thin text-5xl">Joonamo</h1>
          </a>
        </Link>
      </div>
      <div className="flex md:hidden place-content-center">
        <a onClick={toggleMenu}>
          <div
            className={classNames(
              "flex",
              "flex-col",
              "w-[30px]",
              "h-[30px]",
              "place-content-around"
            )}
          >
            <div className="w-full h-[3px] bg-indigo-300 rounded-full" />
            <div className="w-full h-[3px] bg-indigo-300 rounded-full" />
            <div className="w-full h-[3px] bg-indigo-300 rounded-full" />
          </div>
        </a>
      </div>
      <div
        className={classNames(
          menuOpen ? "flex" : "hidden",
          "md:flex",
          "jm-container",
          "py-2",
          "md:items-end",
          "md:place-content-end",
          "text-2xl",
          "gap-4",
          "flex-col",
          "md:flex-row"
        )}
      >
        {allCategories.map((category) => (
          <>
            <CategoryLink key={category.name} category={category} />
          </>
        ))}
      </div>
    </div>
  )
}

interface CategoryLinkProps {
  category: CategoryInfo
}

const CategoryLink: React.FunctionComponent<CategoryLinkProps> = ({
  category,
}) => {
  return (
    <Link href={`/${encodeURIComponent(category.name)}`} passHref>
      <a className="text-violet-200">{category.title}</a>
    </Link>
  )
}
