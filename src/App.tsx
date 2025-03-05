import { useState } from 'react'
import './App.css'
import useTranslate from './hooks/useTranslate'
import styled from 'styled-components'

// keigoify app is an app that translates text into different politeness levels of Japanese depending on the user's input (button press) using openAI
// there are 3 modes, causal, polite, and honorific (keigo)
// the app has a text area where the user can type in text
// the user can type in the text and press the different buttons to change the politeness level (the buttons will display as salarymen images)
// the user can also change the politeness level by pressing a different button

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const TranslatorContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const TranslatorPane = styled.div`
  textarea {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
`;

const App: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedFormality, setSelectedFormality] = useState('keigo'); // selected politeness level

  const { translatedText, isLoading, translateText } = useTranslate();

  return (
    <MainWrapper>
      <div className="pane-header">
        <select
          value={selectedFormality}
          onChange={e => setSelectedFormality(e.target.value)}
        >
          <option value="casual">カジュアル</option>
          <option value="formal">丁寧語</option>
          <option value="keigo">敬語</option>
        </select>
      </div>
      <TranslatorContainer>
        <TranslatorPane>
          <textarea
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            placeholder="Type or paste text here..."
          />
        </TranslatorPane>

        <TranslatorPane>
          <div className="pane-header">
          </div>
          <textarea
            value={translatedText}
            readOnly
            placeholder="Translation appears here..."
          />
        </TranslatorPane>
      </TranslatorContainer>
      <div className="translator-divider">
        <button onClick={() => translateText(userInput, selectedFormality)} disabled={isLoading}>
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
      </div>
    </MainWrapper>
  )
}

export default App