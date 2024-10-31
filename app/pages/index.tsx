// pages/index.tsx
"use client"
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>My Twitter Feed</h1>
      <blockquote className="twitter-tweet">
        <a href="https://twitter.com/jaiminp90840206/status/1851940024394088448"></a>
      </blockquote>
    </div>
  );
}
