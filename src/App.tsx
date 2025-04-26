import { FC, useState } from 'react';
import './index.css';
import InputMessage from './Components/InputMessage';
import DisplayMessage from './Components/DisplayMessage';
import MorseControl from './Components/MorseControl';
import PlayMorseMessageButton from './Components/PlayMorseMessageButton';
import { translateToMorse } from './Helpers/translate-to-morse';
import PlayBlinkingMorse from './Components/PlayBlinkingMorse';
import ProgressBar from './Components/ProgressBar';
import { Info } from 'lucide-react';
import InfoModal from './Components/InfoModal';

const App: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [morseMessage, setMorseMessage] = useState<string>('');

  const [isPlaying, setIsPlaying] = useState(false);

  const [volume, setVolume] = useState<number>(50); // between 0 and 100
  const [frequency, setFrequency] = useState<number>(440);
  const [speed, setSpeed] = useState<number>(50); // between 1 and 100

  const [progressBar, setProgressBar] = useState<number>(0);

  const handleTranslate = (message: string) => {
    // Simulate translation logic
    const translation = translateToMorse(message);
    setMorseMessage(translation);
  };

  const [isDisplayingInfo, setIsDisplayingInfo] = useState(false);

  const handleInfoClick = () => {
    setIsDisplayingInfo(!isDisplayingInfo);
  };

  return (
    <div className="app h-screen w-full bg-neutral-900 flex flex-col items-center justify-center p-8 text-gray-100">
      <div className="h-screen flex flex-col items-center justify-center p-8 w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
        <h1 className="text-4xl z-10 font-bold mb-10 tracking-wider text-center">
          Morse Messenger
        </h1>
        <InfoModal isOpen={isDisplayingInfo} onClose={handleInfoClick} />
        <MorseControl
          frequency={frequency}
          setFrequency={setFrequency}
          volume={volume}
          setVolume={setVolume}
          speed={speed}
          setSpeed={setSpeed}
        />

        <div className="w-full flex justify-center items-center h-10">
          {progressBar > 0 && <ProgressBar progress={progressBar} />}
        </div>
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
            <div className="w-full flex justify-center items-center my-4">
              <PlayBlinkingMorse
                message={morseMessage}
                isPlaying={isPlaying}
                speed={speed}
              />

              <PlayMorseMessageButton
                message={morseMessage}
                frequency={frequency}
                volume={volume}
                speed={speed}
                progress={progressBar}
                setProgress={setProgressBar}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
              />
            </div>
          </>
        )}
      </div>
      <div className="w-full flex justify-end items-center h-10">
        <button onClick={handleInfoClick}>
          <Info size={32} />
        </button>
      </div>
    </div>
  );
};

export default App;
