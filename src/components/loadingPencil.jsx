import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../public/lottie/loadingpencil.json';
import { Text } from '../styles/globalStyles';

import styled from 'styled-components';

const defaultOptions = {
  animationData: animationData,
  loop: true,
  autoPlay: true,
  resizeMode: 'cover',
};

const ContainerAnimation = styled.div`
  margin-bottom: -170px;
`;

const PencilLoading = () => {
  return (
    <>
      <ContainerAnimation>
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled
          height={300}
          width={300}
        />
      </ContainerAnimation>
      <Text fontSize={5} color='#000000'>
        Carregando
      </Text>
    </>
  );
};

export default PencilLoading;
