import React from 'react';
import PencilLoading from '../components/loadingPencil';
import { BodyScreen, LogoImage } from '../styles/indexStyle';

const Ranking = () => {
  return (
    <BodyScreen>
      <LogoImage src='/images/Logo.png' />
      <PencilLoading />
    </BodyScreen>
  );
};

export default Ranking;
