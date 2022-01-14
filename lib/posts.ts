import { promises as fs } from "fs"
import * as glob from "glob-promise"
import matter from "gray-matter"
import path from "path"
import { getPlaiceholder } from "plaiceholder"

import { listify } from "./helpers"
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
      const { data } = await getPostData(category, pageName, {
        includeCoverBlur,
      })

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
  options: {
    includeCoverBlur?: boolean
    includeSlideshowBlur?: boolean
  } = {}
): Promise<PageData> {
  const markdown = await fs.readFile(
    path.join(postsDirectory, category, `${pageName}.md`),
    { encoding: "utf-8" }
  )
  const decoded = matter(markdown)

  const coverBlur =
    options.includeCoverBlur && decoded.data.cover
      ? await getPlaiceholder(decoded.data.cover)
          .then(({ base64 }) => base64)
          .catch(() => null)
      : null

  const slideshowBlur = options.includeSlideshowBlur
    ? await getSlideshowBlur(decoded.data.slideshow)
    : null

  return {
    content: decoded.content,
    data: { ...decoded.data, coverBlur, slideshowBlur } as PostInfo,
  }
}

async function getSlideshowBlur(
  slideshow?: string | string[] | null
): Promise<Array<string | null> | null> {
  if (!slideshow) {
    return null
  }

  return await Promise.all(
    listify(slideshow).map(async (slide) => {
      try {
        const { base64 } = await getPlaiceholder(slide)
        return base64
      } catch {
        return null
      }
    })
  )
}
