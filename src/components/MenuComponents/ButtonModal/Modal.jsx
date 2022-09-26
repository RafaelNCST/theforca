import React from 'react';

import {
  ModalStyled,
  BodyModal,
  ContainerBorder,
  ContainerContent,
  Pin,
  Button,
  TextModal,
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
              <TextModal color='#000000'>
                Descubra a palavra seguindo a categoria escolhida.
              </TextModal>
              <TextModal color='#000000'>
                Você terá 7 tentativas para terminar a palavra, onde cada letra
                terá o tempo escolhido no menu para jogar.
              </TextModal>
              <TextModal color='#000000'>
                Você terá oportunidade de pedir dicas (3 no máximo) e ter a
                opção de chutar e arriscar tudo.
              </TextModal>
              <Button onClick={() => setShowModal(false)}>
                <TextModal fontSize={24} color='#000000'>
                  Ok
                </TextModal>
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
