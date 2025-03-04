import { useState } from 'react'
import './App.css'
import useTranslate from './hooks/useTranslate'

// keigoify app is an app that translates text into different politeness levels of Japanese depending on the user's input (button press) using openAI
// there are 3 modes, causal, polite, and honorific (keigo)
// the app has a text area where the user can type in text
// the user can type in the text and press the different buttons to change the politeness level (the buttons will display as salarymen images)
// the user can also change the politeness level by pressing a different button

const App: React.FC = () => {
  const [userInput, setUserInput] = useState(''); // user input
  const [selectedFormality, setSelectedFormality] = useState('keigo'); // selected politeness level

  const { translatedText, isLoading, translateText } = useTranslate();

  return (
    <div className="translator-container">
      <div className="translator-pane">
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
        <textarea
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Type or paste text here..."
        />
      </div>

      <div className="translator-divider">
        <button onClick={() => translateText(userInput, selectedFormality)} disabled={isLoading}>
          {isLoading ? 'Translating...' : 'Translate'}
        </button>
      </div>

      <div className="translator-pane">
        <div className="pane-header">
        </div>
        <textarea
          value={translatedText}
          readOnly
          placeholder="Translation appears here..."
        />
      </div>
    </div>
  )
}

export default App