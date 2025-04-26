import { SendIcon } from 'lucide-react';
import { FC, useState } from 'react';

interface InputMessageProps {
  onSend: (message: string) => void;
}

const InputMessage: FC<InputMessageProps> = ({ onSend }) => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    onSend(message);
    setMessage('');
  };

  const sanitizedValue = (value: string) => {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  };

  const [alertLength, setAlertLength] = useState(false);

  return (
    <div className="input-message-container flex flex-row justify-center items-center w-full bg-neutral-700 p-2 my-1 rounded-lg shadow-md">
      <div className="w-full flex justify-center align-center bg-neutral-700 shadow-md rounded-lg">
        <input
          type="text"
          placeholder="Type a message..."
          className={`w-full p-4 rounded-md bg-neutral-800 border border-neutral-700 ${!alertLength ? 'text-neutral-100' : 'text-red-600'} placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition`}
          value={message}
          onChange={(e) => {
            if (e.target.value.length > 100) {
              setAlertLength(true);
              return;
            } else {
              setAlertLength(false);
              setMessage(sanitizedValue(e.target.value));
            }
          }}
        />
      </div>
      <button
        className="bg-neutral-500 text-neutral-100 p-4 ml-2 rounded-lg"
        onClick={handleClick}
      >
        <SendIcon size={24} />
      </button>
    </div>
  );
};

export default InputMessage;
