import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const addBy = () => {
    dispatch({ type: "ADD_BY", payload: 10 });
  };

  return (
    <div>
      <h1>Counter app</h1>
      <h1>{counter}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add</button>
    </div>
  );
}

export default App;
