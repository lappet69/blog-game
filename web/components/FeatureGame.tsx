import React from 'react'
import { RootObject } from '../interface';
import ListFeatureGame from './ListFeatureGame'

interface Props {
    posts: RootObject[];
  }
const FeatureGame = ({ posts }: Props) => {
    return (
        <div className=''>
            <ListFeatureGame post={posts} />
        </div>
    )
}

export default FeatureGame