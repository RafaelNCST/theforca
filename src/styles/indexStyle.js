import styled from 'styled-components';

export const BodyScreen = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LogoImage = styled.img`
  width: 40vh;
`;

export const Menu = styled.div`
  position: relative;
  width: 55vh;
  height: 53vh;
  background-color: #000000;
  display: flex;
  justify-content: flex-start;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
      width: 40vh;
  }
`;

export const ContainerTop = styled.div`
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ContainerDropDown = styled.div`
  height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3vh;
  margin-bottom: 10px;
`;

export const ContainerMid = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const ContainerBottom = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-bottom: 10px;
`;

export const ButtonsMenu = styled.button`
  width: 16vh;
  height: ${props => props.height}vh;
  background-color: #e9ebf8;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  transition: ease-in-out 0.2s;
  cursor: pointer;
  user-select: none;

  .iconsButtons {
    font-size: 2.5vh;
  }

  :hover {
    background-color: #969696;
  }

  :active {
    background-color: #4b4a4a;
  }
`;
