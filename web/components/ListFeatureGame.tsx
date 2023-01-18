import React from "react";
import Image from "next/image";
import { cutStr, defaultImg, urlFor } from "../utils/global";
import { RootObject } from "../interface";

interface Props {
  post: RootObject[];
}
const ListFeatureGame = ({ post }: Props) => {
  return (
    <div className="">
      {post.map((item: RootObject) => (
        <a key={item._id} className="" href={`/post/${item?.slug?.current}`}>
          <div className="flex gap-8 relative py-5">
            <div className="">
              <Image
                src={
                  urlFor(item?.mainImage.asset._ref)
                    .width(100)
                    .height(100)
                    .url() || defaultImg()
                }
                alt=""
                width={100}
                height={100}
                className="rounded-lg block"
              />
            </div>
            <div className="relative flex flex-col flex-wrap -ml-4 w-[280px]">
              <h2 className="font-bold text-red-500 capitalize">
                {item?.title}
              </h2>
              <p className="leading-relaxed mb-3 capitalize">
                {cutStr(item.body[0].children[0].text, 100)} ...
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ListFeatureGame;
