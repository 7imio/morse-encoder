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
    <div className="input-message flex items-center justify-between p-4 m-2 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Type a message..."
        className="border border-gray-300 rounded-lg p-2 w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white rounded-lg p-2 ml-2"
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  );
};

export default InputMessage;
