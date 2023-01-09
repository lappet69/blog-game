// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}


export async function getAPI(req: NextApiRequest, res: NextApiResponse){
  const response = await fetch('https://my-project.sanity.io/v1/data/query/production');
  const data = await response.json();
  console.log(data)
  res.json(data);
};

export  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
