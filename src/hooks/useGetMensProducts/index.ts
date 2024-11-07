import { useQueries } from "@tanstack/react-query"

import { QUERY_KEYS } from "@/constants/queries"
import { api } from "@/services/api"
import { mensShirts } from "@/services/endpoints/mens-shirts"
import { mensShoes } from "@/services/endpoints/mens-shoes"
import { mensWatches } from "@/services/endpoints/mens-watches"

export function useGetMensProducts() {
  const mensProducts = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.mensWatches],
        queryFn: () => {
          return mensWatches(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.mensShirts],
        queryFn: () => {
          return mensShirts(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.mensShoes],
        queryFn: () => {
          return mensShoes(api)
        },
      },
    ],
    combine: (results) => {
      return {
        products: results
          .map((result) => result.data?.body?.products || [])
          .flat(),
        pending: results.some((result) => result.isPending),
        error: results.some((result) => result.isError),
        isLoading: results.some((result) => result.isLoading),
        refetch: () => {
          results.forEach((result) => result.refetch())
        },
      }
    },
  })

  return {
    mensProducts,
  }
}
