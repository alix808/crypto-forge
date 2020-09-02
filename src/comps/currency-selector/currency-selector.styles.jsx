import styled from 'styled-components';

const grey = '#979797';
const dark = '#181818';

export const Select = styled.select`
  background: ${dark};
  color: ${grey};
  border-radius: 4px;
  position: absolute;
  top: 12px;
  left: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
