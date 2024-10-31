// pages/api/tweets.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

const TWITTER_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAJvUwgEAAAAACwUQarh%2FzGtYvmqzbM%2FYeHZzQAQ%3DEFY8cYS8o0hK0WM0yJwGboowrUlbTArBNXMon0QmEGXHpTLz7s";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Use the Twitter API endpoint to get tweet details
      const response = await axios.get('https://api.twitter.com/2/tweets', {
        headers: {
          Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
        },
      });

      // Send back the response data
      res.status(200).json(response.data.data);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
