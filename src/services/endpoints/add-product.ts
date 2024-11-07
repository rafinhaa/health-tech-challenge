import { Product } from "@/@types/product"
import { ProductSchema } from "@/utils/schemas/product-schema"

import { HttpClient } from "../api/types"

export const addProduct = async (api: HttpClient, body: ProductSchema) => {
  return await api.post<Product>({
    url: `/products/add`,
    data: body,
  })
}
