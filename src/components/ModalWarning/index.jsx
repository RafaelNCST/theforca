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
  TextWarning,
  ContainerText
} from './style';

const ModalWarning = ({ showModalWarning, setShowModalWarning, text1, text2 }) => {

  if (!showModalWarning) return null;

  return (
    <ModalStyled>
      <BodyModal width={40} height={32} zIndex={7}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
          <ContainerText>
            <TextBold number={2.5}>{text1} <TextWarning>{text2}</TextWarning></TextBold>
          </ContainerText>
          <ContentButtons direction={'column'}>
            <ButtonHandler backColor={'#325AA4'} onClick={() => setShowModalWarning(false)}>
              OK
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

export default ModalWarning;
