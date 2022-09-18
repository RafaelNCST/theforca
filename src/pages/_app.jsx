import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
