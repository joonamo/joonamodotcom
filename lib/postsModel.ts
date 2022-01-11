export type CategoryName = string

export interface CategoryInfo {
  name: CategoryName
  title: string
  cover: string
}

export interface PostInfo {
  category: CategoryName
  pageName: string
  data: { [key: string]: any }
}

export interface AllPostsInfo {
  posts: PostInfo[]
  categories: CategoryName[]
}

export interface PageData {
  content: string
  data: { [key: string]: any }
}
