import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Text } from '../../styles/globalStyles';
import { ButtonsMenu } from '../../styles/indexStyle';

const ButtonMenu = ({ router, height, icon, text }) => {
  return (
    <Link href={router}>
      <ButtonsMenu height={height}>
        <Text color='#000000' fontSize={15}>
          {text}
        </Text>
        <FontAwesomeIcon icon={icon} fontSize={20} />
      </ButtonsMenu>
    </Link>
  );
};

export default ButtonMenu;
