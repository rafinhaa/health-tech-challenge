import axios from "axios"

import { HttpClient, HttpClientParams } from "../types"

const api = axios.create({
  baseURL: "https://dummyjson.com",
})

const createUrlParams = <T>(params: T) => {
  const urlParams = new URLSearchParams()

  if (params)
    Object.entries(params).forEach(([key, value]) => {
      urlParams.append(key, String(value))
    })

  return urlParams
}

export class Axios implements HttpClient {
  post = async <T, P = unknown, D = unknown>({
    url,
    params,
    signal,
    data,
  }: HttpClientParams<P, D>) => {
    const response = await api.post<T>(url, data, {
      params,
      signal,
    })

    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  get = async <T, P = unknown, D = unknown>({
    url,
    params,
    signal,
  }: HttpClientParams<P, D>) => {
    const urlParams = createUrlParams(params)

    const urlWithParams = `${url}?${urlParams.toString()}`

    const response = await api.get<T>(urlWithParams, { signal })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  delete = async <T, P = unknown, D = unknown>({
    url,
    params,
    signal,
  }: HttpClientParams<P, D>) => {
    const urlParams = createUrlParams(params)

    const urlWithParams = `${url}?${urlParams.toString()}`

    const response = await api.delete<T>(urlWithParams, { signal })
    return {
      statusCode: response.status,
      body: response.data,
    }
  }

  put = async <T, P = unknown, D = unknown>({
    url,
    signal,
    data,
  }: HttpClientParams<P, D>) => {
    const response = await api.put<T>(url, data, { signal })

    return {
      statusCode: response.status,
      body: response.data,
    }
  }
}
