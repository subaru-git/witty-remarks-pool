import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const json = fs.readFileSync(path.join(process.cwd(), "data/data.json"));
  res.status(200).json(JSON.parse(json.toString()));
}
