function App() {
  return (
    <div id="app">
      <h1 className="heading">Increment & Decrement Operator</h1>
      <div className="count">0</div>
      <div className="buttons">
        <button type="button" className="btn decrement">Decrement</button>
        <button type="button" className="btn reset">Reset</button>
        <button type="button" className="btn increment">Increment</button>
      </div>
    </div>
  );
}

export default App;