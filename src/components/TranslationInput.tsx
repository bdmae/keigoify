import { Panel, TextArea } from "../CommonStyles";

interface TranslationInputProps {
    userInput: string;
    onChange: (newValue: string) => void;
}

const TranslationInput: React.FC<TranslationInputProps> = ({ userInput, onChange }) => {
    return (
        <>
          <Panel>
              <TextArea
                  value={userInput}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="Enter text to translate..." 
              />
          </Panel>
       </>
    ); 
}

export default TranslationInput;