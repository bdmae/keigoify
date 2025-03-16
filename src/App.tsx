import { useEffect } from 'react';
import './App.css'
import { MainContainer } from './CommonStyles';
import Navbar from './components/molecules/Navbar';
import Translator from './components/molecules/Translator';
import InstructionModal from './components/molecules/InstructionModal';

const App: React.FC = () => {
  return (
    <>
      <InstructionModal />
      <Navbar />
      <MainContainer>
        <Translator />
      </MainContainer>
    </>
  )
}

export default App