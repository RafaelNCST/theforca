import styled from 'styled-components';

export const ContentHeader = styled.div`
    margin-top: -40px;
`;

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

export const Keyword = styled.div`
  border-bottom: ${({ number }) => number}px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonGuess = styled.button`
  height: 5vh;
  width: 10vh;
  border: 1px solid #000;
  border-radius: 8px;
  font-weight: bold;
  background-color: #C20B0B;
  font-family: 'VerySimpleChalk';
  font-size: 2.5vh;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  margin-bottom: 20px;

  :hover {
    background-color: #325aa4;
  }
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
    height: 15vh;
    padding: 10px;
    padding-left: 20px;
`;
