import { FC, useEffect, useState } from 'react';

interface PlayBlinkingMorseProps {
  message: string;
  speed: number;
  isPlaying: boolean;
}

const PlayBlinkingMorse: FC<PlayBlinkingMorseProps> = ({
  message,
  speed,
  isPlaying,
}) => {
  const [isLit, setIsLit] = useState(false);
  // Clamp speed between 1 and 100

  useEffect(() => {
    if (!isPlaying || !message) {
      setIsLit(false);
      return;
    }

    const unit = (0.1 / (speed / 50)) * 1000;
    let currentTime = 0;
    const timeouts: NodeJS.Timeout[] = [];

    const blink = (delay: number, duration: number) => {
      timeouts.push(
        setTimeout(() => {
          setIsLit(true);
        }, delay)
      );
      timeouts.push(
        setTimeout(() => {
          setIsLit(false);
        }, delay + duration)
      );
    };

    for (const symbol of message) {
      switch (symbol) {
        case '.':
          blink(currentTime, unit);
          currentTime += unit;
          break;
        case '-':
          blink(currentTime, unit * 3);
          currentTime += unit * 3;
          break;
        case ' ':
          currentTime += unit * 3;
          break;
        case '/':
          currentTime += unit * 7;
          break;
        default:
          break;
      }
      currentTime += unit;
    }

    return () => {
      timeouts.forEach(clearTimeout);
      setIsLit(false);
    };
  }, [message, speed, isPlaying]);

  return (
    <div className="relative flex items-center justify-evenly content-evenly h-32 w-1/2">
      <div
        className={`w-32 h-32 mt-4 rounded-full flex items-center justify-center transition-all duration-100 ${
          isLit
            ? 'bg-yellow-400 shadow-[0_0_50px_20px_rgba(250,204,21,0.5)] scale-110 animate-pulse'
            : 'bg-neutral-800 shadow-none scale-100'
        }`}
      />
    </div>
  );
};

export default PlayBlinkingMorse;
