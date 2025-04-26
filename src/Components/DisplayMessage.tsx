import { X } from 'lucide-react';
import { FC } from 'react';

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
    <div className="w-full bg-neutral-700 p-2 my-1 rounded-lg shadow-md flex flex-col items-end justify-center">
      <h2 className="text-xl font-bold mb-4 w-full text-center">Message</h2>
      <div className="flex flex-col items-center justify-between w-full">
        <p className="text-gray-300">{message}</p>
        {morseMessage && <p className="text-gray-300 italic">{morseMessage}</p>}
      </div>
      <button
        className="mt-4 bg-amber-800 text-white rounded-lg p-2 ml-4"
        onClick={onClear}
      >
        <X />
      </button>
    </div>
  );
};

export default DisplayMessage;
