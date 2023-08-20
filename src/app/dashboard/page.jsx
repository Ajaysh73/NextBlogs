'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Dashboard = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts/',
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
  //       cache: 'no-store',
  //     });
  //     if (!res.ok) {
  //       setError(true);
  //     }
  //     const data = await res.json();
  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData();
  // }, []);
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
