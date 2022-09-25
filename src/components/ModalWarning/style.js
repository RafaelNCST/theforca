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

export const TextWarning = styled.p`
  color: #C20B0B;
`;

export const ContainerText = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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