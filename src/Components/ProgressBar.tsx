interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full z-10 bg-neutral-800 opacity-70 rounded-full ring-2 ring-neutral-700 h-8 shadow-md">
      <div
        className="bg-amber-500 h-full rounded-4xl transition-all duration-75"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
