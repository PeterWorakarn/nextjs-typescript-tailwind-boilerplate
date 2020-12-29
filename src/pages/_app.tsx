import React from 'react';

import '../styles/tailwind.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container pt-8 mx-auto">
      <Component {...pageProps} />
    </div>
  );
}
