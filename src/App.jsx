import { useState } from "react";
import "./App.css";
import MyButton from "./Component/MyButton";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  function handleValue(i) {
    if (squares[i] || calcWinner(squares)) {
      return;
    }
    const nextValue = squares.slice();
    nextValue[i] = player;
    // console.log(squares);
    // console.log(nextValue);
    setSquares(nextValue);
    setPlayer(player == "X" ? "O" : "X");
  }

  function calcWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
        return squares[a];
      }
    }
    return;
  }
  const winner = calcWinner(squares);
  let status;

  if (winner) {
    status = "Winner: " + winner;
  } else if (!squares.includes(null)) {
    status = "No Winner";
  } else {
    status = "Next player: " + (player == "O" ? "X" : "O");
  }
  let resetBtnVal = "Reset";
  if (!squares.includes(null) || calcWinner(squares)) {
    resetBtnVal = "Play Again";
  } else {
    resetBtnVal = "Reset";
  }
  function resetBtnFunc() {
    setSquares(Array(9).fill(null));
  }
  return (
    <>
      <div className="container  m-auto  flex flex-col content-center justify-center">
        <h1 className=" lg:text-9xl mt-20 md:text-8xl sm:text-7xl text-4xl mb-20 text-center">{status}</h1>
        {/* Board */}
        <div className="text-center container px-10 sm:px-0" >
          <div className="grid grid-cols-3 gap-0 w-full max-w-lg mx-auto">
            <MyButton
              value={squares[0]}
              handleValue={() => {
                handleValue(0);
              }}
            />
            <MyButton
              value={squares[1]}
              handleValue={() => {
                handleValue(1);
              }}
            />
            <MyButton
              value={squares[2]}
              handleValue={() => {
                handleValue(2);
              }}
            />
          </div >
          <div className="grid grid-cols-3 gap-0 w-full max-w-lg mx-auto">
            <MyButton
              value={squares[3]}
              handleValue={() => {
                handleValue(3);
              }}
            />
            <MyButton
              value={squares[4]}
              handleValue={() => {
                handleValue(4);
              }}
            />
            <MyButton
              value={squares[5]}
              handleValue={() => {
                handleValue(5);
              }}
            />
          </div>
          <div className="grid grid-cols-3 gap-0 w-full max-w-lg mx-auto">
            <MyButton
              value={squares[6]}
              handleValue={() => {
                handleValue(6);
              }}
            />
            <MyButton
              value={squares[7]}
              handleValue={() => {
                handleValue(7);
              }}
            />
            <MyButton
              value={squares[8]}
              handleValue={() => {
                handleValue(8);
              }}
            />
          </div>
        </div>
        {/* Reset & Play Again */}
        <div className=" text-center">
          <button className="btn btn-xl m-10 " onClick={resetBtnFunc}>
            {resetBtnVal}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
