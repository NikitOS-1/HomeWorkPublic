import { useState } from "react";

export const Smile = ({ src }) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <img src="#" alt="smile" onClick={() => setCount((prev) => prev + 1)} />
      <div>{count}</div>
    </div>
  );
};
