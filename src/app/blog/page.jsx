import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link
        href='/blog/testId'
        className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
            expedita saepe itaque assumenda, dolor voluptas maxime nesciunt
            excepturi similique voluptatum! Aliquam nam odit at autem ut atque
            quod eligendi.
          </p>
        </div>
      </Link>
      <Link
        href='/blog/testId'
        className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </h1>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
            expedita saepe itaque assumenda, dolor voluptas maxime nesciunt
            excepturi similique voluptatum! Aliquam nam odit at autem ut atque
            quod eligendi.
          </p>
        </div>
      </Link>
      <Link
        href='/blog/testId'
        className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </h1>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
            expedita saepe itaque assumenda, dolor voluptas maxime nesciunt
            excepturi similique voluptatum! Aliquam nam odit at autem ut atque
            quod eligendi.
          </p>
        </div>
      </Link>
      <Link
        href='/blog/testId'
        className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </h1>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
            expedita saepe itaque assumenda, dolor voluptas maxime nesciunt
            excepturi similique voluptatum! Aliquam nam odit at autem ut atque
            quod eligendi.
          </p>
        </div>
      </Link>
      <Link
        href='/blog/testId'
        className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
            alt=''
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            eveniet.
          </h1>
          <p className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ad
            expedita saepe itaque assumenda, dolor voluptas maxime nesciunt
            excepturi similique voluptatum! Aliquam nam odit at autem ut atque
            quod eligendi.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
