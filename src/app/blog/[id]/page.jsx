import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            vero expedita amet quam dolor vitae ex temporibus ea voluptas
            quibusdam!
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>'John Doe'</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/804573/pexels-photo-804573.jpeg?auto=compress&cs=tinysrgb&w=1600'
            alt=''
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
          voluptas minus, mollitia quaerat aperiam illo aliquam ipsa culpa
          voluptatum accusamus hic id recusandae necessitatibus sed explicabo
          optio commodi tenetur! Officiis blanditiis dolore unde fuga accusamus
          eveniet facere, rem vero nostrum omnis incidunt at animi doloribus
          laudantium sed velit ratione dolorem dignissimos repellendus
          temporibus perspiciatis officia? Veniam error doloribus repellendus
          sequi! Dicta inventore vel, doloremque explicabo, at iste eveniet odit
          enim repellendus nam quibusdam natus deleniti soluta cumque, quia
          earum repellat nihil ex dignissimos animi quis optio? Culpa blanditiis
          nostrum magni, iure dolor nesciunt quisquam deleniti cupiditate
          maxime? Odit, quasi et.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
