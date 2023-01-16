import React from 'react'
import Image from 'next/image'
import { cutStr, defaultImg, urlFor } from '../utils/global'
import { RootObject } from '../interface';

interface Props {
    post: RootObject[];
}
const ListFeatureGame = ({ post }: Props) => {
    return (
        <div className=''>
            {post.map((item: RootObject) => (
                <div className='flex gap-8 relative py-5'>
                    <div className="w-100 h-100" >
                        <Image src={urlFor(item?.mainImage.asset._ref).url() || defaultImg()} alt="" width={100} height={100} className="rounded-lg h-full" />
                    </div>
                    <div className='relative flex flex-col flex-wrap -ml-4 w-[280px]'>
                        <h2 className='font-bold text-red-500'>{item?.title}</h2>
                        <p className="leading-relaxed mb-3 capitalize">
                        {item.body.map((paragraph) =>
                          paragraph.children.map((item) => cutStr(item.text, 50))
                        )} ...
                      </p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ListFeatureGame