import { FC } from 'react';

interface PlayBlinkingMorseButtonProps {
  message: string;
}

const PlayBlinkingMorseButton: FC<PlayBlinkingMorseButtonProps> = ({
  message,
}) => {
  const handleClick = () => {
    console.log('Play blinking morse code');
    alert(message);
    // Add your logic to play the blinking morse code here
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 mx-2 bg-gray-500 text-white rounded-lg p-2"
    >
      Play Blinking Morse Code
    </button>
  );
};

export default PlayBlinkingMorseButton;
