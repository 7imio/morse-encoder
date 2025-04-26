import { FC } from 'react';
import {
  AudioWaveform,
  Rabbit,
  Snail,
  Squirrel,
  Turtle,
  Volume1Icon,
  Volume2Icon,
  VolumeIcon,
  VolumeOffIcon,
} from 'lucide-react';
interface MorseControlProps {
  frequency: number;
  setFrequency: (frequency: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
  speed: number; // speed prop
  setSpeed: (speed: number) => void; // setSpeed prop
}
const MorseControl: FC<MorseControlProps> = ({
  frequency,
  volume,
  speed,
  setFrequency,
  setVolume,
  setSpeed,
}) => {
  const handleDisplayVolumeIcon = () => {
    if (volume <= 0) {
      return <VolumeOffIcon />;
    } else if (volume > 0 && volume <= 33) {
      return <VolumeIcon />;
    } else if (volume > 33 && volume <= 66) {
      return <Volume1Icon />;
    } else if (volume > 66 && volume <= 100) {
      return <Volume2Icon />;
    } else {
      return <VolumeIcon />;
    }
  };

  const handleDisplaySpeedIcon = () => {
    if (speed <= 25) {
      return <Snail />;
    } else if (speed > 25 && speed <= 50) {
      return <Turtle />;
    } else if (speed > 50 && speed <= 75) {
      return <Squirrel />;
    } else if (speed > 75) {
      return <Rabbit />;
    } else {
      return <Squirrel />;
    }
  };

  return (
    <div className="z-10 flex flex-col items-center nowrap py-2 px-4 my-1 bg-neutral-700 shadow-md rounded-lg w-full">
      <div className="flex flex-row justify-between items-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-center w-1/4">
              <AudioWaveform />
              <input
                type="number"
                min="20"
                max="20000"
                className="text-center w-12"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
              />
            </div>
            <input
              type="range"
              min="20"
              max="20000"
              value={frequency}
              className="focus:ring-amber-500 focus:border-transparent transition"
              onChange={(e) => setFrequency(Number(e.target.value))}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-row justify-between items-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-center w-1/4">
              {handleDisplayVolumeIcon()}
              <input
                type="number"
                min="0"
                max="100"
                className="text-center w-12"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-row justify-between items-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-center w-1/4">
              {handleDisplaySpeedIcon()}
              <input
                type="number"
                min="1"
                max="100"
                className="text-center w-12"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
              />
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default MorseControl;
