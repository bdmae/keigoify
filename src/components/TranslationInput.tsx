import React from "react";
import styled from "styled-components";
import { Panel, TextArea } from "../CommonStyles";

interface TranslationInputProps {
    userInput: string;
    onChange: (newUserInput: string) => void;
}

const TranslationInput: React.FC<TranslationInputProps> = ({userInput, onChange}) => {
    return (
        <Panel>
            <TextArea
                value={userInput}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter text to translate..." 
            />
        </Panel>
    ); 
}

export default TranslationInput;