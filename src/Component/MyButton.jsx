import "./MyButton.css";
export default function MyButton({ value, handleValue }) {
  return (
    <button
      className="btn text-6xl h-20 sm:h-30 md:h-40   max-w-50  sm:text-7xl md:text-8xl lg:text-9xl rounded-none"
      onClick={handleValue}
    >
      {value}{" "}
    </button>
  );
}
