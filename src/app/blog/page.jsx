import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { getApiUrl } from '@/utils/apiUtils';

async function getData() {
  const apiUrl = getApiUrl(`/api/posts`);
  const res = await fetch(apiUrl, {
    cache: 'no-store',
  });
  // const res = await fetch('https://next-blogs-roan.vercel.app/api/posts', {
  //   cache: 'no-store',
  // });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={'/blog/' + item._id}
          className={styles.container}
          key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.image}
              alt=''
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
