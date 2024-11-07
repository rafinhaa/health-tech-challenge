import { ProductHttpResponse } from "@/@types/product"

import { HttpClient } from "../api/types"

export const mensWatches = async (api: HttpClient) => {
  return await api.get<ProductHttpResponse>({
    url: "/products/category/mens-watches",
  })
}
