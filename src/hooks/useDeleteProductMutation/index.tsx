import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { DeletedProductHttpResponse } from "@/@types/product"
import { api } from "@/services/api"
import { deleteProduct } from "@/services/endpoints/delete-product"

export const useDeleteProductMutation = (
  options?: UseMutationOptions<
    DeletedProductHttpResponse,
    Error,
    string,
    unknown
  >,
) => {
  const mutation = useMutation({
    mutationFn: async (id: string) => {
      return deleteProduct(api, Number(id))
    },
    ...options,
  })

  return {
    ...mutation,
  }
}
