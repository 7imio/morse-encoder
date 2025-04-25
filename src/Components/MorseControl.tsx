import { FC } from 'react';

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
  return (
    <div className="z-10 flex flex-col items-center nowrap p-4 m-2 bg-gray-700 shadow-md rounded-lg">
      <div className="flex flex-row justify-between items-center justify-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-between w-full">
              <p>Frequency:</p>
              <input
                type="number"
                min="20"
                max="20000"
                className="text-center w-12"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
              />
              <p>Hz</p>
            </div>
            <input
              type="range"
              min="20"
              max="20000"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
            />
          </div>
        </label>
      </div>
      <div className="flex flex-row justify-between items-center justify-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-between w-full">
              <p>Volume:</p>
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
      <div className="flex flex-row justify-between items-center justify-center m-2 w-full">
        <label className="w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row justify-between w-full">
              <p>Speed:</p>
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
