import { headers } from 'next/headers';
export function getApiUrl(path) {
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  console.log('from getApi Url ' + `${protocal}://${host}`);
  return `${protocal}://${host}${path}`;
}
