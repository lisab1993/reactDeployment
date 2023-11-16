import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";

function App() {
  const [todoText, setTodoText] = useState("do the dishes");
  const [allTodos, setAllTodos] = useState(() => {
    const localStoredTodos = localStorage.getItem('toTimsState')
    return localStoredTodos ? JSON.parse(localStoredTodos) : [];
  })

  
  useEffect(() => {
    const stateString = JSON.stringify(allTodos)
    localStorage.setItem('toTimsState', stateString)
  }, [allTodos])

  const handleTodoTextChange  = (event) => {
    // console.log(event.target.value, 'handle change e.target.value')
    setTodoText(event.target.value);
  };

  const submitTodo = async (event) => {
    event.preventDefault();
      const newTodoObj = {
      task: todoText, 
      completed: false, 
      dateAdded: new Date().toString()
    }

    setAllTodos((existingTodos) => [...existingTodos, newTodoObj])
    setTodoText('')
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
      </div>
    </>
  );
}

export default App;
