import { ProductHttpResponse } from "@/@types/product"

import { HttpClient } from "../api/types"

export const mensShirts = async (api: HttpClient) => {
  return await api.get<ProductHttpResponse>({
    url: "/products/category/mens-shirts",
  })
}
