import path from "path"
import matter from "gray-matter"
import { promises as fs } from "fs"
import * as glob from "glob-promise"

const postsDirectory = path.join(process.cwd(), "posts")

export interface PostInfo {
  category: string
  pageName: string
}

export interface AllPostsInfo {
  postsByCategories: Record<string, PostInfo[]>
  posts: PostInfo[]
  categories: string[]
}

export interface PageData {
  content: string
  data: { [key: string]: any }
}

export async function getAllPosts(): Promise<AllPostsInfo> {
  const postFiles = await glob.promise("*/*/index.md", { cwd: postsDirectory })
  const d = postFiles.reduce(
    (prev, filename) => {
      const parts = filename.split("/")
      const post: PostInfo = {
        category: parts[parts.length - 3],
        pageName: parts[parts.length - 2],
      }

      return {
        postsByCategories: {
          ...prev.postsByCategories,
          [post.category]: prev.postsByCategories[post.category]
            ? [...prev.postsByCategories[post.category], post]
            : [post],
        },
        posts: [...prev.posts, post],
        categories: prev.categories.add(post.category),
      }
    },
    {
      postsByCategories: {} as Record<string, PostInfo[]>,
      posts: [] as PostInfo[],
      categories: new Set<string>(),
    }
  )

  return {
    ...d,
    categories: Array.from(d.categories),
  }
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
