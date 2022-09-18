import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from '../../../styles/globalStyles';
import { ButtonsMenu } from '../../../styles/indexStyle';

const ButtonModal = ({ height, icon, text, setShowModal }) => {
  return (
    <ButtonsMenu height={height} onClick={() => setShowModal(true)}>
      <Text color='#000000' fontSize={15}>
        {text}
      </Text>
      <FontAwesomeIcon icon={icon} fontSize={20} />
    </ButtonsMenu>
  );
};

export default ButtonModal;
