import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from '../../../styles/globalStyles';
import { ButtonsMenu } from '../../../styles/indexStyle';

const ButtonModal = ({ height, icon, text, setShowModal }) => {
  return (
    <ButtonsMenu height={height} onClick={() => setShowModal(true)}>
      <Text color='#000000' fontSize={2.3}>
        {text}
      </Text>
      <FontAwesomeIcon icon={icon} fontSize={18} />
    </ButtonsMenu>
  );
};

export default ButtonModal;
