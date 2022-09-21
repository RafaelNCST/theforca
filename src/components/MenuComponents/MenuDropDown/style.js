import styled from 'styled-components';

export const PlaceHolders = styled.p`
  font-family: 'VerySimpleChalk';
  color: ${props => props.color};
  font-size: 15px;

  @media (max-height: 460px) {
    font-size: 10px;
  }
`;

export const TextOptions = styled.p`
  color: #000000;
  font-family: 'VerySimpleChalk';
  font-size: 13px;
  text-align: center;

  @media (max-height: 460px) {
    font-size: 8px;
  }
`;

export const DropDown = styled.div`
  width: 80%;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  outline: none;
  user-select: none;
  position: absolute;
  top: ${props => props.top}px;
  z-index: ${props => props.zindex};
  background-color: #ffffff;

  @media (max-height: 460px) {
    top: ${props => props.top / 1.2}px;
  }
`;

export const ButtonOptions = styled.button`
  width: 100%;
  height: 30px;
  display: flex;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;

  @media (max-height: 460px) {
    height: 15px;
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
    background-color: #b4b8c5;
  }
`;
