import { useQuery } from "@tanstack/react-query"

import { api } from "@/services/api"
import { fetchProduct } from "@/services/endpoints/fetch-product"

type UseFetchProductProps = {
  productId: string
}

export const useFetchProduct = ({ productId }: UseFetchProductProps) => {
  const queryProduct = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      return fetchProduct(api, Number(productId))
    },
  })

  return {
    ...queryProduct,
  }
}
