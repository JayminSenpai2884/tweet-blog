// components/TweetFetcher.tsx
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tweet } from 'react-tweet';

// Define a type for the tweet data
type TweetData = {
  id: string; // Adjust the type based on your actual tweet ID type
  // Add other tweet properties as needed
};

const TweetFetcher = () => {
  const [tweets, setTweets] = useState<TweetData[]>([]); // Specify the type for tweets
  const [error, setError] = useState<string | null>(null); // Specify the type for error

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get<TweetData[]>('/api/tweets'); // Specify the response type
        setTweets(response.data);
      } catch (err) {
        setError((err as Error).message); // Assert err as Error
      }
    };

    fetchTweets();
  }, []);

  if (error) {
    return <div>Error fetching tweets: {error}</div>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} id={tweet.id} />
      ))}
    </div>
  );
};

export default TweetFetcher;
