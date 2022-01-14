import { promises as fs } from "fs"
import * as glob from "glob-promise"
import matter from "gray-matter"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

import { CategoryName, PageData, PostInfo } from "./postsModel"
import { postsDirectory } from "./serverConfig"

export async function getPostsByCategory(
  searchCategory?: CategoryName,
  includeCoverBlur?: boolean
): Promise<PostInfo[]> {
  const postFiles = await glob.promise(`${searchCategory ?? "*"}/*.md`, {
    cwd: postsDirectory,
  })
  return await Promise.all(
    postFiles.map(async (filename) => {
      const parts = filename.split("/")
      const pageName = parts[parts.length - 1].slice(0, -3)
      const category = parts[parts.length - 2]
      const { data } = await getPostData(category, pageName, includeCoverBlur)

      return {
        category,
        pageName,
        title: data.title ?? pageName,
        date: data.date ?? null,
        cover: data.cover ?? null,
        coverBlur: data.coverBlur ?? null,
      }
    })
  )
}

export async function getPostData(
  category: string,
  pageName: string,
  includeCoverBlur?: boolean
): Promise<PageData> {
  const markdown = await fs.readFile(
    path.join(postsDirectory, category, `${pageName}.md`),
    { encoding: "utf-8" }
  )
  const decoded = matter(markdown)

  const coverBlur =
    includeCoverBlur && decoded.data.cover
      ? (await getPlaiceholder(decoded.data.cover)).base64
      : null
  return {
    content: decoded.content,
    data: { ...decoded.data, coverBlur } as PostInfo,
  }
}
