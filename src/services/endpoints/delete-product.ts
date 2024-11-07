import { DeletedProductHttpResponse } from "@/@types/product"

import { HttpClient } from "../api/types"

export const deleteProduct = async (api: HttpClient, id: number) => {
  const result = await api.delete<DeletedProductHttpResponse>({
    url: `/products/${id}`,
  })

  return result.body
}
