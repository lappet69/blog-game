import { GetStaticProps } from 'next';
import Image from 'next/image';
import Head from 'next/head';
import React from 'react'
import client from '../../client';
import { RootObject } from '../../interface';
import { defaultImg, urlFor } from '../../utils/global';

interface Props {
  post: RootObject;
}


const Post = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>BLOG GEMING : {post.title.toUpperCase()}</title>
      </Head>

      <section className="body-font py-20">
        <div className="px-5 mx-auto max-w-7xl">
          <div className="flex flex-wrap -m-4">
            <>
              <div key={post._id} className="p-4 block md:" >
                <h1 className="title-font text-3xl font-bold text-gray-900 mb-3 dark:text-gray-100">
                  {post.title}
                </h1>
                <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
                  <Image
                    className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-1/6"
                    alt="No alt"
                    width={1024}
                    height={1024}
                    src={urlFor(post?.mainImage.asset._ref).url() || defaultImg()}
                  />
                  <div className="p-6 text-justify">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      CATEGORY
                    </h2>

                    {post.body.map((item) =>
                      item._type == "block" ? item.children.map((el) => <p className="leading-relaxed mb-3">{el.text}</p>) : item._type == "image" &&
                        <div className='flex justify-center '>
                          <Image
                            className="w-full my-5 relative object-cover object-center transition-all ease-in duration-200  bg-gray-50  lg:h-1/2 lg:w-1/2"
                            alt="No alt"
                            width={1024}
                            height={1024}
                            src={urlFor(item?.asset['_ref']).url() || defaultImg()}
                          />
                        </div>
                    )}

                    <div className="flex items-center flex-wrap text-primary-500">
                      <span className="w-6 h-6 ml-2">
                        <svg
                          className="w-6 h-6 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={"2"}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <span className="w-4 h-4 mr-1">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                        </span>
                        <p className="">1.2K</p>
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <span className="w-4 h-4 mr-1">
                          <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </span>
                        <p className="">6</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </>
  )
}

export default Post


export async function getStaticPaths() {
  const query = `
      *[_type == "post"]{
        _id,
          slug{
            current
          }
      }
    `

  const posts = await client.fetch(query)
  const paths = posts.map((post: RootObject) => ({
    params: {
      slug: post.slug.current
    }
  }))
  return {
    paths,
    fallback: "blocking"
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `
    *[_type == "post" && slug.current ==$slug][0]{
      _id,
      _createdAt,
      title,
      author->{
        name,
        image
      },
      mainImage,
      slug,
      body,
    }
  `
  const post = await client.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      post,
    },
    revalidate: 60 //after 60 seconds, it will update old cache
  }
}

