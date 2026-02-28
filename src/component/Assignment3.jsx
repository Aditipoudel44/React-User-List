import { useState } from "react";

export default function Assignment3() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
