// function getUrlWithQueryParams (baseUrl: string, params: Record<string, unknown>): string {
function getUrlWithQueryParams<P extends object>(baseUrl: string, params: P): string {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  ).toString()

  return baseUrl.concat(`?${queryParams}`);
}

export default getUrlWithQueryParams;
