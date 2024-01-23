import Square from "./Square";

// eslint-disable-next-line react/prop-types
const Board = ({ xIsNext, squares, handlePlay }) => {
  const handleClick = (x) => {
    const nextSquare = squares.slice();

    if (squares[x]) {
      return;
    }

    if (xIsNext) {
      nextSquare[x] = "x";
    } else {
      nextSquare[x] = "o";
    }
    handlePlay(nextSquare);
  };

  return (
    <div className="grid grid-cols-3 gap-1">
      {squares?.map((square, index) => (
        // eslint-disable-next-line react/jsx-key
        <Square key={index} value={square} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

export default Board;
