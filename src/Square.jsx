const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="bg-white border border-slate-100 shadow-lg h-20 w-20  leading-9 text-2xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};

export default Square;
