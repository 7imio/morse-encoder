import { FC, useRef } from 'react';
import { playMorseSoundMessage } from '../Helpers/play-morse-sound-message';
import { Play, Square } from 'lucide-react';

interface PlayMorseMessageButtonProps {
  message: string;
  frequency: number; // frequency prop
  volume: number; // volume prop
  speed: number; // optional speed prop
  progress: number;
  isPlaying: boolean;
  setProgress: (progress: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
}

const PlayMorseMessageButton: FC<PlayMorseMessageButtonProps> = ({
  message,
  frequency,
  volume,
  speed,
  setProgress,
  isPlaying,
  setIsPlaying,
}) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlayMorseMessage = () => {
    audioContextRef.current?.close();
    audioContextRef.current = null;

    if (isPlaying) {
      setIsPlaying(false);
      setProgress(0);
      if (progressIntervalRef.current !== null) {
        clearInterval(progressIntervalRef.current);
      }
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
    setProgress(0);
    if (progressIntervalRef.current !== null) {
      clearInterval(progressIntervalRef.current);
    }

    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      const newProgress = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(newProgress);
      if (newProgress >= 100 && progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }, 50);

    setTimeout(() => {
      audioContextRef.current?.close();
      audioContextRef.current = null;
      setIsPlaying(false);
      setProgress(0);
      if (progressIntervalRef.current !== null) {
        clearInterval(progressIntervalRef.current);
      }
    }, totalDuration * 1000); // Convert to milliseconds
  };

  return (
    <div className="flex flex-row justify-center items-center w-1/2">
      <button
        className="bg-neutral-500 text-white rounded-lg p-4"
        onClick={handlePlayMorseMessage}
      >
        {isPlaying ? <Square size={40} /> : <Play size={40} />}
      </button>
    </div>
  );
};

export default PlayMorseMessageButton;
