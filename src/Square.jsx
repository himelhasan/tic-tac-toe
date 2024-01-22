import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };

  return (
    <button
      className="bg-white border border-slate-100 shadow-lg h-20 w-20 m- leading-9 text-lg"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Square;
