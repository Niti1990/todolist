import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header';
import List from './components/list/List';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';

import Todo from './components/Todo/Todo';

// import EditTodo from '/components/EditTodo/EditTodo';
import NewTodoInput from './components/NewToDo/NewTodo';

import { useState } from 'react';

const TODOS = [{
  id: '101',
  title: 'shopping',
  done:'true',
  
},
{
  id: '103',
  title: 'sleeping',
  done:'true',

},
{
  id: '106',
  title: 'grocery',
  done:'true',

}
]


function App() {



  const [todoItems, setTodoItems] = useState(TODOS);

  const deleteTodoById = (id) => {


    const removeItem = todoItems.filter((todo) => {
      return todo.id !== id;
    });
    setTodoItems(removeItem);
  } 

  return (
    <div className="App">
        <Header/>
      <header className="App-header">
      <Form/>

      <List todos={todoItems} deleteCallback={deleteTodoById} />


    
      </header>

      <Footer/>


    </div>
  );
}

export default App;