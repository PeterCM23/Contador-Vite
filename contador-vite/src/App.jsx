import { useState } from "react"
import './App.css'
function App() {
  const [count, setCount] = useState(0);

  const decrement = ()=>{
    setCount(count - 1)
  };
  const increment = ()=>{
    setCount(count + 1)
  };

  return (
    <div className="container">
      <h1>Contador</h1>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App
