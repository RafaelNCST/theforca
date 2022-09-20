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
          <BodyModal height={500} width={450}>
            <ContainerBorder>
              <Pin />
              <Pin />
            </ContainerBorder>

            <ContainerContent>
              <Text fontSize={22} color='#000000'>
                Descubra a palavra seguindo a categoria escolhida.
              </Text>
              <Text fontSize={22} color='#000000'>
                Você terá 7 tentativas para terminar a palavra, onde cada letra
                terá 1:00 minuto para se escolher.
              </Text>
              <Text fontSize={22} color='#000000'>
                Você terá oportunidade de pedir dicas (3 no máximo) e ter a
                opção de chutar e arriscar tudo pelo dobro de pontos.
              </Text>
              <Button onClick={() => setShowModal(false)}>
                <Text fontSize={24} color='#000000'>
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
