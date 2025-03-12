import { useCallback } from 'react';

export function usePrompt() {
  // Wrap in useCallback if you want to avoid re-creating the function on every render
  const buildPrompt = useCallback((input: string, formality: string): string => {
    return `
You are a professional translator specializing in Japanese language politeness levels. Your task is to translate a given text into Japanese using one of three politeness levels: casual, formal (丁寧語), or keigo (honorific language / 敬語). Please follow these instructions:

1. Translate the provided text exactly.
2. Use the specified politeness level.
3. Output only the translated text. Do not include any extra explanations, commentary, or romanization.
4. Ensure that your translation is natural and colloquial for the given politeness level.

Text to translate: "${input}"
Politeness level: ${formality}

`;
  }, []);

  return { buildPrompt };
}
