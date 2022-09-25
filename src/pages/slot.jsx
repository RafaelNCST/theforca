import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TEMA } from '../helpers/menuConstants';
import { TextBold } from '../styles/globalStyles';
import { LogoImage, BodyScreen } from '../styles/indexStyle';
import Lottie from 'react-lottie';
import animationData from '../../public/lottie/slot.json';

import {
  ContainerAnimation,
  ContainerSlot,
  FlipCard,
  CardFlipInner,
  CardFront,
  CardBack,
  TextDraw,
} from '../styles/slot';

const defaultOptions = {
  animationData: animationData,
  autoPlay: true,
  resizeMode: 'cover',
};

const SlotWord = () => {

  const router = useRouter();

  const { gameMaxRound } = useRouter().query;

  const [rotateNumber, setRotateNumber] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [count, setCount] = useState(3);

  const FlipCardHandler = () => {
    setRotateNumber(180);

    const number = Math.floor(Math.random() * 4);
    setRandomNumber(number);

    setTimeout(() => {
        router.push({
            pathname: '/game',
            query: { 
                gameTheme: number, 
                gameMaxRound: gameMaxRound
            }
        });
    }, 2000);
  };

  const handleCount = () => {
    setTimeout(() => {
        setCount(count-1);
    }, 1000);    
  };

  useEffect(() => {
    if(count === 0){
        setTimeout(() => {
            FlipCardHandler();
        }, 1000);
    } else {
        handleCount();
    }
  }, [count]);

  return (
    <BodyScreen>
      <LogoImage src='/images/Logo.png' />
      <ContainerAnimation>
        <Lottie options={defaultOptions} height={300} width={300} />
      </ContainerAnimation>
      <ContainerSlot>
        <TextBold>Seu Tema é: </TextBold>
        <FlipCard number={rotateNumber}>
          <CardFlipInner number={rotateNumber}>
            <CardFront>
              <TextDraw>
                {count}
              </TextDraw>
            </CardFront>
            <CardBack>
              <TextDraw>
                {TEMA[randomNumber]}
              </TextDraw>
            </CardBack>
          </CardFlipInner>
        </FlipCard>
      </ContainerSlot>
    </BodyScreen>
  );
};

export default SlotWord;
