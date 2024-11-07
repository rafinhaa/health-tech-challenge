export type HttpClientParams<P, D> = {
  url: string
  params?: P & PaginateParams
  signal?: AbortSignal
  data?: D
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
  post: <T, P = unknown, D = unknown>(
    data: HttpClientParams<P, D>,
  ) => Promise<HttpResponse<T>>
  get: <T, P = unknown, D = unknown>(
    data: HttpClientParams<P, D>,
  ) => Promise<HttpResponse<T>>
  delete: <T, P = unknown, D = unknown>(
    data: HttpClientParams<P, D>,
  ) => Promise<HttpResponse<T>>
}
