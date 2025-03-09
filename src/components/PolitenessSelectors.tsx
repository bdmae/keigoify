import styled from 'styled-components';
import { CasualSalaryman, FormalSalaryman, KeigoSalaryman } from './SalarymanIcons';

export type Politeness = 'casual' | 'formal' | 'keigo';

const SalarymanIconsWrapper = styled.div`
  display: flex;
  justify-content: center;

  .icon-container {
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: border-color 0.2s;
    opacity: 0.3;
  }
  .icon-container.active {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: auto;

    @media (min-width: 768px) {
      max-width: 100px;
    }
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
