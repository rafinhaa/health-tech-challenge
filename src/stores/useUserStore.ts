import { create } from "zustand"
import { persist } from "zustand/middleware"

import { User } from "@/@types/user"
import { storage } from "@/services/storage"

export type UserStore = {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      user: {} as User,
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: "@health-tech-challenge/user",
      storage: storage,
    },
  ),
)
