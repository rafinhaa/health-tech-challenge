import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { AuthSchema, authSchema } from "@/utils/schemas/auth-schema"

export const useAuthForm = () => {
  const authForm = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  })

  return {
    ...authForm,
  }
}
