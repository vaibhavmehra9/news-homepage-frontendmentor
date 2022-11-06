import type { NextApiRequest, NextApiResponse } from 'next';
import NewsTrends from './json/news-trends.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(NewsTrends);
}
