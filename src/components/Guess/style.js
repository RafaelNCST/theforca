import styled from 'styled-components';

export const ContentHeader = styled.div``;

export const ContainerKeyword = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(16, 1fr);
  font-size: 3vh;
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputMeant = styled.input`
  width: 80%;
  height: 5vh;
  border: 1px solid #000;
  border-radius: 12px;
  padding-left: 10px;
  font-size: 2vh;

  @media (orientation: landscape) {
    font-size: 2.5vh;
  }
`;

export const Keyword = styled.div`
  border-bottom: ${({ number }) => number}px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGuess = styled.button`
  height: 5vh;
  width: 15vh;
  border: 1px solid #000;
  border-radius: 8px;
  font-weight: bold;
  background-color: #c20b0b;
  font-family: 'VerySimpleChalk';
  font-size: 2.5vh;
  cursor: pointer;
  transition: ease-in-out 0.2s;

  @media (max-height: 280px) {
    margin-top: -5px;
  }

  :hover {
    background-color: #325aa4;
  }
`;

export const BlankWarning = styled.h3`
  font-family: 'VerySimpleChalk';
  visibility: ${({ visibility }) => visibility};
  color: #c20b0b;
  height: 5px;
  font-size: 2vh;
`;

export const TextGuess = styled.p`
  font-size: ${props => props.fontSize}vh;
  color: ${props => props.color};
  font-family: 'VerySimpleChalk';
  text-align: center;
`;

export const MeanContainer = styled.div`
  background-image: url('/images/folha.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 50vh;
  height: 20vh;
  padding: 10px;
  padding-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 80vw;
  }
`;
