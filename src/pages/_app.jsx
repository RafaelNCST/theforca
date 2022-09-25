import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <link rel='preload' as='font' href='/fonts/VerySimpleChalk.ttf' />
      <link rel='preload' as='image' href='/images/Background.svg' />
      <GlobalStyle />
      <Component {...pageProps} />
    </AuthProvider>
  );
};

export default MyApp;
