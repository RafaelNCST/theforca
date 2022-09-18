import React from 'react';
import styled from 'styled-components';

export const ButtonLogin = styled.button`
  width: 45px;
  height: 45px;
  background-color: #000000;
  border: 0px;
  position: absolute;
  top: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  flex-direction: row;
  display: flex;
  cursor: pointer;
`;

const GoogleButton = () => {
  return (
    <ButtonLogin onClick={() => alert('oi')}>
      <img
        src='/images/google.png'
        height='20px'
        width='20px'
        alt='google logo'
      />
    </ButtonLogin>
  );
};

export default GoogleButton;
