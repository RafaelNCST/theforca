import styled from 'styled-components';

export const BodyScreen = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 720px;
  margin: 0px auto;
  position: relative;
  user-select: none;
`;

export const ContainerHeader = styled.header`
  height: 20vh;
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: repeat(10, 1fr);
  padding-top: 10px;
  grid-gap: 20px;
`;

export const ContainerGame = styled.main`
  flex: 2;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(6, 1fr);
  flex-direction: row;
  width: 100%;
  padding: 10px;

  @media (max-width: 550px) {
    grid-template-rows: 15vh 1fr 10vh;
  }
`;

export const Options = styled.div`
  width: 1.5em;
  height: 1.5em;
  background-color: #8D818C;
  border: 3px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  grid-column: 1 / span 2;
  margin-top: 30px;
  cursor: pointer;
  z-index: 2;
  transition: ease-in-out 0.3s;
  font-size: min(4rem, calc(min(100em/2.15,20vh) / 6));

  @media (max-width: 550px) {
    margin-top: 5px;
    width: 1.2em;
    height: 1.2em;

    .gear {
    font-size: 1rem;
  }
  }

  .gear {
    font-size: 1.1rem;
  }

  :hover {
    background-color: #383B53;
  }
`;

export const Marker = styled.div`
  width: 50vh;
  height: 50vh;
  background-image: url('/images/marker.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  grid-column: 7 / span 3;
  grid-row-start: 1;
  grid-row-end: 4;
  padding-left: 10px;
  font-family: 'VerySimpleChalk';
  margin-right: -140px;
  font-size: min(4rem, calc(min(100em/2.15,20vh) / 6));

  @media (max-width: 550px) {
    grid-column: 3 / span 1;
    width: 50vw;
    height: 10em;
    font-size: 1em;
    padding-top: 25px;
    padding-left: 0px;
  }

  @media (min-height: 920px) and (max-height: 1000px) {
    width: 40vh;
    height: 40vh;
    margin-right: -140px;
  }

  @media (min-height: 1000px) and (max-height: 1200px) {
    width: 35vh;
    height: 35vh;
    margin-right: 0px;
  }

  @media (min-height: 1201px) {
    width: 35vh;
    height: 35vh;
    margin-left: -60px;
  }
`;

export const Eraser = styled.div`
  width: 30vh;
  height: 9vh;
  display: flex;
  flex-direction: row;
  grid-column: 6 / span 1;
  margin-top: 30px;
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  font-size: min(4rem, calc(min(100em/2.15,25vh) / 9));
  user-select: none;
  cursor: pointer;

  @media (max-width: 550px) {
    grid-column: 2 / span 1;
    width: 35vw;
    height: 9vh;
    font-size: min(4rem, calc(min(100em/2.15,25vh) / 11));
  }

  @media (min-height: 900px) {
    width: 20vh;
    height: 8vh;
    grid-column: 3 / span 1;
  }
`;

export const ButtonRed = styled.div`
  width: 60%;
  background-image: url('/images/borracha_vermelha.png');
  background-size: cover;
  background-repeat: no-repeat;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 550px) {
    padding-left: 10px;
  }
`;

export const ButtonBlue = styled.div`
  width: 40%;
  background-image: url('/images/borracha_azul.png');
  background-size: cover;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ContainerBoard = styled.div`
  display: flex;
  color: #DE541E;
  text-shadow: 1px 0 #000, -2px 0 #000, 0 1px #000, 0 -2px #000,
             1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
`;

export const Try = styled.div`
  margin-left: 10px;
`;

export const Time = styled.div`
  margin-left: 10px;
`;

export const ContainerTextTheme = styled.div` 
  width: 100%;
  height: auto;
  font-weight: bold;
  font-family: 'VerySimpleChalk';
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  grid-column: 2 / span 3;
  margin-left: 5px;

  @media (max-width: 550px) {
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column: 2 / span 3;
    height: 20vh;
    margin-top: 20px;
    font-size: 1em;
  }
`;

export const TheForcaImage = styled.img`
  height: 15rem;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column: 1;

  @media (max-width: 550px) {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column: 3;
    height: 25vh;
  }
`;

export const ContainerKeyword = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(15, 1fr);
  font-size: 5vh;
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  grid-column: 2 / span 6;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 550px) {
    grid-row-start: 3;
    grid-row-end: 3;
    grid-template-rows: repeat(2, 1fr);
    grid-column: 1 / span 6;
    grid-template-columns: repeat(17, ${({size}) => size}em);
    font-size: 3vh;
  }
`;

export const Keyword = styled.div`
  border-bottom: ${({number}) => number}px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 2;
`;

export const Word = styled.div`
  visibility: ${({visibility}) => visibility};
`;

export const KeyBoard = styled.div`
  user-select: none;
  flex-shrink: 0;
  padding: 0 0.3em 0.2em 0.3em;
  box-sizing: border-box;
  margin: 0px;
  flex: 1;
  display: grid;
  line-height: 1em;
  font-size: 2vh;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(30, 1fr);
  font-size: min(4rem, calc(min(100em/2.15,25vh) / 7));;
  grid-gap: 0.2em;
  font-weight: bold;
  color: #000000;
  width: 100%;
  font-weight: bold;
  font-family: 'VerySimpleChalk';
`;

export const Key = styled.div`
  outline: none;
  background-color: ${({backColor}) => backColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8%;
  cursor: pointer;
  border: none;
  grid-column: span 3;
  transition: ease-in-out 0.3s;

  :hover {
    background-color: ${({hoverBackColor}) => hoverBackColor};
  }
`;

export const KeyBorder = styled.div`
  outline: none;
  background-color: ${({backColor}) => backColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8%;
  cursor: pointer;
  border: none;
  grid-column: ${({ number }) => number} / span 3;
  transition: ease-in-out 0.3s;

  :hover {
    background-color: ${({hoverBackColor}) => hoverBackColor};
  }
`;

// export const KeyEnter = styled.button`
//   outline: none;
//   background-color: #8d818c;
//   font-size: 1em;
//   line-height: 1em;
//   display: flex;
//   margin: 0;
//   justify-content: center;
//   font-family: 'VerySimpleChalk';
//   align-items: center;
//   border-radius: 8%;
//   cursor: pointer;
//   border: none;
//   grid-column: 27 / span 6;
//   font-size: 2vh;
//   font-weight: bold;

//   @media (min-width: 653px) and (min-height: 280px) {
//     font-size: min(4vh);
//   }

//   @media (min-width: 280px) and (min-height: 653px) {
//     font-size: min(2.5vh);
//   }
// `;

// export const KeyDelete = styled.button`
//   outline: none;
//   background-color: #8d818c;
//   grid-column: span 3;
//   line-height: 1em;
//   display: flex;
//   margin: 0px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 8%;
//   cursor: pointer;
//   border: none;
//   font-size: min(2vh/2);

//   @media (min-width: 653px) and (min-height: 280px) {
//     font-size: min(5vh);
//   }

//   @media (min-width: 280px) and (min-height: 653px) {
//     font-size: min(2.5vh);
//   }
// `;
