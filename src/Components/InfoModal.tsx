import { X, Github, Heart } from 'lucide-react';
import { FC, MouseEvent, useState } from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InfoModal: FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  if (!isOpen && !isClosing) return null;

  const handleClose = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-neutral-900 bg-opacity-90 z-50 p-4 transition-all duration-300 
          ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
    >
      <div
        className={`bg-neutral-700 p-8 rounded-lg shadow-2xl w-full max-w-md relative 
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition transform hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2">Morse Messenger</h2>
          <p className="text-xs text-gray-400 mb-6">Translate. Play. Enjoy.</p>

          <div className="flex items-center mb-4">
            <p className="text-justify">
              Send and receive messages in Morse code with fully customizable
              sound frequency, volume, and speed settings.
            </p>
          </div>

          <div className="flex items-center text-justify text-gray-400 text-sm mt-4">
            <Github className="w-5 h-5 mr-2" />
            <p>
              Open-source project available on
              <a
                href="https://github.com/7imio/morse-encoder"
                className="ml-1 text-gray-300 hover:text-white underline"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex items-center mb-4 text-xs text-justify">
            <p className="flex flex-row items-center">
              Made with <Heart size={12} className="mx-1 text-neutral-200" />{' '}
              and a lot of ☕ by
              <a
                href="https://www.twitch.tv/seteemio"
                className="ml-1 text-amber-500 hover:text-amber-300"
              >
                Seteemio 🐙
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
