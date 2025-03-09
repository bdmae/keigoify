// src/CommonStyles.ts
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 80vw;
  margin: 0 auto; /* Centers the container */
  box-sizing: border-box;
`;

export const TranslatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
  }
`;

export const Panel = styled.div`
  flex: 1 1 auto;
  width: 100%;
  min-height: 16rem;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    color: #000;
    font-size: 1rem;
    text-align: left;
    font-family: inherit;
    margin: unset;
  }
`;

export const PanelHeader = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: #666;
  text-align: center;
`;

export const TextArea = styled.textarea`
  flex: 1;
  border: none;
  resize: none;
  outline: none;
  background: transparent;
  /* Optional: add padding and line-height for better readability */
  padding: 0.5rem;
  line-height: 1.5;
  color: #000;
  font-family: inherit;
  font-size: 1rem;
`;
