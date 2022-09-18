import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Text = styled.p`
  @font-face {
    font-family: 'VerySimpleChalk';
    src: url('/fonts/VerySimpleChalk.ttf');
  }

  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  font-family: 'VerySimpleChalk';
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-image: url('/images/Background.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
    border: none;
  }
`;

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  z-index: 5;
`;

export const BodyModal = styled.div`
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 500px;
  background-color: #8d818c;
  border-radius: 20px;

  @media (max-width: 400px) {
    width: 270px;
  }
`;

export const ContainerBorder = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
`;

export const ContainerContent = styled.div`
  display: flex;
  height: 80%;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #09cb85;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  :hover {
    background-color: #078557;
  }
`;

export const Pin = styled.div`
  border-radius: 50px;
  width: 15px;
  height: 15px;
  background-color: #b4b8c5;
  box-shadow: 2px 2px 2px 0px #000000;
`;
