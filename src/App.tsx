import { FC, useState } from 'react';
import './index.css';
import InputMessage from './Components/InputMessage';
import DisplayMessage from './Components/DisplayMessage';

const App: FC = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-100">
      <InputMessage onSend={setMessage} />
      {message && (
        <DisplayMessage message={message} onClear={() => setMessage('')} />
      )}
    </div>
  );
};

export default App;
