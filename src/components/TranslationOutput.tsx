import { Panel } from "../CommonStyles";
import TypingIndicator from "./atoms/TypingIndicator";
import CopyButton from "./atoms/CopyButton";

interface TranslationOutputProps {
    translatedText: string;
    isLoading: boolean;
}

const TranslationOutput: React.FC<TranslationOutputProps> = ({ translatedText, isLoading }) => {
    return (
        <Panel>
            {translatedText && (<CopyButton textToCopy={translatedText} />)}
            {isLoading ? <TypingIndicator /> : translatedText ? <p>{translatedText}</p> : ''}
        </Panel>
    );
};

export default TranslationOutput;