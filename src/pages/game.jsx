import React, { useEffect, useState, useContext } from 'react';
import { SoundContext } from '../contexts/soundContext';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ModalTip from '../components/Tip';
import Modal from '../components/ModalGame/Modal';
import ModalGuess from '../components/Guess';
import ModalWinLoose from '../components/ModalWinLoose';
import ModalWarning from '../components/ModalWarning';
import { TEMA } from '../helpers/menuConstants';

import ModalWarningGuess from '../components/Guess/warningModal';

import { DATE } from '../helpers/DATE';

import { faGear } from '@fortawesome/free-solid-svg-icons';

import { KEYBOARD, COLORS } from '../helpers/keyboard';

import Lottie from 'react-lottie';
import animationData from '../../public/lottie/lock.json';

// import { ATTEMPT, TIME } from '../helpers/menuConstants';

import {
  BodyScreen,
  Key,
  KeyBoard,
  KeyBorder,
  ContainerGame,
  TheForcaImage,
  Keyword,
  ContainerKeyword,
  ContainerTextTheme,
  ContainerHeader,
  Eraser,
  Options,
  ButtonRed,
  ButtonBlue,
  Marker,
  ContainerBoard,
  Try,
  Time,
  Word,
} from '../styles/gameStyle';

const defaultOptions = {
  animationData: animationData,
  autoPlay: false,
  loop: false,
  resizeMode: 'contain',
};

