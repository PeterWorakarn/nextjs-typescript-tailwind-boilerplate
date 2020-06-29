import React from 'react';

import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto pt-8">
      <Component {...pageProps} />
    </div>
  );
}
