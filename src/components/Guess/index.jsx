import React from 'react';

import { KEYBOARD } from '../../helpers/keyboard';
import { WORD } from '../../helpers/mock';

import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
  TextBold,
  Text,
} from '../../styles/globalStyles';

import { BodyModal } from '../ModalGame/style';

import { KeyBoard, KeyBorder, Key } from '../../styles/gameStyle';

import { ContentHeader, ContainerKeyword, Keyword, ButtonGuess, MeanContainer, TextGuess } from './style';

const ModalGuess = ({ showModal, setShowModal }) => {

  if(!showModal) return null;

  return (
    <ModalStyled>
      <BodyModal width={80} height={80}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <ContentHeader>
            <TextBold number={2.5} color='#C20B0B'>MODO CHUTE ATIVADO!!!</TextBold>
            <Text fontSize={3}>LEIA A DESCRIÇÃO E ACERTE!</Text>
            <TextBold number={3} color='#C20B0B'>CUIDADO: SE ERRAR, VOCÊ PERDE!</TextBold>
          </ContentHeader>
          <MeanContainer><TextGuess fontSize={2} color={'#0026AD'}>Boas práticas estabelecidas para se realizar algo da melhor forma possível. Boas práticas estabelecidas para se realizar algo da melhor forma possível.</TextGuess></MeanContainer>
          <ContainerKeyword>
            {WORD.map((item, index) => {
              if (item === '_')
                return (
                  <Keyword number={0} key={index}>
                    {' '}
                  </Keyword>
                );

              return (
                <Keyword
                  number={4}
                  key={index}
                  gridColum={index === 8 ? '2 / span 1' : null}
                >
                  {item}
                </Keyword>
              );
            })}
          </ContainerKeyword>
          <ButtonGuess onClick={() => setShowModal(false)}>CHUTAR</ButtonGuess>
          <KeyBoard>
            {KEYBOARD.map((item, index) => (
                <React.Fragment key={index}>
                  {item === 'A' || item === 'Ç' ? (
                    <KeyBorder number={item === 'A' ? 2 : 3}>{item}</KeyBorder>
                  ) : (
                    <Key>{item}</Key>
                  )}
                </React.Fragment>
            ))}
          </KeyBoard>
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
