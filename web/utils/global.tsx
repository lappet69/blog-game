import imageUrlBuilder from '@sanity/image-url'
import client from '../client'
import NotFound from '../assets/notfound.png';

const builder = imageUrlBuilder(client)

export const urlFor=(source:any)=> builder.image(source)

export const defaultImg =()=> NotFound