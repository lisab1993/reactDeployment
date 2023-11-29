import "./App.css";
import { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import AllTodos from "./Components/AllTodos";
import ClearAllTodos from "./Components/ClearAllTodos";
import AddGrocery from "./Components/AddGrocery";
import AllGroceries from "./Components/AllGroceries";
import ClearAllGroceries from "./Components/ClearAllGroceries";

function App() {
  //text input for a new todo
  const [todoText, setTodoText] = useState("do the dishes");
  //text input for a new grocery item
  const [groceryText, setGroceryText] = useState("cherries")
  //counter for todo item ids
  const [todoCounter, setTodoCounter] = useState(() => {
    const localStoredCounter = localStorage.getItem("counterState")
    return localStoredCounter ? JSON.parse(localStoredCounter) : 0;
  })
  //counter for grocery item ids
  const [groceryCounter, setGroceryCounter] = useState(0)
  //list of all todos
  const [allTodos, setAllTodos] = useState(() => {
    const locallyStored = JSON.parse(localStorage.getItem("toTimsState"));
    return locallyStored ? locallyStored.allTodos : [];
  });
  //list of all grocery items
  const [allGroceries, setAllGroceries] = useState(() => {
    const locallyStored = JSON.parse(localStorage.getItem("toTimsState"));
    return locallyStored ? locallyStored.allGroceries : [];
  });


  useEffect(() => {
    const allStates = {allTodos, allGroceries, todoCounter, groceryCounter}
    const stateString = JSON.stringify(allStates);
    localStorage.setItem("toTimsState", stateString);
  }, [allTodos, allGroceries]);

  const handleTodoTextChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleGroceryTextChange = (event) => {
    setGroceryText(event.target.value);
  };

  const clearAllTodos = (event) => {
    localStorage.clear();
    setAllTodos([])
    setTodoCounter(0)
  }

  const ClearAllGroceries = (event) => {
    localStorage.clear();
    setAllGroceries([])
    setGroceryCounter(0)
  }

  const submitTodo = (event) => {
    event.preventDefault();
    const newTodoObj = {
      id: todoCounter,
      task: todoText,
      completed: false,
      dateAdded: new Date().toString(),
    };

    setAllTodos((existingTodos) => [...existingTodos, newTodoObj]);
    setTodoText("");
    setTodoCounter(todoCounter + 1)
  };

  const submitGrocery =(event) => {
    event.preventDefault()
    const newGroceryObj = {
      id: groceryCounter,
      item: groceryText,
      completed: false,
      dateAdded: new Date().toString()
    };

    setAllGroceries((existingGroceries) => [... existingGroceries, newGroceryObj])
    setGroceryText("")
    setGroceryCounter(groceryCounter + 1)
  } 

  return (
    <>
      <div>
        <h1 className="font-bold">Shopping and Todos</h1>
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