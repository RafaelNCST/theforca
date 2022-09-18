import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DropDown, ButtonOptions, PlaceHolders } from './style';

import { Text } from '../../../styles/globalStyles';

const MenuDropDown = ({ placeholder, zindex, top, array }) => {
  const [heightMenu, setHeightMenu] = useState(30);
  const [heightOptions, setHeightOptions] = useState(0);
  const [controlHeight, setControlHeight] = useState(false);
  const [chooseModeGame, setChooseOption] = useState(null);
  const [firstRun, setFirstRun] = useState(true);

  const handleHeightMenu = () => {
    if (controlHeight) {
      setHeightMenu(
        chooseModeGame === null ? array.length * 30 : array.length * 30 - 30,
      );
      setHeightOptions(30);
    } else {
      setHeightMenu(30);
      setHeightOptions(0);
    }
  };

  const handleChooseOption = item => {
    setChooseOption(item);
    setFirstRun(false);
    setControlHeight(!controlHeight);
  };

  useEffect(() => {
    handleHeightMenu();
  }, [controlHeight]);

  return (
    <DropDown zindex={zindex} top={top} height={heightMenu}>
      <ButtonOptions
        height={30}
        onClick={() => setControlHeight(!controlHeight)}
      >
        <PlaceHolders color={firstRun ? '#b4b8c5' : '#000000'}>
          {chooseModeGame || placeholder}
        </PlaceHolders>
        <FontAwesomeIcon icon={faChevronDown} />
      </ButtonOptions>
      {array.map((item, index) => {
        if (chooseModeGame === item || !controlHeight) return null;
        return (
          <ButtonOptions
            height={heightOptions}
            key={index}
            onClick={() => handleChooseOption(item)}
          >
            <Text color='#000000' fontSize={20}>
              {item}
            </Text>
          </ButtonOptions>
        );
      })}
    </DropDown>
  );
};

export default MenuDropDown;
