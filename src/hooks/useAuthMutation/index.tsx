import { useMutation, UseMutationOptions } from "@tanstack/react-query"

import { User } from "@/@types/user"
import { api } from "@/services/api"
import { HttpResponse } from "@/services/api/types"
import { auth } from "@/services/endpoints/auth"
import { AuthSchema } from "@/utils/schemas/auth-schema"

export function useAuthMutation(
  options?: UseMutationOptions<HttpResponse<User>, Error, AuthSchema, unknown>,
) {
  const mutation = useMutation<HttpResponse<User>, Error, AuthSchema, unknown>({
    mutationFn: (data: AuthSchema) => {
      return auth(api, data)
    },
    ...options,
  })

  return {
    ...mutation,
  }
}
