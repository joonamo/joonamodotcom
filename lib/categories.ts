import { promises as fs } from "fs"
import * as glob from "glob-promise"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

import { CategoryInfo, CategoryName } from "./postsModel"
import { postsDirectory } from "./serverConfig"

export async function getAllCategoryNames(): Promise<CategoryName[]> {
  const categoryDirs = await glob.promise("*/", {
    cwd: postsDirectory,
  })
  return categoryDirs.map((dir) => dir.slice(0, -1))
}

export async function getCategoryInfo(
  name: CategoryName,
  includeCoverBlur?: boolean
): Promise<CategoryInfo> {
  const file = await fs.readFile(path.join(postsDirectory, name, "data.json"), {
    encoding: "utf-8",
  })
  const data = JSON.parse(file)

  const coverBlur =
    includeCoverBlur && data.cover
      ? await getPlaiceholder(data.cover)
          .then(({ base64 }) => base64)
          .catch(() => null)
      : null

  return {
    name,
    title: data.title ?? name,
    cover: data.cover ?? "",
    coverBlur,
  }
}

export async function getAllCategories(
  includeCoverBlur?: boolean
): Promise<CategoryInfo[]> {
  const names = await getAllCategoryNames()

  return await Promise.all(
    names.map((name) => getCategoryInfo(name, includeCoverBlur))
  )
}
