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
      <h1 className="text-center text-2xl mb-4">Counter Page</h1>
      <p>Current counter: {val}</p>
      <div className="pt-4">
        <button type="button" className="bg-blue-500 text-white p-2 rounded mr-2" onClick={increment}>Increment</button>
        <button type="button" className="bg-blue-500 text-white p-2 rounded ml-2" onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterPage;