const GameForca = () => {
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [showModalTip, setShowModalTip] = useState(false);
  const [showModalGuess, setShowModalGuess] = useState(false);
  const [showModalWin, setShowModalWin] = useState(false);
  const [showModalLoose, setShowModaLoose] = useState(false);
  const [guessWarningModal, setGuessWarningModal] = useState(false);
  const [idInterval, setIdInterval] = useState(null);

  const { gameMode, gameTheme, gameMaxRound } = useRouter().query;
  const router = useRouter();
  const { muted, handleMuted } = useContext(SoundContext);

  const [mainArray, setMainArray] = useState([
    'I',
    'N',
    'I',
    'C',
    'I',
    'A',
    'L',
  ]);
  const [visualArray, setVisualArray] = useState([
    'I',
    'N',
    'I',
    'C',
    'I',
    'A',
    'L',
  ]);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [hangManPhase, setHangManPhase] = useState(1);
  const [attempt, setAttempt] = useState(7);
  const [timeRound, setTimeRound] = useState(0);
  const [tips, setTips] = useState(3);
  const [gameReady, setGameReady] = useState(true);
  const [endGame, setEndGame] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [word, setWord] = useState(null);
  const [meant, setMeant] = useState(null);

  const drawWord = () => {
    const number = Math.floor(Math.random() * 10);
    setRandomNumber(number);
    const result = [];
    for (let item of DATE[gameTheme][number].palavra.toUpperCase()) {
      result.push(item);
    }

    setMeant(DATE[gameTheme][number].descricao.toUpperCase());
    setWord(DATE[gameTheme][number].palavra.toUpperCase());
    setVisualArray(result);
    setMainArray(result);
  };

  const refreshGame = () => {
    if (gameMode) {
      router.replace({
        pathname: '/slot',
        query: {
          gameMode: gameMode,
          gameMaxRound: gameMaxRound,
        },
      });
    } else {
      clearTimeout(idInterval);
      setEndGame(false);
      setHangManPhase(1);
      drawWord();
      setTips(3);
      setAttempt(7);
      setWrongWords([]);
      setCorrectWords([]);
      setGameReady(true);
    }
  };

  const handleEndGame = () => {
    clearTimeout(idInterval);
    setTimeRound(gameMaxRound);
    return null;
  };

  const handleClickWord = letter => {
    if (mainArray.indexOf(letter) !== -1) {
      setCorrectWords([...correctWords, letter]);
      setMainArray(mainArray.filter(item => item !== letter && item !== ' '));
      setTimeRound(gameMaxRound);
    } else {
      setWrongWords([...wrongWords, letter]);
      handleOnWrongLetter();
    }
  };

  const handleColorsKey = item => {
    if (correctWords.indexOf(item) !== -1) {
      return COLORS.cor;
    } else if (wrongWords.indexOf(item) !== -1) {
      return COLORS.wro;
    } else {
      return COLORS.nor;
    }
  };

  const handleOnWrongLetter = () => {
    setAttempt(prev => prev - 1);
    setHangManPhase(prev => prev + 1);
    setTimeRound(gameMaxRound);
  };

  const handleTimerRound = () => {
    clearTimeout(idInterval);
    setIdInterval(
      setTimeout(() => {
        setTimeRound(prev => prev - 1);
      }, 1000),
    );
  };

  useEffect(() => {
    if (!gameReady) {
      setTimeRound(parseInt(gameMaxRound));
    }
  }, [gameReady]);

  useEffect(() => {
    if (mainArray.length === 0) {
      setShowModalWin(true);
      setEndGame(true);
    } else if (attempt === 0) {
      setShowModaLoose(true);
      setEndGame(true);
    }
  }, [mainArray, attempt]);

  useEffect(() => {
    if (showModalTip) setTips(prev => prev - 1);
  }, [showModalTip]);

  useEffect(() => {
    if (endGame || showModalGuess) {
      handleEndGame();
    } else if (!gameReady) {
      if (timeRound === 0) {
        handleOnWrongLetter();
      } else {
        handleTimerRound();
      }
    }
  }, [timeRound]);

  useEffect(() => {
    if (gameTheme) {
      drawWord();
    }
  }, [gameTheme]);

  return (
    <React.Fragment>
      <audio
        autoPlay={true}
        muted={muted}
        loop
        src='/audios/musicGame.mp3'
        type='audio/mp3'
      />
      <Modal
        showModal={showModalMenu}
        setShowModal={setShowModalMenu}
        handler={muted}
        setHandler={handleMuted}
      />

      <ModalTip
        showModal={showModalTip}
        setShowModal={setShowModalTip}
        gameTheme={gameTheme}
        tips={tips}
        randomNumber={randomNumber}
      />

      <ModalWarningGuess
        showModal={guessWarningModal}
        setShowModal={setGuessWarningModal}
        activeGuess={setShowModalGuess}
        colorContinue={COLORS.wro}
        colorNo={COLORS.cor}
      />

      <ModalWarning
        showModalWarning={gameReady}
        setShowModalWarning={setGameReady}
        text1='Começar?'
        text2='O tempo irá andar quando você começar... Boa sorte'
      />

      <ModalGuess
        showModal={showModalGuess}
        setShowModal={setShowModalGuess}
        word={word}
        setShowModalWin={setShowModalWin}
        setShowModaLoose={setShowModaLoose}
        meant={meant}
      />

      <ModalWinLoose
        showModal={showModalWin}
        setShowModal={setShowModalWin}
        text1='BOA!'
        text2={'VOCÊ GANHOU!'}
        color={COLORS.cor}
        type={0}
        refreshGame={refreshGame}
      />

      <ModalWinLoose
        showModal={showModalLoose}
        setShowModal={setShowModaLoose}
        text1='VACILÃO!'
        text2={'VOCÊ PERDEU!'}
        color={COLORS.wro}
        type={1}
        refreshGame={refreshGame}
      />

      <BodyScreen>
        <ContainerHeader>
          <Eraser>
            <ButtonRed
              onClick={
                correctWords.length > 0 || wrongWords.length > 0
                  ? null
                  : () => setGuessWarningModal(true)
              }
            >
              {correctWords.length > 0 || wrongWords.length > 0 ? (
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled
                  width={80}
                  height={80}
                />
              ) : (
                'Chutar'
              )}
            </ButtonRed>
            <ButtonBlue
              onClick={tips === 0 ? null : () => setShowModalTip(true)}
            >
              {tips === 0 ? (
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled
                  width={100}
                  height={100}
                />
              ) : (
                'Dica'
              )}
            </ButtonBlue>
          </Eraser>
          <Marker>
            <ContainerBoard>
              TENTATIVAS: <Try>{attempt}</Try>
            </ContainerBoard>
            <ContainerBoard>
              TEMPO:{' '}
              <Time>
                {parseFloat(timeRound) === 60
                  ? `0${timeRound / 60}:00`
                  : `00:${timeRound > 9 ? timeRound : '0' + timeRound}`}
              </Time>
            </ContainerBoard>
            <Options onClick={() => setShowModalMenu(true)}>
              <FontAwesomeIcon icon={faGear} className='gear' />
            </Options>
          </Marker>
        </ContainerHeader>
        <ContainerGame>
          <TheForcaImage src={`/images/Fase${hangManPhase}.png`} />
          <ContainerTextTheme>TEMA: {TEMA[gameTheme]}</ContainerTextTheme>
          <ContainerKeyword>
            {visualArray.map((item, index) => {
              return (
                <Keyword
                  number={item === ' ' ? 0 : 4}
                  size={item.length > 12 ? 0.4 : 0.7}
                  key={index}
                >
                  <Word
                    visibility={
                      correctWords.indexOf(item) !== -1 ? 'visible' : 'hidden'
                    }
                  >
                    {item}
                  </Word>
                </Keyword>
              );
            })}
          </ContainerKeyword>
          {/* <Options>
            <FontAwesomeIcon icon={faGear} className='gear' />
          </Options> */}
        </ContainerGame>
        <KeyBoard>
          {KEYBOARD.map((item, index) => (
            <React.Fragment key={index}>
              {item === 'A' || item === 'Ç' ? (
                <KeyBorder
                  backColor={handleColorsKey(item)}
                  hoverBackColor={
                    correctWords.indexOf(item) !== -1 ||
                    wrongWords.indexOf(item) !== -1
                      ? null
                      : '#383B53'
                  }
                  onClick={
                    correctWords.indexOf(item) !== -1 ||
                    wrongWords.indexOf(item) !== -1
                      ? null
                      : () => handleClickWord(item)
                  }
                  number={item === 'A' ? 2 : 3}
                >
                  {item}
                </KeyBorder>
              ) : (
                <Key
                  backColor={handleColorsKey(item)}
                  hoverBackColor={
                    correctWords.indexOf(item) !== -1 ||
                    wrongWords.indexOf(item) !== -1
                      ? null
                      : '#383B53'
                  }
                  onClick={
                    correctWords.indexOf(item) !== -1 ||
                    wrongWords.indexOf(item) !== -1
                      ? null
                      : () => handleClickWord(item)
                  }
                >
                  {item}
                </Key>
              )}
            </React.Fragment>
          ))}
        </KeyBoard>
      </BodyScreen>
    </React.Fragment>
  );
};

export default GameForca;
