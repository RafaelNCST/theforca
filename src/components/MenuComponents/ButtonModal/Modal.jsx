import React from 'react';

import {
  ModalStyled,
  BodyModal,
  ContainerBorder,
  ContainerContent,
  Pin,
  Button,
  Text,
} from '../../../styles/globalStyles';

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal && (
        <ModalStyled>
          <BodyModal>
            <ContainerBorder>
              <Pin />
              <Pin />
            </ContainerBorder>

            <ContainerContent>
              <Text fontSize={18} color='#FFFFFF'>
                Descubra a palavra seguindo a categoria escolhida.
              </Text>
              <Text fontSize={18} color='#FFFFFF'>
                Você terá 7 tentativas para terminar a palavra, onde cada letra
                terá 1:00 minuto para se escolher.
              </Text>
              <Text fontSize={18} color='#FFFFFF'>
                Você terá oportunidade de pedir dicas clicando em cima dela.
              </Text>
              <Button onClick={() => setShowModal(false)}>
                <Text fontSize={24} color='#FFFFFF'>
                  Ok
                </Text>
              </Button>
            </ContainerContent>

            <ContainerBorder>
              <Pin />
              <Pin />
            </ContainerBorder>
          </BodyModal>
        </ModalStyled>
      )}
    </>
  );
};

export default Modal;
