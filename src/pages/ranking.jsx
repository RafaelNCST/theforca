import React from 'react';
import PencilLoading from '../components/loadingPencil';
import { BodyScreen, LogoImage } from '../styles/indexStyle';
import { Text } from '../styles/globalStyles';

const Ranking = () => {
  return (
    <BodyScreen>
      <LogoImage src='/images/Logo.png' />
      <PencilLoading />
      <Text fontSize={35} color='#000000'>
        Carregando
      </Text>
    </BodyScreen>
  );
};

export default Ranking;
