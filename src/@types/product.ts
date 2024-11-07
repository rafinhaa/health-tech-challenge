export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  thumbnail: string
  images: string[]
}

export type ProductHttpResponse = {
  products: Product[]
  limit: number
  skip: number
  total: number
}

export type DeletedProductHttpResponse = Product & {
  isDeleted: boolean
  deletedOn: string
}
