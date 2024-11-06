import AsyncStorage from "@react-native-async-storage/async-storage"

import { Storage } from "../types"

const AStorage: Storage = {
  getItem: async (key) => {
    const value = await AsyncStorage.getItem(key)

    return value === null ? null : JSON.parse(value)
  },

  setItem: async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value))
  },

  removeItem: async (key) => {
    await AsyncStorage.removeItem(key)
  },
}

export default AStorage
