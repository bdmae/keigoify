// src/CommonStyles.ts
import styled from 'styled-components';

export const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto; /* Centers the container */
  padding: 1rem;
  box-sizing: border-box;
`;

export const TranslatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
`;

export const Panel = styled.div`
  flex: 1;
  width: 40rem;
  height: 10rem;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
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
  font-size: 1rem;
  outline: none;
  background: transparent;
  /* Optional: add padding and line-height for better readability */
  padding: 0.5rem;
  line-height: 1.5;
`;
