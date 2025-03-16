# keigoify

**keigoify** is a modern web application that translates any language into Japanese at various levels of politeness. With a clean, responsive design and intuitive salaryman icons representing different politeness levels (casual, formal, and keigo), keigoify makes it easy to generate translations that fit the appropriate tone.

## Features

- **Real-Time Translation:** Automatically translate any language as you type to Japanese.
- **Politeness Levels:**  (demonstrated by cute clickable salaryman icons)
  - **Casual:** Everyday language for informal conversations.  
  - **Formal:** Polite conversation for most situations.  
  - **Keigo:** Honorific language for respectful communication.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Instruction Modal:** A one-time popup with usage instructions appears on first visit.
- **Copy to Clipboard & Delete:** Easily copy translations or clear the input with dedicated buttons.

## Tech Stack

- **React** (functional components with hooks)
- **Vite** for a fast development and build environment
- **Styled-Components** for CSS-in-JS styling
- **TypeScript** for type safety and improved code quality
- **React Icons** for vector icons
- **Custom Hooks:**  
  - `useTranslate` for translation API logic  
  - `useDebounce` for debouncing user input  
  - `useCopyToClipboard` for copying text to clipboard  
- **Local Storage:** For persisting state (e.g., first-time instruction modal)
- **Netlify:** For continuous deployment

## Installation

1. **Clone the repository:**

   ```
   bash
   git clone https://github.com/your-username/keigoify.git
   cd keigoify
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Configure environment variables**

   Create a .env file in the root directory and add your environment variables. For example:

   ```
   VITE_OPENAI_API_KEY=your-openai-api-key-here
   ```

   > **Note:**
   > Make sure the `.env` file is listed in your `.gitignore` to avoid committing sensitive information.

4. **Run the development server**

   ```
   npm run dev
   ```

## Design Principles & Best Practices

- **Single Responsibility:**  
  Each component and hook (e.g., `useTranslate`, `usePrompt`) is responsible for a single task, making the code easier to maintain.

- **DRY & Reusability:**  
  The project uses reusable, modular components and centralized styling (via styled-components) to minimize repetition.

- **Optimized State & Performance:**  
  State is lifted to parent components, and hooks like `useCallback` and `useDebounce` help ensure efficient rendering and API calls.

- **Responsive & Accessible:**  
  Semantic HTML and responsive styling (using media queries) deliver a great user experience across devices.


### Happy Keiogifying your Japanese!!
