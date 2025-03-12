import { useState } from 'react';

export default function useCopyToClipboard() {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        } catch (error) {
            console.error(`Error copying to clipboard: ${error}`);
            setIsCopied(false);
        }
    };

    return { isCopied, copyToClipboard };
};