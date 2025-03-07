import './App.css'
import { MainContainer } from './CommonStyles';
import Translator from './components/Translator';

// keigoify app is an app that translates text into different politeness levels of Japanese depending on the user's input (button press) using openAI
// there are 3 modes, causal, polite, and honorific (keigo)
// the app has a text area where the user can type in text
// the user can type in the text and press the different buttons to change the politeness level (the buttons will display as salarymen images)
// the user can also change the politeness level by pressing a different button

const App: React.FC = () => {
  return (
    <MainContainer>
      <Translator />
    </MainContainer>
  )
}

export default App