import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { CasualSalaryman, FormalSalaryman, KeigoSalaryman } from '../atoms/SalarymanIcons';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);

  p {
    color: #000;
    font-size: 1.1rem;
  }
`;

const IconRow = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
  margin: 1.5rem 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: #333;
  flex: 1;
  p {
    margin-top: 0.5rem;
  }
`;

const CloseButton = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background: #000;
  }
  &:focus {
    outline: none;
  }
`;

const InstructionModal: React.FC = () => {
  // sychronously check if the user has seen the instructions before
  const [hasSeen, setHasSeen] = useState(() => localStorage.getItem('hasSeenInstructions') === 'true');

  const markAsSeen = useCallback(() => {
    localStorage.setItem('hasSeenInstructions', 'true');
    setHasSeen(true);
  }, []);

  if (hasSeen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Welcome to keigoify!</h2>
        <p>Translate any language into Japanese at different politeness levels.</p>
        <IconRow>
          <IconWrapper>
            <CasualSalaryman />
            <p>Casual</p>
            <small>(Informal language)</small>
          </IconWrapper>
          <IconWrapper>
            <FormalSalaryman />
            <p>Formal</p>
            <small>(Polite language)</small>
          </IconWrapper>
          <IconWrapper>
            <KeigoSalaryman />
            <p>Keigo</p>
            <small>(Honorific language)</small>C
          </IconWrapper>
        </IconRow>
        <CloseButton onClick={markAsSeen}>Got it!</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default React.memo(InstructionModal);
