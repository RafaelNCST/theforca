import React, { useState } from 'react';

import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
  TextBold,
  Text,
} from '../../styles/globalStyles';

import { BodyModal } from '../ModalGame/style';

import {
  ContentHeader,
  ButtonGuess,
  MeanContainer,
  TextGuess,
  InputMeant,
  BlankWarning,
} from './style';

const ModalGuess = ({
  showModal,
  setShowModal,
  word,
  setShowModalWin,
  setShowModaLoose,
  meant
}) => {
  const [text, setText] = useState(null);
  const [visibility, setVisibility] = useState('hidden');

  if (!showModal) return null;

  const handleChange = () => {
    if (!text) {
      setVisibility('visibility');
      setTimeout(() => {
        setVisibility('hidden');
      }, 10000);
    } else if (text.toUpperCase() === word.toUpperCase()) {
      setShowModal(false);
      setShowModalWin(true);
    } else {
      setShowModal(false);
      setShowModaLoose(true);
    }
  };

  return (
    <ModalStyled>
      <BodyModal width={60} height={70}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <ContentHeader>
            <TextBold number={2.5} color='#C20B0B'>
              MODO CHUTE ATIVADO!!!
            </TextBold>
            <Text fontSize={3}>
              LEIA A DESCRIÇÃO E ACERTE, SE NÃO VOCÊ PERDE!
            </Text>
            <TextBold number={3} color='#C20B0B'>
              CUIDADO: SEM ACENTOS E SOMENTE ESPAÇOS!
            </TextBold>
          </ContentHeader>
          <MeanContainer>
            <TextGuess fontSize={2} color={'#0026AD'}>
              {meant}
            </TextGuess>
          </MeanContainer>
          <InputMeant
            pattern='[A-Za-z]+$'
            onInput={t => setText(t.target.value)}
          />
          <BlankWarning visibility={visibility}>DIGITE UM CHUTE!</BlankWarning>
          <ButtonGuess onClick={() => handleChange()}>CHUTAR</ButtonGuess>
        </ContainerContent>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
      </BodyModal>
    </ModalStyled>
  );
};

export default ModalGuess;
