import { Panel } from "../CommonStyles";
import TypingIndicator from "./TypingIndicator";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import CopyButton from "./CopyButton";

interface TranslationOutputProps {
    translatedText: string;
    isLoading: boolean;
}

const TranslationOutput: React.FC<TranslationOutputProps> = ({ translatedText, isLoading }) => {
    const { isCopied, copyToClipboard } = useCopyToClipboard();

    return (
        <Panel>
            <CopyButton textToCopy={translatedText} />
            {isLoading ? <TypingIndicator /> : translatedText ? <p>{translatedText}</p> : ''}
        </Panel>
    );
};

export default TranslationOutput;