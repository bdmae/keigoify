import React, { useState } from 'react'
import styled from 'styled-components';
import { CasualSalaryman, FormalSalaryman, KeigoSalaryman } from './SalarymanIcons';

export type Politeness = 'casual' | 'formal' | 'keigo';

const SalarymanIconsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  .icon-container {
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: border-color 0.2s;
  }
  .icon-container.active {
    border-color: blue;
  }
`;

interface PolitenessSelectorsProps {
  selectedFormality: Politeness; // politeness level selected by the user
  onFormalityChange: (newSelection: Politeness) => void;
}

const PolitenessSelectors: React.FC<PolitenessSelectorsProps> = ({ selectedFormality, onFormalityChange }) => {
    return (
      <SalarymanIconsWrapper>
        <div
          className={`icon-container ${selectedFormality === 'casual' ? 'active' : ''}`}
          onClick={() => onFormalityChange('casual')}
        >
          <CasualSalaryman />
        </div>
        <div
          className={`icon-container ${selectedFormality === 'formal' ? 'active' : ''}`}
          onClick={() => onFormalityChange('formal')}
        >
          <FormalSalaryman />
        </div>
        <div
          className={`icon-container ${selectedFormality === 'keigo' ? 'active' : ''}`}
          onClick={() => onFormalityChange('keigo')}
        >
          <KeigoSalaryman />
        </div>
      </SalarymanIconsWrapper>
    );
  };
  
export default PolitenessSelectors;
