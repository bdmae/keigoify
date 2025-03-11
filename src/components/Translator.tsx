import { useState, useEffect } from 'react';
import TranslationInput from './TranslationInput';
import TranslationOutput from './TranslationOutput';
import { PanelHeader, TranslatorContainer } from '../CommonStyles';
import useTranslate from '../hooks/useTranslate';
import PolitenessSelectors from './PolitenessSelectors';
import { Politeness } from './PolitenessSelectors';
import useDebounce from '../hooks/useDebounce';

// todo: create interfaces file

const Translator: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [selectedPoliteness, setSelectedPoliteness] = useState<Politeness>('casual');
  const debouncedValue = useDebounce(userInput);

  const { translatedText, isLoading, translateText } = useTranslate();

  // debounce translation: when userInput or selectedPoliteness changes, wait 500ms before translating
  useEffect(() => {
    translateText(debouncedValue, selectedPoliteness);
  }, [debouncedValue, selectedPoliteness]);

  return (
    <>
        <PanelHeader>{selectedPoliteness}</PanelHeader>
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
