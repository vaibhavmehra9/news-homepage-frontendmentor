import type { NextApiRequest, NextApiResponse } from 'next';
import Routes from './json/routes.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(Routes);
}
