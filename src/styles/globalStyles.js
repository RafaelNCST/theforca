import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
  @font-face {
    font-family: 'VerySimpleChalk';
      src: url('/fonts/VerySimpleChalk.ttf');
      font-display: unset;
    }
    
    html, body {
      padding: 0px;
    margin: 0px;
    background-image: url('/images/Background.svg');
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  * {
    box-sizing: border-box;
    border: none;
  }
  
  #__next {
    height: 100%;
  }
  `;

export const Text = styled.p`
  font-size: ${({fontSize}) => fontSize}vh;
  color: ${props => props.color};
  font-family: 'VerySimpleChalk';
  text-align: center;
  font-weight: bold;
`;

export const ModalStyled = styled.div`
  margin: 0px;
  padding: 0px;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 5;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const TextBold = styled.div`
  font-size: ${({number}) => number}vh;
  color: ${({color}) => color};
  font-weight: bold;
  font-family: 'VerySimpleChalk';
  text-align: center;
`;

export const BodyModal = styled.div`
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: #f4f3f1;

  @media (max-width: 450px) {
    width: 90%;
  }

  @media (max-width: 280px) {
    width: 250px;
  }

  @media (max-height: 460px) {
    width: ${props => props.width / 1.3}px;
    height: ${props => props.height / 1.6}px;
  }

  @media (max-height: 320px) {
    height: ${props => props.height / 1.8}px;
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
  padding-left: 15px;
  padding-right: 15px;
  justify-content: space-between;
`;

export const TextModal = styled.p`
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  font-family: 'VerySimpleChalk';
  text-align: center;

  @media (max-width: 460px) {
    font-size: ${props => props.fontSize / 1.2}px;
  }

  @media (max-height: 350px) {
    font-size: ${props => props.fontSize / 1.5}px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #09cb85;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  user-select: none;

  @media (max-height: 460px) {
    width: 100px;
    height: 30px;
    margin-top: 0px;
  }

  :hover {
    background-color: #078557;
  }
`;

export const Pin = styled.div`
  border-radius: 50px;
  width: 13px;
  height: 13px;
  background-color: #b4b8c5;
  box-shadow: 2px 2px 2px 0px #000000;

  @media (max-height: 460px) {
    width: 12px;
    height: 12px;
    margin-top: 0px;
  }
`;

export const ContentMid = styled.div`
  margin-top: -20px;
`;
