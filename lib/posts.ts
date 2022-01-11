import { promises as fs } from "fs"
import * as glob from "glob-promise"
import matter from "gray-matter"
import path from "path"

const postsDirectory = path.join(process.cwd(), "posts")

export type Category = string

export interface PostInfo {
  category: Category
  pageName: string
  data: { [key: string]: any }
}

export interface AllPostsInfo {
  posts: PostInfo[]
  categories: Category[]
}

export interface PageData {
  content: string
  data: { [key: string]: any }
}

export async function getPostsByCategory(
  searchCategory?: Category
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
        data,
      }
    })
  )
}

export async function getAllCategories(): Promise<Category[]> {
  const categoryDirs = await glob.promise("*/", {
    cwd: postsDirectory,
  })
  return categoryDirs.map((dir) => dir.slice(0, -1))
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
