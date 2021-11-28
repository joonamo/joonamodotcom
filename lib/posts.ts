import path from "path"
import matter from "gray-matter"
import { promises as fs } from "fs"
import * as glob from "glob-promise"

const postsDirectory = path.join(process.cwd(), "posts")

export interface PostInfo {
  category: string
  pageName: string
}

export interface PageData {
  content: string
  data: { [key: string]: any }
}

export async function getAllPostIds(): Promise<PostInfo[]> {
  const postFiles = await glob.promise("*/*/main.md", { cwd: postsDirectory })
  return postFiles.map((p) => {
    const parts = p.split("/")
    return {
      category: parts[parts.length - 3],
      pageName: parts[parts.length - 2],
    }
  })
}

export async function getPostData(
  category: string,
  pageName: string
): Promise<PageData> {
  const markdown = await fs.readFile(
    path.join(postsDirectory, category, pageName, "main.md"),
    { encoding: "utf-8" }
  )
  const { content, data } = matter(markdown)
  return { content, data }
}
