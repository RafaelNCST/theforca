import React from 'react';
import { useRouter } from 'next/router';
import { Pin, ContainerBorder, ContainerContent } from '../../styles/globalStyles';
import { BodyModal, HeaderLogo, ContentButtons, ButtonHandler } from './style';
import { Text, TextBold } from '../../styles/globalStyles';

const ModalChecked = ({ showModalChecked, setShowModalChecked }) => {
  const router = useRouter();

  if (!showModalChecked) return null;

  return (
      <BodyModal width={40} height={45} zIndex={8}>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
        <ContainerContent>
            <HeaderLogo />
            <Text fontSize={2}> 
                Deseja Realmente voltar ao Menu Principal?{'\n'}
                <TextBold>Note: que você irá perder todo seu progresso.</TextBold>
            </Text>
            <ContentButtons direction={'row'}>
                <ButtonHandler backColor={'#DB0D0D'} onClick={() => setShowModalChecked(false)}>NÃO</ButtonHandler>
                <ButtonHandler backColor={'#09CB85'} onClick={() => router.replace('/')}>SIM</ButtonHandler>
            </ContentButtons>
        </ContainerContent>
        <ContainerBorder>
          <Pin />
          <Pin />
        </ContainerBorder>
      </BodyModal>
  );
};

export default ModalChecked;
