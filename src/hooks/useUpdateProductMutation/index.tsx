import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { Product } from "@/@types/product"
import { api } from "@/services/api"
import { updateProduct } from "@/services/endpoints/update-product"
import { ProductSchema } from "@/utils/schemas/product-schema"

export const useUpdateProductMutation = (
  options?: UseMutationOptions<Product, Error, ProductSchema, unknown>,
) => {
  const mutation = useMutation({
    mutationFn: async (data: ProductSchema) => {
      return updateProduct(api, data)
    },
    ...options,
  })

  return {
    ...mutation,
  }
}
