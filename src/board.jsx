import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (x) => {
    const nextSquare = squares.slice();

    if (squares[x]) {
      return;
    }

    if (xIsNext) {
      nextSquare[x] = "x";
      setSquares(nextSquare);
      setXIsNext(false);
    } else {
      nextSquare[x] = "o";
      setSquares(nextSquare);
      setXIsNext(true);
    }
  };

  return (
    <div className="my-20 m-auto w-[260px] grid grid-cols-3 gap-1">
      {squares?.map((square, index) => (
        // eslint-disable-next-line react/jsx-key

        <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
