export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  thumbnail: string
}

export type ProductHttpResponse = {
  products: Product[]
  limit: number
  skip: number
  total: number
}
