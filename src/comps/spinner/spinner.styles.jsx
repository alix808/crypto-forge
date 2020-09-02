import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const CircleBorder = styled.div`
  margin-right: 20px;
  width: 36px;
  height: 36px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgb(63, 249, 220);
  background: linear-gradient(
    0deg,
    rgba(63, 249, 220, 0.1) 33%,
    rgba(0, 153, 255, 1) 100%
  );
  animation: ${spin} 0.8s linear 0s infinite;
`;

export const CircleCore = styled.div`
  width: 100%;
  height: 100%;
  background-color: #181818;
  border-radius: 50%;
`;
