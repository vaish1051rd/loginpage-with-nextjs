 // pages/_app.js
// import '../styles/global.css';

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default MyApp;

import React from 'react';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    
    <div>
      
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;

