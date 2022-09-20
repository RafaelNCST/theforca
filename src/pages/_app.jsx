import React from 'react';
import { GlobalStyle } from '../styles/globalStyles';

const MyApp = ({ Component }) => {
  return (
    <>
      <link rel='preload' as='font' href='/fonts/VerySimpleChalk.ttf' />
      <link rel='preload' as='image' href='/images/Background.svg' />
      <GlobalStyle />
      <Component />
    </>
  );
};

export default MyApp;
