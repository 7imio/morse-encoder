interface ProgressBarProps {
  progress: number; // Progress value between 0 and 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-50 absolute z-10 top-[8rem] bg-gray-700 opacity-70 rounded-full h-4 shadow-md">
      <div
        className="bg-blue-500 h-full rounded-4xl transition-all duration-300"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};
export default ProgressBar;
