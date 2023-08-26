'use client';
import React, { useEffect } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error } = useSWR(
    session?.data?.user.name
      ? `/api/posts?username=${session.data.user.name}`
      : null,
    fetcher
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        desc,
        image,
        content,
        username: session.data.user.name,
      }),
    });

    mutate();
    e.target.reset();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });
    mutate();
    try {
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (session.status === 'loading') {
      // Handle loading session state
    } else if (session.status === 'unauthenticated') {
      router?.push('/dashboard/login');
    }
  }, [session, router]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated' && data) {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data.map((post) => (
            <div
              className={styles.post}
              key={post._id}>
              <div className={styles.imgContainer}>
                <Image
                  height={200}
                  width={200}
                  src={post.image}
                  alt=''
                  className={styles.img}
                />
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}>
                X
              </span>
            </div>
          ))}
        </div>
        <form
          className={styles.new}
          onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type='text'
            placeholder='Title'
            className={styles.input}
          />
          <input
            type='text'
            placeholder='Desc'
            className={styles.input}
          />
          <input
            type='text'
            placeholder='Image'
            className={styles.input}
          />
          <textarea
            cols='30'
            rows='10'
            className={styles.textArea}></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
