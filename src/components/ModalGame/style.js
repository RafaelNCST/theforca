import styled from 'styled-components';

export const BodyModal = styled.div`
  position: absolute;
  z-index: ${({zIndex}) => zIndex};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width}vh;
  height: ${({ height }) => height}vh;
  background-color: #f4f3f1;
  user-select: none;
`;

export const HeaderLogo = styled.div`
    width: 15vh;
    height: 8vh;
    background-image: url('/images/Logo.png');
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ContentButtons = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction};
  gap: 10px;
`;

export const ButtonHandler = styled.button`
  width: 15vh;
  height: 5vh;
  border: 1px solid #000;
  color: #000;
  border-radius: 8px;
  font-family: 'VerySimpleChalk';
  font-size: 3vh;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  :hover {
    background-color: ${({backColor}) => backColor};
    color: #fff;
    font-weight: bold;
  }
`;

export const SoundContainer = styled.div`
    font-family: 'VerySimpleChalk';
    border: 1px solid #000;
    display: flex;
    flex-direction: row;
    width: 20vh;
    height: 7vh;
    justify-content: space-between;
    padding-left: 2vh;
    padding-right: 2vh;
    border-radius: 12px;
    align-items: center;
    position: relative;
`;

export const TextSom = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -1.5vh;
    margin-left: 2vh;
    font-size: 2vh;
    background-color: #f4f3f1;
    width: 25px;
    display: flex;
    justify-content: center;
`;

export const HandlerSound = styled.h1`
    color: ${({color}) => color};
    font-size: 5vh;
`;

export const SoundImage = styled.img`
    width: 5vh;
    cursor: pointer;
`;