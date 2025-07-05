import { useEffect, useState } from 'react';

export function useTypewriter(words: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isLastChar = charIndex === currentWord.length;
    const isFirstChar = charIndex === 0;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (isFirstChar) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (isLastChar) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? speed / 2 : isLastChar ? pause : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return text;
}
