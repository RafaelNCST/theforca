import styled from 'styled-components';

export const BodyScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  height: 150px;
  width: 300px;

  @media (max-width: 400px) {
    height: 150px;
    width: 270px;
  }
`;

export const Menu = styled.div`
  position: relative;
  width: 400px;
  height: 300px;
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const ContainerTop = styled.div`
  width: 100%;
  background-color: green;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  display: flex;
`;

export const ContainerDropDown = styled.div`
  background-color: yellow;
  height: 130px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerMid = styled.div`
  width: 100%;
  background-color: red;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ContainerBottom = styled.div`
  width: 100%;
  background-color: blue;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ButtonsMenu = styled.button`
  width: 110px;
  height: ${props => props.height}px;
  background-color: #e9ebf8;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  transition: ease-in-out 0.2s;
  cursor: pointer;

  :hover {
    background-color: #969696;
  }

  :active {
    background-color: #4b4a4a;
  }
`;
