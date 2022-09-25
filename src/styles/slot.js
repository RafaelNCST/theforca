import styled from 'styled-components';

export const ContainerAnimation = styled.div`
  margin-bottom: -110px;
  margin-top: -70px;
`;

export const ContainerSlot = styled.div`
  display: flex;
  width: 350px;
  justify-content: center;
  align-items: center;
`;

export const FlipCard = styled.div`
  background-color: transparent;
  margin-left: 10px;
  border-radius: 8px;
  height: 70px;
  width: 140px;
  border-radius: 8px;
`;

export const CardFlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: rotateY(${({ number }) => number}deg);
  border-radius: 8px;
`;

export const CardFront = styled.div`
  background-color: ${({ backColor }) => backColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 8px;
  color: #fff;
`;

export const CardBack = styled.div`
  background-color: ${({ backColor }) => backColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #CCCABB;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 8px;
  color: #09CB85;
`;

export const TextDraw = styled.h2`
  font-size: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 110px;
  font-family: 'VerySimpleChalk';

  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;
