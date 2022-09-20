import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DropDown, ButtonOptions, PlaceHolders, TextOptions } from './style';

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
                <TextOptions color='#000000' fontSize={14}>
                  {item}
                </TextOptions>
              </ButtonOptions>
            )}
          </React.Fragment>
        );
      })}
    </DropDown>
  );
};

export default MenuDropDown;
