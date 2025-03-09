import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay = 500): T {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
