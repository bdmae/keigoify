import React from 'react';
import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0%, 20% {
    opacity: 0.4;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    opacity: 0.4;
    transform: translateY(0);
  }
`;

const DotContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #333;
  border-radius: 50%;
  animation: ${dotAnimation} 1s infinite;
`;

const TypingIndicator: React.FC = () => (
    <DotContainer>
      <Dot style={{ animationDelay: '0s' }} />
      <Dot style={{ animationDelay: '0.2s' }} />
      <Dot style={{ animationDelay: '0.4s' }} />
    </DotContainer>
  );

export default TypingIndicator;