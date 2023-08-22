export function getApiUrl(path) {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:3000${path}`;
  } else {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`;
  }
}
