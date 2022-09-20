import React, { useEffect, useState } from 'react';
import {
  faPencil,
  faRankingStar,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';

import GoogleButton from '../components/googleButton';

import ButtonMenu from '../components/MenuComponents/ButtonsMenu';
import ButtonModal from '../components/MenuComponents/ButtonModal/ButtonModal';
import Modal from '../components/MenuComponents/ButtonModal/Modal';

import LoadingPencil from '../components/loadingPencil';

import MenuDropDown from '../components/MenuComponents/MenuDropDown';
import {
  BodyScreen,
  Menu,
  ContainerTop,
  ContainerMid,
  ContainerBottom,
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
} from '../helpers/menuConstants';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [controlDropDown, setControlDropDown] = useState(null);
  const [activeDropDown, setActiveDropDown] = useState(false);
  const [finishLoading, setFinishLoading] = useState(false);

  useEffect(() => {
    setFinishLoading(true);
  }, []);

  return (
    <BodyScreen>
      <GoogleButton />

      <LogoImage src='/images/Logo.png' alt='Logo do The Forca' />

      <Modal showModal={showModal} setShowModal={setShowModal} />

      {/* eslint-disable-next-line no-extra-boolean-cast */}
      {!!finishLoading ? (
        <Menu>
          <ContainerTop>
            <Text color='#ffffff' fontSize={40}>
              INÍCIO
            </Text>
          </ContainerTop>
          <ContainerDropDown>
            <MenuDropDown
              placeholder={PLACEHOLDER_MODE_GAME}
              zindex={3}
              top={60}
              array={MODE_GAME}
              controlDropDown={controlDropDown}
              setControlDropDown={setControlDropDown}
              activeDropDown={activeDropDown}
              setActiveDropDown={setActiveDropDown}
              numberDropDown={0}
            />
            <MenuDropDown
              placeholder={PLACEHOLDER_TEMA}
              zindex={2}
              top={110}
              array={TEMA}
              controlDropDown={controlDropDown}
              setControlDropDown={setControlDropDown}
              activeDropDown={activeDropDown}
              setActiveDropDown={setActiveDropDown}
              numberDropDown={1}
            />
            <MenuDropDown
              placeholder={PLACEHOLDER_TIME_ROUND}
              zindex={1}
              top={160}
              array={TIME_ROUND}
              controlDropDown={controlDropDown}
              setControlDropDown={setControlDropDown}
              activeDropDown={activeDropDown}
              setActiveDropDown={setActiveDropDown}
              numberDropDown={2}
            />
          </ContainerDropDown>
          <ContainerMid>
            <ButtonModal
              height={35}
              icon={faQuestion}
              text='COMO JOGAR'
              setShowModal={setShowModal}
            />
            <ButtonMenu
              router='/ranking'
              height={35}
              icon={faRankingStar}
              text='RANKING'
            />
          </ContainerMid>
          <ContainerBottom>
            <ButtonMenu
              router='/game'
              height={40}
              icon={faPencil}
              text='JOGAR'
            />
          </ContainerBottom>
        </Menu>
      ) : (
        <LoadingPencil />
      )}
    </BodyScreen>
  );
};

export default Login;
