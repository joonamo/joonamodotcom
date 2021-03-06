import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"

import { CategoryInfo } from "../lib/postsModel"
import avatar from "../public/images/misc/avatar.png"
import { Filler } from "./Basic"

export interface HeaderProps {
  allCategories: CategoryInfo[]
}

export const Header: React.FunctionComponent<HeaderProps> = ({
  allCategories,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const toggleMenu = React.useCallback(
    () => setMenuOpen(!menuOpen),
    [menuOpen, setMenuOpen]
  )

  return (
    <div className={classNames("w-full", "py-2", "mb-3", "bg-gray-900")}>
      <div className={classNames("jm-container", "flex")}>
        <Link key="avatar" href="/" passHref>
          <a className="rounded-full overflow-hidden h-[50px] w-[50px]">
            <Image
              src={avatar}
              alt="avatar"
              layout="fixed"
              objectFit="fill"
              width="50px"
              height="50px"
              quality={85}
              placeholder="blur"
            />
          </a>
        </Link>
        <Filler />
        <Link key="title" href="/" passHref>
          <a>
            <h1 className="font-thin text-5xl">Joonamo</h1>
          </a>
        </Link>
      </div>
      <div className="flex lg:hidden place-content-center mt-4">
        <a
          onClick={toggleMenu}
          className={classNames(
            "flex",
            "flex-col",
            "w-1/5",
            "h-[30px]",
            "place-content-around"
          )}
        >
          <div
            key={"a"}
            className="w-full h-[3px] bg-indigo-300 rounded-full"
          />
          <div
            key={"b"}
            className="w-full h-[3px] bg-indigo-300 rounded-full"
          />
          <div
            key={"c"}
            className="w-full h-[3px] bg-indigo-300 rounded-full"
          />
        </a>
      </div>
      <div
        className={classNames(
          menuOpen ? "flex" : "hidden",
          "lg:flex",
          "jm-container",
          "py-2",
          "lg:justify-end",
          "text-2xl",
          "gap-4",
          "flex-col",
          "lg:flex-row"
        )}
      >
        {allCategories.map((category) => (
          <CategoryLink key={category.name} category={category} />
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
    <Link
      key={category.name}
      href={`/${encodeURIComponent(category.name)}`}
      passHref
    >
      <a key={category.name} className="text-violet-200">
        {category.title}
      </a>
    </Link>
  )
}
