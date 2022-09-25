import React, { useState, useRef, useEffect } from 'react';
import {
  faPencil,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

// import useAuth from '../hooks/useAuth';

import LoadingPencil from '../components/loadingPencil';

// import GoogleButton from '../components/googleButton';

import ButtonMenu from '../components/MenuComponents/ButtonsMenu';
import ButtonModal from '../components/MenuComponents/ButtonModal/ButtonModal';
import Modal from '../components/MenuComponents/ButtonModal/Modal';

import MenuDropDown from '../components/MenuComponents/MenuDropDown';

import ModalWarning from '../components/ModalWarning';

import {
  BodyScreen,
  Menu,
  ContainerTop,
  ContainerMid,
  LogoImage,
  ContainerDropDown,
} from '../styles/indexStyle';

import { Text } from '../styles/globalStyles';

import {
  MODE_GAME,
  TEMA,
  TIME_ROUND,
  PLACEHOLDER_MODE_GAME,
  PLACEHOLDER_TEMA,
  PLACEHOLDER_TIME_ROUND,
  PLACEHOLDER_TEMA_SORTEIO_ESCOLHIDO,
} from '../helpers/menuConstants';

const InitialPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [controlDropDown, setControlDropDown] = useState(null);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const isMounted = useRef(false);
  const [finishLoading] = useState(isMounted);
  const [finishMounted, setFinishMounted] = useState(false);

  const [gameMode, setGameMode] = useState(null);
  const [gameTheme, setGameTheme] = useState(null);
  const [gameMaxRound, setGameMaxRound] = useState(null);
  const [showModalWarning1, setShowModalWarning1] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // const { user, signinGoogle } = useAuth();

  useEffect(() => {
    if (finishLoading) {
      setTimeout(() => setFinishMounted(true), 500);
    }
  }, [finishLoading]);

  useEffect(() => {
    if(gameMode === 'SORTEIO'){
      setDisabled(true);
    } else if(gameMode === 'NORMAL'){
      setDisabled(false);
    }
  }, [gameMode]);

  return (
    <BodyScreen ref={isMounted}>

      <ModalWarning showModalWarning={showModalWarning1} setShowModalWarning={setShowModalWarning1} text1='Por favor, selecione todos os campos obrigatórios: ' text2='Tema do jogo e Modo de Jogo.' />

      <LogoImage src='/images/Logo.png' alt='Logo do The Forca' />
      {/* eslint-disable-next-line no-extra-boolean-cast */}
      {!!finishMounted ? (
        <>
          {/* <GoogleButton signinGoogle={signinGoogle} /> */}

          <Modal showModal={showModal} setShowModal={setShowModal} />

          <Menu>
            <ContainerTop>
              <Text color='#ffffff' fontSize={5}>
                INÍCIO
              </Text>
            </ContainerTop>
            <ContainerDropDown>
              <MenuDropDown
                placeholder={PLACEHOLDER_MODE_GAME}
                zindex={3}
                array={MODE_GAME}
                controlDropDown={controlDropDown}
                setControlDropDown={setControlDropDown}
                activeDropDown={activeDropDown}
                setActiveDropDown={setActiveDropDown}
                numberDropDown={0}
                choosedOption={gameMode}
                setChoosedOption={setGameMode}
              />
              <MenuDropDown
                placeholder={disabled ? PLACEHOLDER_TEMA_SORTEIO_ESCOLHIDO : PLACEHOLDER_TEMA}
                zindex={2}
                array={TEMA}
                controlDropDown={controlDropDown}
                setControlDropDown={setControlDropDown}
                activeDropDown={activeDropDown}
                setActiveDropDown={setActiveDropDown}
                numberDropDown={1}
                choosedOption={gameTheme}
                setChoosedOption={setGameTheme}
                disabled={disabled}
              />
              <MenuDropDown
                placeholder={PLACEHOLDER_TIME_ROUND}
                zindex={1}
                array={TIME_ROUND}
                controlDropDown={controlDropDown}
                setControlDropDown={setControlDropDown}
                activeDropDown={activeDropDown}
                setActiveDropDown={setActiveDropDown}
                numberDropDown={2}
                choosedOption={gameMaxRound}
                setChoosedOption={setGameMaxRound}
              />
            </ContainerDropDown>
            <ContainerMid>
              <ButtonModal
                height={5}
                icon={faQuestion}
                text='COMO JOGAR'
                setShowModal={setShowModal}
              />
              <ButtonMenu
                gameMode={gameMode}
                gameTheme={gameTheme}
                gameMaxRound={gameMaxRound}
                // user={user}
                height={5}
                icon={faPencil}
                text='JOGAR'
                setShowModalWarning1={setShowModalWarning1}
              />
              {/* <ButtonMenu
                router='/ranking'
                height={5}
                icon={faRankingStar}
                text='RANKING'
              /> */}
            </ContainerMid>
          </Menu>
        </>
      ) : (
        <LoadingPencil />
      )}
    </BodyScreen>
  );
};

export default InitialPage;
