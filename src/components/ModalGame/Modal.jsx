import React, { useState } from 'react';
import ModalChecked from './modalChecked';
import {
  ModalStyled,
  Pin,
  ContainerBorder,
  ContainerContent,
} from '../../styles/globalStyles';

import {
  BodyModal,
  HeaderLogo,
  ContentButtons,
  SoundContainer,
  ButtonHandler,
  HandlerSound,
  SoundImage,
  TextSom,
} from './style';

const Modal = ({ showModal, setShowModal }) => {
  const [handler, setHandler] = useState(false);
  const [showModalChecked, setShowModalChecked] = useState();

  if (!showModal) return null;

  return (
    <ModalStyled>

      <ModalChecked
        showModalChecked={showModalChecked}
        setShowModalChecked={setShowModalChecked}
      />

      <BodyModal width={40} height={45} zIndex={7}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <HeaderLogo />
          <ContentButtons direction={'column'}>
            <ButtonHandler backColor={'#325AA4'} onClick={() => setShowModal(false)}>
              VOLTAR
            </ButtonHandler>
            <ButtonHandler backColor={'#325AA4'} onClick={() => setShowModalChecked(true)}>
              MENU
            </ButtonHandler>
          </ContentButtons>
          <SoundContainer>
            <TextSom>SOM</TextSom>
            <HandlerSound color={handler ? '#65DC52' : '#C20B0B'}>
              {handler ? 'ON' : 'OFF'}
            </HandlerSound>
            <SoundImage
              onClick={() => setHandler(!handler)}
              src={handler ? '/images/sound.png' : '/images/soundBlock.png'}
            />
          </SoundContainer>
        </ContainerContent>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
      </BodyModal>
    </ModalStyled>
  );
};

export default Modal;
