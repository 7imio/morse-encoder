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

  return (
    <div className="input-message z-10 flex items-center justify-between p-4 m-2 bg-gray-700 shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full max-w-md p-4 mb-6 rounded-md bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        value={message}
        onChange={(e) => {
          const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9 ]/g, '');
          setMessage(sanitizedValue);
        }}
      />
      <button
        className="bg-gray-500 text-white rounded-lg p-2 ml-2"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
};

export default InputMessage;
