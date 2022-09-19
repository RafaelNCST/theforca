import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DropDown, ButtonOptions, PlaceHolders } from './style';

import { Text } from '../../../styles/globalStyles';

const MenuDropDown = ({
  placeholder,
  zindex,
  top,
  array,
  controlDropDown,
  setControlDropDown,
  activeDropDown,
  setActiveDropDown,
  numberDropDown,
}) => {
  const [chooseOption, setChooseOption] = useState(null);
  const [firstRun, setFirstRun] = useState(true);

  const handleChooseOption = item => {
    setChooseOption(item);
    setFirstRun(false);
    setActiveDropDown(false);
  };

  const handleDropDown = () => {
    setActiveDropDown(!activeDropDown);
    setControlDropDown(numberDropDown);
    if (controlDropDown !== numberDropDown) {
      setActiveDropDown(true);
    }
  };

  return (
    <DropDown zindex={zindex} top={top}>
      <ButtonOptions height={30} onClick={handleDropDown}>
        <PlaceHolders color={firstRun ? '#b4b8c5' : '#000000'}>
          {chooseOption || placeholder}
        </PlaceHolders>
        <FontAwesomeIcon icon={faChevronDown} />
      </ButtonOptions>
      {array.map((item, index) => {
        if (chooseOption === item) return null;

        return (
          <React.Fragment key={index}>
            {activeDropDown && controlDropDown === numberDropDown && (
              <ButtonOptions onClick={() => handleChooseOption(item)}>
                <Text color='#000000' fontSize={20}>
                  {item}
                </Text>
              </ButtonOptions>
            )}
          </React.Fragment>
        );
      })}
    </DropDown>
  );
};

export default MenuDropDown;
