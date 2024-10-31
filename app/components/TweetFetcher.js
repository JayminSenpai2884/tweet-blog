// components/TweetFetcher.js
"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tweet } from 'react-tweet';

const TweetFetcher = () => {
  const [tweets, setTweets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get('/api/tweets');
        setTweets(response.data);
      } catch (err) {
        setError(err.message);
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
