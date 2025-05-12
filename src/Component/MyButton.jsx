import "./MyButton.css";
export default function MyButton({ value, handleValue }) {
  return (
    <button
      className="btn btn-xl text-9xl rounded-none w-50 h-50"
      onClick={handleValue}
    >
      {value}{" "}
    </button>
  );
}
