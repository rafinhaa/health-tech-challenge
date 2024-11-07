import { useQueries } from "@tanstack/react-query"

import { QUERY_KEYS } from "@/constants/queries"
import { api } from "@/services/api"
import { womensBags } from "@/services/endpoints/womens-bags"
import { womensDresses } from "@/services/endpoints/womens-dresses"
import { womensJewellery } from "@/services/endpoints/womens-jewellery"
import { womensShoes } from "@/services/endpoints/womens-shoes"
import { womensWatches } from "@/services/endpoints/womens-watches"

export function useGetWomensProducts() {
  const womansProducts = useQueries({
    queries: [
      {
        queryKey: [QUERY_KEYS.womansBags],
        queryFn: () => {
          return womensBags(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.womansDresses],
        queryFn: () => {
          return womensDresses(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.womansJewellery],
        queryFn: () => {
          return womensJewellery(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.womansShoes],
        queryFn: () => {
          return womensShoes(api)
        },
      },
      {
        queryKey: [QUERY_KEYS.womansWatches],
        queryFn: () => {
          return womensWatches(api)
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
    womansProducts,
  }
}
