import { useState, useCallback } from 'react';
import { OpenAI } from 'openai';
import { usePrompt } from './usePrompt';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function useTranslate() {
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { buildPrompt } = usePrompt();

  const translateText = useCallback(
    async (userInput: string, selectedFormality: string): Promise<void> => {
      if (!userInput.trim()) {
        setTranslatedText('');
        return;
      }

      setIsLoading(true);
      setTranslatedText('');

      try {
        const prompt = buildPrompt(userInput, selectedFormality);

        const response = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });

        const content = response.choices[0]?.message?.content?.trim();
        setTranslatedText(content || 'Error: No response');
      } catch (error) {
        console.error('Error calling OpenAI:', error);
        setTranslatedText("Couldn't translate text. Try again later!");
      } finally {
        setIsLoading(false);
      }
    },
    [buildPrompt]
  );

  return { translatedText, isLoading, translateText };
}

