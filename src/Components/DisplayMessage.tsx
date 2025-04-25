import { FC, useState } from 'react';
import { translateToMorse } from '../Helpers/translate-to-morse';
import PlayMorseMessageButton from './PlayMorseMessageButton';

interface DisplayMessageProps {
  message: string;
  onClear: () => void;
  morseMessage: string;
  setMorseMessage: (message: string) => void;
}
const DisplayMessage: FC<DisplayMessageProps> = ({
  message,
  onClear,
  morseMessage,
}) => {
  return (
    <div className="w-full max-w-md bg-gray-800 p-6 rounded-md border border-gray-700">
      <div className="bg-gray-700 p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Message</h1>
        <div className="flex flex-col items-center justify-between mb-4">
          <p className="text-gray-300">{message}</p>
          {morseMessage && (
            <p className="text-gray-300 italic">{morseMessage}</p>
          )}
        </div>

        <button
          className="mt-4 bg-amber-800 text-white rounded-lg p-2 ml-4"
          onClick={onClear}
        >
          Clear message
        </button>
      </div>
    </div>
  );
};

export default DisplayMessage;
