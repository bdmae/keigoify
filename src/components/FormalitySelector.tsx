import React from 'react'
import styled from 'styled-components';

const SelectorWrapper = styled.div`
    select {
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        border: 1px solid #ccc;
    }
`;

interface FormalitySelectorProps {
    selectedFormality: string;
    onSelectFormality: (formality: string) => void;
}

const FormalitySelector: React.FC<FormalitySelectorProps> = ({selectedFormality, onSelectFormality}) => {
  return (
    <SelectorWrapper>
        <select
            value={selectedFormality}
            onChange={e => onSelectFormality(e.target.value)}
        >
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="keigo">Keigo</option>
        </select>
    </SelectorWrapper>
  )
}

export default FormalitySelector