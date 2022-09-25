import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { DropDown, ButtonOptions, PlaceHolders, TextOptions } from './style';

const MenuDropDown = ({
  placeholder,
  zindex,
  array,
  controlDropDown,
  setControlDropDown,
  activeDropDown,
  setActiveDropDown,
  numberDropDown,
  choosedOption,
  setChoosedOption,
  disabled,
}) => {
  const [firstRun, setFirstRun] = useState(true);

  const handleChoosedOption = item => {
    setChoosedOption(item);
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

  useEffect(() => {
    if(disabled){
      setFirstRun(true);
      setChoosedOption(placeholder);
    }
  }, [disabled]);

  return (
    <DropDown zindex={zindex}>
      <ButtonOptions color={disabled && numberDropDown === 1 ? null : '#b4b8c5'} onClick={disabled && numberDropDown === 1 ? null : () => handleDropDown()}>
        <PlaceHolders color={firstRun ? '#b4b8c5' : '#000000'}>
          {firstRun ? placeholder : choosedOption}
        </PlaceHolders>
        <FontAwesomeIcon icon={faChevronDown} />
      </ButtonOptions>
      {array.map((item, index) => {
        if (choosedOption === item) return null;

        return (
          <React.Fragment key={index}>
            {activeDropDown && controlDropDown === numberDropDown && (
              <ButtonOptions onClick={() => handleChoosedOption(item)}>
                <TextOptions color='#000000'>
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
