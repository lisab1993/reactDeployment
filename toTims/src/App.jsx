import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import AllTodos from "./Components/AllTodos";
import { ClearAllTodos } from "./Components/ClearAllTodos";

function App() {
  const [todoText, setTodoText] = useState("do the dishes");
  const [counter, setCounter] = useState(() => {
    const localStoredCounter = localStorage.getItem("counterState")
    return localStoredCounter ? JSON.parse(localStoredCounter) : 0;
  })
  const [allTodos, setAllTodos] = useState(() => {
    const localStoredTodos = localStorage.getItem("toTimsState");
    return localStoredTodos ? JSON.parse(localStoredTodos) : [];
  });

  useEffect(() => {
    const stateString = JSON.stringify(allTodos);
    localStorage.setItem("toTimsState", stateString);
    const countString = JSON.stringify(counter);
    localStorage.setItem("counterState",countString)
  }, [allTodos]);

  const handleTodoTextChange = (event) => {
    // console.log(event.target.value, 'handle change e.target.value')
    setTodoText(event.target.value);
  };

  const clearAllTodos = (event) => {
    localStorage.clear();
    setAllTodos([])
    setCounter(0)
  }

  const submitTodo = async (event) => {
    event.preventDefault();
    const newTodoObj = {
      id: counter,
      task: todoText,
      completed: false,
      dateAdded: new Date().toString(),
    };

    setAllTodos((existingTodos) => [...existingTodos, newTodoObj]);
    setTodoText("");
    setCounter(counter + 1)
  };

  return (
    <>
      <div>
        <h1>Main Page</h1>
        <span>
          <AddTodo
            todoText={todoText}
            handleTodoTextChange={handleTodoTextChange}
            submitTodo={submitTodo}
          />
        </span>
        <span>
          <AllTodos 
          allTodos={allTodos}
          />
        </span>
      </div>
      <br />
      <br />
      <ClearAllTodos 
      clearAllTodos={clearAllTodos}
      />
    </>
  );
}

export default App;
