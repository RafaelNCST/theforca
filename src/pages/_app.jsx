import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';
import { SoundProvider } from '../contexts/soundContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <SoundProvider>
      <link rel='preload' as='font' href='/fonts/VerySimpleChalk.ttf' />
      <link rel='preload' as='image' href='/images/Background.svg' />
      <GlobalStyle />
      <Component {...pageProps} />
    </SoundProvider>
  );
};

export default MyApp;
