import React, { useEffect, useState } from "react";
import { RootObject } from "../interface";
import Image from 'next/image'
import NotFound from '../assets/notfound.png';
import client from "../client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

function urlFor(source:any) {
  return builder.image(source)
}

interface Props {
  post: RootObject[];
}


const BlogList = ({ post }: Props) => {
  
  console.log("TEST", post);

  

  return (
    <section className="body-font py-20">
      <div className="px-5 mx-auto max-w-7xl">
        <div className="flex flex-wrap -m-4">
          {post.map((item: RootObject) => {
            return (
              <>
                <a key={item._id} className="p-4 block md:w-1/3" href="#">
                  <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
                    <Image
                      className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                      alt="No alt"
                        width={500}
                        height={500}
                      src={urlFor(item?.mainImage.asset._ref).url() || NotFound}
                    />
                    <div className="p-6">
                      <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        CATEGORY
                      </h2>
                      <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-100">
                        {item.title}
                      </h1>
                      <p className="leading-relaxed mb-3">
                        {item.body.map((paragraph) =>
                          paragraph.children.map((item) => item.text)
                        )}
                      </p>
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
                </a>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogList;

