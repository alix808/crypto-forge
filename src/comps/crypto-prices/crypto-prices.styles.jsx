import styled from 'styled-components';
import { Link } from 'react-router-dom';

const grey = '#979797';
const blue = '#0099ff';

export const Center = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #252525;
`;

export const Image = styled.div`
  background: ${(props) =>
    `url(${props.imageUrl}) no-repeat center center/cover`};
  width: 25px;
  height: 25px;
`;

export const Red = styled.div`
  color: red;
  flex-basis: 100%;
`;

export const Green = styled.div`
  color: green;
  flex-basis: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${blue};
  flex-basis: 100%;
`;

export const Item = styled.div`
  flex-basis: 100%;
  color: ${(props) => props.inputColor || `${grey}`};
`;

export const Icon = styled.i`
  margin-left: 10px;
  font-size: 12px;
`;
