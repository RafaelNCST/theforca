import React from 'react';
import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
  TextBold,
} from '../../styles/globalStyles';
import Lottie from 'react-lottie';
import animationHappy from '../../../public/lottie/haha.json';
import animationAngry from '../../../public/lottie/angry.json';

import { useRouter } from 'next/router';

import {
  BodyModal,
  ContentButtons,
  ButtonHandler,
} from '../ModalWarning/style';

import { TitleWord, ContainerText } from './style';

const ModalWinLoose = ({ showModal, setShowModal, text1, text2, color, type }) => {
  const router = useRouter();

  const defaultOptions = {
    animationData: type === 0 ? animationHappy : animationAngry,
    autoPlay: true,
    resizeMode: 'contain',
  };

  const handleRestartGame = () => {
    router.reload();
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <ModalStyled>
      <BodyModal width={40} height={35} zIndex={7}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <TitleWord color={color}>{text1}</TitleWord>
          <Lottie options={defaultOptions} isClickToPauseDisabled width={45}/>
          <ContainerText>
            <TextBold>{text2}</TextBold>
          </ContainerText>
          <ContentButtons direction={'row'}>
            <ButtonHandler
              backColor={'#325AA4'}
              onClick={handleRestartGame}
            >
              CONTINUAR
            </ButtonHandler>
            <ButtonHandler
              backColor={'#325AA4'}
              onClick={() => router.replace('/')}
            >
              MENU
            </ButtonHandler>
          </ContentButtons>
        </ContainerContent>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
      </BodyModal>
    </ModalStyled>
  );
};

export default ModalWinLoose;
