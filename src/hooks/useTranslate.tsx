import { useState } from 'react';
import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function useTranslate() {
    const [translatedText, setTranslatedText] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const translateText = async (userInput: string, selectedFormality: string) => {
        if (!userInput.trim()) return; // don't translate empty text

        setIsLoading(true);
        setTranslatedText(''); // clear previous translation
        
        try {
            // temporary prompt for testing
            const prompt = `Translate the following text into Japanese ${selectedFormality}: "${userInput}";`;
      
            const response = await openai.chat.completions.create({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: prompt }]
            })

            setTranslatedText(response.choices[0]?.message?.content?.trim() || "Error: No response")
        } catch (error) {
            console.log(`Error: ${error}`);
            setTranslatedText("Couldn't translate text. Try again later!");
        } finally {
            setIsLoading(false);
        }
    }
    
    return { translatedText, isLoading, translateText };
}
