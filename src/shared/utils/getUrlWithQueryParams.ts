function getUrlWithQueryParams (baseUrl: string, params: Record<string, unknown>): string {
  const queryParams = new URLSearchParams(
    Object.entries(params).map(([key, value]) => [key, String(value)])
  ).toString()

  return baseUrl.concat(`?${queryParams}`);
}

export default getUrlWithQueryParams;
