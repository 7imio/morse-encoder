import { MutableRefObject } from 'react';

export const playMorseSoundMessage = (
  audioContextRef: MutableRefObject<AudioContext | null>,
  message: string,
  frequency: number,
  volume: number,
  speed: number
): number => {
  // Logic to play the Morse message
  const audioContext = new (window.AudioContext ||
    (window as any).webkitAudioContext)();

  audioContextRef.current = audioContext; // Store the audio context in the ref
  const unit = 0.1 / (speed / 50); // Duration of a dot in seconds

  let currentTime = audioContext.currentTime;

  message.split('').forEach((symbol) => {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, currentTime); // Frequency in Hz

    gainNode.gain.setValueAtTime(volume / 100, currentTime); // Volume between 0 and 1

    switch (symbol) {
      case '.':
        oscillator.start(currentTime);
        oscillator.stop(currentTime + unit);
        currentTime += unit;
        break;
      case '-':
        oscillator.start(currentTime);
        oscillator.stop(currentTime + unit * 3);
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
    currentTime += unit; // Space between symbols
  });
  const totalDuration = currentTime - audioContext.currentTime;
  return totalDuration; // Return the total duration of the sound
};
