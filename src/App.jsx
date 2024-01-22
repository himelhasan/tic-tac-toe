import Square from "./Square";

const Board = () => {
  return (
    <div className="my-20 m-auto w-[260px] grid grid-cols-3 gap-1">
      <Square />
      <Square />
      <Square value="3" />
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
    </div>
  );
};

export default Board;
