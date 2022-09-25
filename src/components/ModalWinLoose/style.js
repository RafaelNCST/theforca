import styled from 'styled-components';

export const TitleWord = styled.h2`
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  color: ${({ color }) => color};
  font-size: 3vh;

  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5vh;
    margin-bottom: 20px;
`;

