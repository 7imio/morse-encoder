import { FC, useState } from 'react';
import './index.css';
import InputMessage from './Components/InputMessage';
import DisplayMessage from './Components/DisplayMessage';
import MorseControl from './Components/MorseControl';
import PlayMorseMessageButton from './Components/PlayMorseMessageButton';
import { translateToMorse } from './Helpers/translate-to-morse';
import PlayBlinkingMorseButton from './Components/PlayBlinkingMorseButton';

const App: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [morseMessage, setMorseMessage] = useState<string>('');

  const [volume, setVolume] = useState<number>(50); // between 0 and 100
  const [frequency, setFrequency] = useState<number>(440);
  const [speed, setSpeed] = useState<number>(50); // between 1 and 100

  const handleTranslate = (message: string) => {
    // Simulate translation logic
    const translation = translateToMorse(message);
    setMorseMessage(translation);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-8 text-gray-100">
      <h1 className="text-4xl font-bold mb-10 tracking-wider">
        Morse Messenger
      </h1>
      <MorseControl
        frequency={frequency}
        setFrequency={setFrequency}
        volume={volume}
        setVolume={setVolume}
        speed={speed}
        setSpeed={setSpeed}
      />
      <InputMessage
        onSend={(message) => {
          setMessage(message);
          handleTranslate(message);
        }}
      />
      {message && (
        <>
          <DisplayMessage
            message={message}
            onClear={() => setMessage('')}
            morseMessage={morseMessage}
            setMorseMessage={setMorseMessage}
          />
          <PlayMorseMessageButton
            message={morseMessage}
            frequency={frequency}
            volume={volume}
            speed={speed}
          />
          <PlayBlinkingMorseButton message={morseMessage} />
        </>
      )}
    </div>
  );
};

export default App;
