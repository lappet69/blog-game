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
import FeatureGame from "../components/FeatureGame";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  posts: RootObject[];
}

export default function Home({ posts }: Props) {
  return (
    <div>
      <section className="body-font py-20 bg-red-500">
        <div className="px-5 mx-auto max-w-7xl">
          <div className="flex flex-wrap -m-4">
            <h2>Game guides, tips and answers for Android and iOS app games</h2>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap md:flex-nowrap px-10">
        <BlogList post={posts} />
        <FeatureGame posts={posts} />
      </div>

    </div>
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
