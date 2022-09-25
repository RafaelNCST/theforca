import React from 'react';
import styled from 'styled-components';

import useAuth from '../hooks/useAuth';

export const ButtonLogin = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #000000;
  border: 0px;
  position: absolute;
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  flex-direction: row;
  display: flex;
  cursor: pointer;
`;

const GoogleButton = ({ signinGoogle }) => {
  const { user } = useAuth();

  return (
    <>
      {/* eslint-disable-next-line no-extra-boolean-cast */}
      {!!user ? (
        <ButtonLogin height={20} width={20} top={60} right={60}>
          <img
            src={user?.photoUrl}
            alt='imagem da conta google'
            style={{ display: 'flex', flex: 1, borderRadius: 50 }}
          />
        </ButtonLogin>
      ) : (
        <ButtonLogin
          width={15}
          height={15}
          top={20}
          right={20}
          onClick={signinGoogle}
        >
          <img
            src='/images/google.png'
            height='15px'
            width='15px'
            alt='google logo'
          />
        </ButtonLogin>
      )}
    </>
  );
};

export default GoogleButton;
