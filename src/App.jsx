import { useState } from 'react';
import './app.css';

function App() {
  const [count, setCount] = useState(0);

  function decrementHandler() {
    count === 0 ? setCount(() => 0) : setCount((prev) => prev - 1);
  }

  function resetHandler() {
    setCount(() => 0);
  }

  function incrementHandler() {
    setCount((prev) => prev + 1);
  }

  return (
    <div id="app">
      <h1 className="heading">Increment & Decrement Counter</h1>

      <div className={`count ${count === 0 ? 'zero' : 'non-zero' }`}>{count}</div>

      <div className="buttons">
        <button
          type="button"
          onClick={decrementHandler}
          className="btn decrement"
        >
          Decrement
        </button>
        <button type="button" onClick={resetHandler} className="btn reset">
          Reset
        </button>
        <button
          type="button"
          onClick={incrementHandler}
          className="btn increment"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
