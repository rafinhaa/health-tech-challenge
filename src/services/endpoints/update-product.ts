import { Product } from "@/@types/product"
import { ProductSchema } from "@/utils/schemas/product-schema"

import { HttpClient } from "../api/types"

export const updateProduct = async (api: HttpClient, data: ProductSchema) => {
  const result = await api.put<Product>({
    url: `/products/${data.id}`,
    data: {
      title: data.name,
      description: data.description,
      price: Number(data.price),
      discountPercentage: Number(data.discountPercentage),
      thumbnail: data.imageUrl,
    },
  })

  return result.body
}
