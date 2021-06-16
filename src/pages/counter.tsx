import React, { useState } from 'react';

const CounterPage = () => {
  const [val, setVal] = useState<number>(0);
  function increment() {
    setVal(oldVal => oldVal + 1);
  }
  function decrement() {
    setVal(oldVal => oldVal - 1);
  }
  return (
    <div>
      <h1 className="mb-4 text-2xl text-center">Counter Page</h1>
      <p>Current counter: {val}</p>
      <div className="pt-4">
        <button type="button" className="p-2 mr-2 text-white bg-blue-500 rounded" onClick={increment}>Increment</button>
        <button type="button" className="p-2 ml-2 text-white bg-blue-500 rounded" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterPage;
