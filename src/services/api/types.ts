export type HttpClientParams<R = unknown> = {
  url: string
  params?: R & PaginateParams
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
  post: <T, P>(data: HttpClientParams<P>) => Promise<HttpResponse<T>>
}
