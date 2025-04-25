import { FC, useState } from 'react';
import { translateToMorse } from '../Helpers/translate-to-morse';

interface DisplayMessageProps {
  message: string;
  onClear: () => void;
}
const DisplayMessage: FC<DisplayMessageProps> = ({ message, onClear }) => {
  const [translation, setTranslation] = useState<string>('');

  const handleTranslate = () => {
    // Simulate translation logic
    const morseMessage = translateToMorse(message);
    setTranslation(morseMessage);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4">Message</h1>
        <div className="flex flex-col items-center justify-between mb-4">
          <p className="text-gray-700">{message}</p>
          {translation && <p className="text-gray-500 italic">{translation}</p>}
        </div>
        <button
          className="mt-4 bg-blue-500 text-white rounded-lg p-2"
          onClick={handleTranslate}
        >
          Translate message
        </button>
        <button
          className="mt-4 bg-red-500 text-white rounded-lg p-2 ml-4"
          onClick={onClear}
        >
          Clear message
        </button>
      </div>
    </div>
  );
};

export default DisplayMessage;
