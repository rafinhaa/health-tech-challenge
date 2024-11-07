import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { Product } from "@/@types/product"
import { api } from "@/services/api"
import { HttpResponse } from "@/services/api/types"
import { addProduct } from "@/services/endpoints/add-product"
import { ProductSchema } from "@/utils/schemas/product-schema"

export function useAddProductMutation(
  options?: UseMutationOptions<
    HttpResponse<Product>,
    Error,
    ProductSchema,
    unknown
  >,
) {
  const mutation = useMutation<
    HttpResponse<Product>,
    Error,
    ProductSchema,
    unknown
  >({
    mutationFn: (data) => {
      return addProduct(api, data)
    },
    ...options,
  })

  return {
    ...mutation,
  }
}
