import { Product } from "@/@types/product"

import { HttpClient } from "../api/types"

export const fetchProduct = async (api: HttpClient, id: number) => {
  const result = await api.get<Product>({
    url: `/products/${id}`,
  })
  return result.body
}
