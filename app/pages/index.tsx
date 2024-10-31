// pages/index.js
import React from 'react';
import TweetFetcher from '../components/TweetFetcher';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Latest Tweets</h1>
      <TweetFetcher />
    </div>
  );
}
