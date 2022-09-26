import React from 'react';
import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
  TextBold,
} from '../../styles/globalStyles';

import {
  BodyModal,
  ContentButtons,
  ButtonHandler,
} from '../ModalWarning/style';

import { TitleWord, ContainerText } from '../ModalWinLoose/style';

const ModalWarningGuess = ({ showModal, setShowModal, activeGuess, colorContinue, colorNo }) => {
    
  const handleGuessAccept = () => {
    setShowModal(false);
    activeGuess(true);
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
          <TitleWord color={colorContinue}>DESEJA MESMO FAZER ISSO?</TitleWord>
          <ContainerText>
            <TextBold>UMA VEZ ATIVADO O MODO CHUTE, VOCÊ ACERTA OU PERDE</TextBold>
          </ContainerText>
          <ContentButtons direction={'row'}>
            <ButtonHandler
              backColor={colorContinue}
              onClick={handleGuessAccept}
            >
              CONTINUAR
            </ButtonHandler>
            <ButtonHandler
              backColor={colorNo}
              onClick={() => setShowModal(false)}
            >
              NÃO
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

export default ModalWarningGuess;
