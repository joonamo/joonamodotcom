import { promises as fs } from "fs"
import * as glob from "glob-promise"
import matter from "gray-matter"
import path from "path"

import { CategoryName, PageData, PostInfo } from "./postsModel"
import { postsDirectory } from "./serverConfig"

export async function getPostsByCategory(
  searchCategory?: CategoryName
): Promise<PostInfo[]> {
  const postFiles = await glob.promise(`${searchCategory ?? "*"}/*/index.md`, {
    cwd: postsDirectory,
  })
  return await Promise.all(
    postFiles.map(async (filename) => {
      const parts = filename.split("/")
      const pageName = parts[parts.length - 2]
      const category = parts[parts.length - 3]
      const { data } = await getPostData(category, pageName)
      return {
        category,
        pageName,
        title: data.title ?? pageName,
        date: data.year ?? null,
        cover: data.cover ?? null,
      }
    })
  )
}

export async function getPostData(
  category: string,
  pageName: string
): Promise<PageData> {
  const markdown = await fs.readFile(
    path.join(postsDirectory, category, pageName, "index.md"),
    { encoding: "utf-8" }
  )
  const { content, data } = matter(markdown)
  return { content, data }
}
