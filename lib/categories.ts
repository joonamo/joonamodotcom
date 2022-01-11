import { promises as fs } from "fs"
import * as glob from "glob-promise"
import path from "path"

import { CategoryInfo, CategoryName } from "./postsModel"
import { postsDirectory } from "./serverConfig"

export async function getAllCategoryNames(): Promise<CategoryName[]> {
  const categoryDirs = await glob.promise("*/", {
    cwd: postsDirectory,
  })
  return categoryDirs.map((dir) => dir.slice(0, -1))
}

export async function getCategoryInfo(
  name: CategoryName
): Promise<CategoryInfo> {
  const file = await fs.readFile(path.join(postsDirectory, name, "data.json"), {
    encoding: "utf-8",
  })
  const data = JSON.parse(file)
  return {
    name,
    title: data.title ?? name,
    cover: data.cover ?? "",
  }
}

export async function getAllCategories(): Promise<CategoryInfo[]> {
  const names = await getAllCategoryNames()

  return await Promise.all(names.map(getCategoryInfo))
}
