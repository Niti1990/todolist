import "./App.css";
import "./components/Header/Header.css";
import Header from "./components/Header/Header";
import List from "./components/list/List";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

import Todo from "./components/Todo/Todo";

// import EditTodo from '/components/EditTodo/EditTodo';

import { useState } from "react";

const TODOS = [
  {
    id: 101,
    title: "shopping",
    done: true,
  },
  {
    id: 103,
    title: "sleeping",
    done: true,
  },
  {
    id: 106,
    title: "grocery",
    done: true,
  },
];

function App() {
  const [todoItems, setTodoItems] = useState(TODOS);
  const addNewTodo = (newTodo) => {
    //console.log(newTodo)
    setTodoItems([...todoItems, newTodo]);
  };

  // add items
  //  const [value, setValue] = useState("");
  //  const addNewTodo = (newTodo) =>{
  //   if (!value) return;
  //   addNewTodo(value);
  //   setValue("");

  //  };
  // isdone items
  const completeTodo = (id) => {
    const newToDos = todoItems
    const todo = newToDos.find(todo => todo.id === Number(id))
    todo.done = !todo.done
    setTodoItems(newToDos);
    console.log(newToDos)
  };
  //console.log(newToDos)
  // delete items

  // function to remove a todo item from the todo array
  const deleteTodoById = (id) => {
    // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todoItems.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== Number(id);
    });
    // removeItem returns a new array - so now we are setting the todos to the new array
    setTodoItems(removeItem);
  };
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Form addNewTodo={addNewTodo} />
        <List
          todos={todoItems}
          deleteCallback={deleteTodoById}
          completeTodo={completeTodo}
        />
      </header>
      <Footer />
    </div>
  );
}

export default App;
