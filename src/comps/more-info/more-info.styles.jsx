import styled from 'styled-components';

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

export const Container = styled.div`
  width: 90%;
  height: 90vh;
`;

export const Text = styled.div`
  color: ${grey};
`;

export const Title = styled.div`
  color: ${blue};
  font-size: 16px;
  margin-bottom: 12px;
`;

export const Icon = styled.i`
  color: ${blue};
  font-size: 16px;
  margin-bottom: 12px;
  cursor: pointer;
`;
