import React from 'react'
import { RootObject } from '../interface';
import ListFeatureGame from './ListFeatureGame'

interface Props {
    posts: RootObject[];
  }
const FeatureGame = ({ posts }: Props) => {
    return (
        <div className='flex w-full flex-col md:w-full lg:w-auto py-20'>
            <h2 className='font-semibold text-lg uppercase py-2 px-5 rounded-sm bg-red-500 italic'>Featured Games</h2>
            <ListFeatureGame post={posts} />
        </div>
    )
}

export default FeatureGame