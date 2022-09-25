import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';

import { Text } from '../../styles/globalStyles';
import { ButtonsMenu } from '../../styles/indexStyle';
import { TIME_ROUND_CONVERTER, TEMA } from '../../helpers/menuConstants';

const ButtonMenu = ({
  height,
  icon,
  text,
  gameMode,
  gameTheme,
  gameMaxRound,
  setShowModalWarning1,
}) => {
  const router = useRouter();

  const checkChoosedMenuDropDown = () => {
    if (!gameMode || !gameTheme) {
      setShowModalWarning1(true);
    } else {
      if(gameMode === 'NORMAL'){
        router.push({
          pathname: '/game',
          query: {
            gameTheme: TEMA.indexOf(gameTheme),
            gameMaxRound: TIME_ROUND_CONVERTER[!gameMaxRound ? '1 minuto' : gameMaxRound],
          },
        });
      } else if (gameMode === 'SORTEIO'){
        router.push({
          pathname: '/slot',
          query: {
            gameMaxRound: TIME_ROUND_CONVERTER[!gameMaxRound ? '1 minuto' : gameMaxRound],
          },
        });
      }
    }
  };

  return (
    <ButtonsMenu height={height} onClick={checkChoosedMenuDropDown}>
      <Text color='#000000' fontSize={2.3}>
        {text}
      </Text>
      <FontAwesomeIcon icon={icon} className='iconsButtons' />
    </ButtonsMenu>
  );
};

export default ButtonMenu;
