import { useQueries } from "@tanstack/react-query"

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
        queryKey: ["womens-bags"],
        queryFn: () => {
          return womensBags(api)
        },
      },
      {
        queryKey: ["womans-dresses"],
        queryFn: () => {
          return womensDresses(api)
        },
      },
      {
        queryKey: ["womens-jewellery"],
        queryFn: () => {
          return womensJewellery(api)
        },
      },
      {
        queryKey: ["womens-shoes"],
        queryFn: () => {
          return womensShoes(api)
        },
      },
      {
        queryKey: ["womens-watches"],
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
