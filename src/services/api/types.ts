export type HttpClientParams<P> = {
  url: string
  params?: P & PaginateParams
  signal?: AbortSignal
}

export type PaginateParams = {
  limit?: number
  skip?: number
}

export type HttpResponse<T> = {
  statusCode: number
  body: T
}

export interface HttpClient {
  post: <T, P = unknown>(data: HttpClientParams<P>) => Promise<HttpResponse<T>>
  get: <T, P = unknown>(data: HttpClientParams<P>) => Promise<HttpResponse<T>>
}
