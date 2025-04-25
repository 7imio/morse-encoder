import { FC, useRef, useState } from 'react';
import { playMorseSoundMessage } from '../Helpers/play-morse-sound-message';

interface PlayMorseMessageButtonProps {
  message: string;
  frequency: number; // frequency prop
  volume: number; // volume prop
  speed: number; // optional speed prop
}

const PlayMorseMessageButton: FC<PlayMorseMessageButtonProps> = ({
  message,
  frequency,
  volume,
  speed,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handlePlayMorseMessage = () => {
    if (isPlaying) {
      audioContextRef.current?.close();
      audioContextRef.current = null;
      setIsPlaying(false);
      return;
    }

    const totalDuration = playMorseSoundMessage(
      audioContextRef,
      message,
      frequency,
      volume,
      speed
    );

    setIsPlaying(true);
    setTimeout(() => {
      audioContextRef.current?.close();
      audioContextRef.current = null;
      setIsPlaying(false);
    }, totalDuration * 1000); // Convert to milliseconds
  };

  return (
    <button
      className="mt-4 mx-2 bg-gray-500 text-white rounded-lg p-2"
      onClick={handlePlayMorseMessage}
    >
      {isPlaying ? 'Stop' : 'Play'} Morse Message
    </button>
  );
};

export default PlayMorseMessageButton;
