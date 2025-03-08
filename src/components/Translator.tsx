import { useState, useEffect } from 'react';
import TranslationInput from './TranslationInput';
import TranslationOutput from './TranslationOutput';
import { Panel, PanelHeader, TranslatorContainer } from '../CommonStyles';
import useTranslate from '../hooks/useTranslate';
import PolitenessSelectors from './PolitenessSelectors';
import { Politeness } from './PolitenessSelectors';

// todo: create interfaces file

const Translator: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedPoliteness, setSelectedPoliteness] = useState<Politeness>('casual');

  const { translatedText, isLoading, translateText } = useTranslate();

  // debounce translation: when userInput or selectedPoliteness changes, wait 500ms before translating
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userInput.trim()) {
        translateText(userInput, selectedPoliteness);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [userInput, selectedPoliteness]);

  return (
    <>
        {/* add header that shows which politeness is selected  */}
        <PanelHeader>Selected politeness: {selectedPoliteness}</PanelHeader>
        <PolitenessSelectors
          selectedFormality={selectedPoliteness}
          onFormalityChange={setSelectedPoliteness}
        />
        <TranslatorContainer>
            {/* Input area */}
            <TranslationInput userInput={userInput} onChange={setUserInput} />
            {/* Output area */}
            <TranslationOutput translatedText={translatedText} isLoading={isLoading} />
        </TranslatorContainer>
    </>
  );
};

export default Translator;
