import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import BlogList from "../components/BlogList";
import client from "../client";
import { NextApiRequest, NextApiResponse } from "next";
import { useEffect, useState } from "react";
import { getAPI } from "./api/hello";
import { RootObject } from "../interface";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  posts: RootObject[];
}

export default function Home({ posts }: Props) {
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
  return {
    props: {
      posts,
    },
  };
}
