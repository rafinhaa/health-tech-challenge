import { User } from "@/@types/user"

import { HttpClient } from "../api/types"

export type AuthProps = {
  username: string
  password: string
}

export const auth = async (api: HttpClient, data: AuthProps) => {
  return await api.post<User, AuthProps>({
    url: "/auth/login",
    data,
  })
}
