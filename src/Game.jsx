import { useState } from "react";
import Board from "./board";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];
  // console.log({ history });
  // console.log({ currentSquares });

  const handlePlay = (nextSquare) => {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquare]);
  };

  const moves = history.map((squares, move) => {
    let description;
    // console.log({ squares });
    if (move > 0) {
      console.log(squares, move);
      description = `go to the move no ${move}`;
    } else if (move > 9) {
      console.log(squares, move);
      description = `game over`;
    } else {
      description = `start the game`;
    }
    return <li key={move}>{description}</li>;
  });

  return (
    <div className="flex my-20 m-auto ">
      <Board xIsNext={xIsNext} squares={currentSquares} handlePlay={handlePlay}></Board>
      <div className="bg-slate-100 px-4">
        <h1>History of Moves</h1>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
