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
  flex-direction: row;
  width: 100%;
  padding: 10px;
`;

export const Options = styled.div`
  width: 50px;
  height: 50px;
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

  .gear {
    font-size: 1.3rem;
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
  grid-column: 8 / span 3;
  grid-row-start: 1;
  grid-row-end: 4;
  padding-left: 10px;
  font-family: 'VerySimpleChalk';
  margin-right: -80px;
  font-size: min(4rem, calc(min(100em/2.15,25vh) / 6));


  @media (max-width: 650px) and (max-height: 700px) {
    width: 40vw;
    height: 40vw;
    font-size: min(4rem, calc(min(100em/2.15,25vw) / 6));
  }

  @media (max-width: 500px) and (max-height: 700px) {
    width: 50vw;
    height: 50vw;
    min-height: 100px;
    min-width: 100px;
    font-size: min(4rem, calc(min(100em/2.15,25vw) / 5));
    grid-column: 4 / span 3;
  }

  /* @media (max-width: 600px) and (max-height: 800px) {
    grid-column: 3 / span 1;
    width: 30vh;
    height: 35vh;
    margin-left: -35px;
    font-size: 3.0vh;
  }

  @media (max-width: 360px) {
    grid-column: 3 / span 1;
    width: 50vw;
    height: 22vh;
    font-size: 2.2vh;
  }

  @media (max-width: 320px) and (max-height: 561px) {
    padding-top: 15px;
    padding-right: 10px;
    font-size: 2.6vh;
  } */
`;

export const Eraser = styled.div`
  width: 30vh;
  height: 9vh;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  grid-column: 7 / span 1;
  margin-top: 30px;
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  font-size: min(4rem, calc(min(100em/2.15,25vh) / 9));

  @media (max-width: 650px) and (max-height: 700px) {
    width: 30vw;
    height: 9vw;
    font-size: min(4rem, calc(min(100em/2.15,25vw) / 7));
  }

  @media (max-width: 500px) and (max-height: 700px) {
    width: 30vw;
    height: 12vw;
    font-size: min(4rem, calc(min(100em/2.15,25vw) / 7));
    grid-column: 3 / span 1;
  }

  /* @media (max-width: 600px) and (max-height: 800px) {
    grid-column: 2 / span 1;
    width: 40vw;
    height: 8vh;
    font-size: 2vh;
  }

  @media (max-width: 360px) {
    grid-column: 1 / span 2;
    width: 40vw;
    height: 7vh;
    margin-left: 10px;
    font-size: 1.8vh;
  } */
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
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const TheForcaImage = styled.img`
  height: 15rem;
  grid-row-start: 1;
  grid-row-end: 3;
`;

// export const SubContainer = styled.div`
//   width: 100%;
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   grid-template-columns: repeat(3, 1fr);
//   grid-column-start: span 2;
//   justify-content: space-between;

//   @media (max-width: 750px) {
//     grid-template-rows: 1fr 1fr 1fr;
//   }
// `;

export const ContainerKeyword = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(9, 1fr);
  font-size: 5vh;
  font-family: 'VerySimpleChalk';
  font-weight: bold;
  grid-column: 2 / span 5;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 750px){
    font-size: 3vh;
    grid-column: 1 / span 3;
  }
`;

export const Keyword = styled.div`
  border-bottom: ${({number}) => number}px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: ${({gridColum}) => gridColum};
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
