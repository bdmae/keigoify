import React from "react";
import styled from "styled-components";
import { Panel } from "../CommonStyles";
import TypingIndicator from "./TypingIndicator";

interface TranslationOutputProps {
    translatedText: string;
    isLoading: boolean;
}

const TranslationOutput: React.FC<TranslationOutputProps> = ({ translatedText, isLoading }) => {
    return (
        <Panel>
            {isLoading ? <TypingIndicator/> : <p>{translatedText}</p>}
        </Panel>
    );
};

export default TranslationOutput;