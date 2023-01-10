import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import BlogList from "../components/BlogList";
import client from "../client";
import { NextApiRequest, NextApiResponse } from "next";
import { useEffect, useState } from "react";
import { getAPI } from "./api/hello";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  posts: {
    title?: string | null;
    author?: string | null;
    category?: string;
    published_at?: string | null;
    body?: string | null;
  }[];
}

export default function Home({ posts }: Props) {
  // const [data, setData] = useState([
  //   {}
  // ]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('http://localhost:3333/v3/data/query/production');
  //     console.log(response)
  //     // const data = await response.json();
  //     // setData(data);
  //   }

  //   // fetchData();
  // }, []);
  // console.log(data)

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <BlogList post={posts} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(
    `
    *[_type == "post"]
  `,
    {}
  );

  console.log("TEST", posts);
  return {
    props: {
      posts,
    },
  };
}
