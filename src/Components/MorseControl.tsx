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
    <>
      <div>
        <label>
          Frequency:
          <input
            type="number"
            min="20"
            max="20000"
            className="text-center w-12"
            value={frequency}
            onChange={(e) => {
              setFrequency(Number(e.target.value));
              console.log('Frequency changed to:', e.target.value);
            }}
          />
          Hz
          <input
            type="range"
            min="20"
            max="20000"
            value={frequency}
            onChange={(e) => {
              setFrequency(Number(e.target.value));
              console.log('Frequency changed to:', e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <label>
          Volume:{' '}
          <input
            type="number"
            min="0"
            max="100"
            className="text-center w-12"
            value={volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              console.log('Volume changed to:', e.target.value);
            }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              console.log('Volume changed to:', e.target.value);
            }}
          />
        </label>
        <div>
          <label>
            Speed:{' '}
            <input
              type="number"
              min="1"
              max="100"
              className="text-center w-12"
              value={speed}
              onChange={(e) => {
                setSpeed(Number(e.target.value));
                console.log('Speed changed to:', e.target.value);
              }}
            />
            <input
              type="range"
              min="1"
              max="100"
              value={speed}
              onChange={(e) => {
                setSpeed(Number(e.target.value));
                console.log('Speed changed to:', e.target.value);
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default MorseControl;
