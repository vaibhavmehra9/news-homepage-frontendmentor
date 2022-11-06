import type { NextApiRequest, NextApiResponse } from 'next';
import Aricles from './json/articles.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Aricles);
}
