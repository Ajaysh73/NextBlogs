export function getApiUrl(path) {
  return `${process.env.API_BASE_URL}${path}`;
}
