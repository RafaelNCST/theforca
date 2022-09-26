import styled from 'styled-components';

export const PlaceHolders = styled.p`
  font-family: 'VerySimpleChalk';
  color: ${props => props.color};
  font-size: 2vh;
  font-weight: bold;
`;

export const TextOptions = styled.p`
  color: #000000;
  font-family: 'VerySimpleChalk';
  font-size: 2vh;
  text-align: center;
`;

export const DropDown = styled.div`
  width: 80%;
  height: 4.5vh;
  background-color: #ffffff;
  border-radius: 8px;
  outline: none;
  user-select: none;
  z-index: ${props => props.zindex};
  background-color: #ffffff;
`;

export const ButtonOptions = styled.button`
  width: 100%;
  height: 4.5vh;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;

  :hover{
    background-color: ${({backColor}) => backColor};
  }

  :first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  :last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom: 1px solid #000000;
  }

  :active {
    background-color: ${({color}) => color};
  }
`;
