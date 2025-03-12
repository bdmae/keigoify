import { Panel, TextArea } from "../../CommonStyles";
import ClearTextButton from "../atoms/ClearTextButton";

interface TranslationInputProps {
    userInput: string;
    onChange: (newValue: string) => void;
}

const TranslationInput: React.FC<TranslationInputProps> = ({ userInput, onChange }) => {

    const handleClearText = () => {
        onChange('');
    };

    return (
        <>
          <Panel>
              {userInput && (<ClearTextButton onClick={handleClearText} />)}
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