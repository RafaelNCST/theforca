import React from 'react';
import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
  Text,
  TextBold,
  ContentMid
} from '../../styles/globalStyles';
import { BodyModal, ButtonHandler } from '../ModalGame/style';

const ModalTip = ({ showModal, setShowModal}) => {

  if (!showModal) return null;

  return (
    <ModalStyled>
      <BodyModal width={40} height={35} zIndex={6}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <Text fontSize={4}>A DICA É: </Text>
          <ContentMid>
            <TextBold>DIAGRAMA</TextBold>
          </ContentMid>
          <ButtonHandler
            backColor={'#325AA4'}
            onClick={() => setShowModal(false)}
          >
            CONTINUAR
          </ButtonHandler>
        </ContainerContent>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
      </BodyModal>
    </ModalStyled>
  );
};

export default ModalTip;
