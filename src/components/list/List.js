import React from 'react'
import Todo from '../Todo/Todo'

function List({ todos, deleteCallback, completeTodo}) {
  return (
    <div>
      <h1>Add TODOLIST</h1>
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              id={todo.id}
              title={todo.title}
              isDone={todo.done}
              deleteCallback={deleteCallback}
              completeTodo={completeTodo}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default List
