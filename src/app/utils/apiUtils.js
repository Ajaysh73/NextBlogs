import { headers } from 'next/headers';
export function getApiUrl(path) {
  // return `${process.env.API_BASE_URL}${path}`;
  const host = headers().get('host');
  const protocal = process?.env.NODE_ENV === 'development' ? 'http' : 'https';
  console.log('from getApi Url ' + `${protocal}://${host}`);
  return `${protocal}://${host}${path}`;
  // let res = await fetch(`${protocal}://${host}/api`, { cache: "no-store" });
  // let posts = res.json();
  // return posts;
}
