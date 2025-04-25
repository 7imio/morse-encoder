import { MORSE_CODE } from './morse-code';

export const translateToMorse = (message: string): string => {
  return message
    .toUpperCase()
    .split('')
    .map((char) => MORSE_CODE[char] || '')
    .join(' ');
};
