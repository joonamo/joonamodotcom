export type CategoryName = string

export interface CategoryInfo {
  name: CategoryName
  title: string
  cover: string
  coverBlur?: string | null
}

export interface PostInfo {
  category: CategoryName
  pageName: string
  title: string
  date?: string | null
  cover?: string | null
  coverBlur?: string | null
  youtube?: string | string[] | null
  slideshow?: string | string[] | null
}

export interface AllPostsInfo {
  posts: PostInfo[]
  categories: CategoryName[]
}

export interface PageData {
  content: string
  data: PostInfo
}
