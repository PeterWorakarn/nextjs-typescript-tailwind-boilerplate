import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className="mb-4 text-4xl text-center">Welcome to Next.js + TypeScript + TailwindCSS boilerplate</h1>
      <h2 className="text-xl font-bold">Features</h2>
      <ul>
        <li>Next.js</li>
        <li>TypeScript</li>
        <li>TailwindCSS (with PurgeCSS for production deployment)</li>
        <li>Airbnb&apos; ESLint rules</li>
      </ul>
      <p>See <Link href="/counter"><a className="text-blue-500">counter page</a></Link></p>
    </div>
  );
};

export default HomePage;
