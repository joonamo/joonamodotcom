export type CategoryName = string

export interface CategoryInfo {
  name: CategoryName
  title: string
  cover: string
}

export interface PostInfo {
  category: CategoryName
  pageName: string
  title: string
  date?: string | null
  cover?: string | null
  youtube?: string | string[] | null
}

export interface AllPostsInfo {
  posts: PostInfo[]
  categories: CategoryName[]
}

export interface PageData {
  content: string
  data: PostInfo
}
