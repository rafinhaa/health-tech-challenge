import axios from "axios"

import { HttpClient, HttpClientParams } from "../types"

const api = axios.create({
  baseURL: "https://dummyjson.com",
})

export class Axios implements HttpClient {
  post = async <T>({ url, params, signal }: HttpClientParams) => {
    const response = await api.post<T>(url, { ...params, signal })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
