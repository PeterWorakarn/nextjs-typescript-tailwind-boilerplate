import React from 'react';
import Link from 'next/link';
import tw, { css } from 'twin.macro';

const twinCss = css`
  font-size: 36px;
  ${tw`mb-4 text-center`}
`;
const HomePage = () => {
  return (
    <div>
      <h1 css={twinCss} className="text-red-500">
        Welcome to Next.js + TypeScript + TailwindCSS boilerplate
      </h1>
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
