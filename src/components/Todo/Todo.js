import React from 'react'

function Todo({ title, deleteCallback, id, completeTodo }) {
  const handleDelete = () => {
    console.log('delete from todo')
    deleteCallback(id)
  }
  const handleComplete = () => {
        completeTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button onClick={handleDelete}>delete item</button>
      <button>edit item</button>
      <input type="checkbox" onClick={handleComplete} ></input>
    </li>
  )
}

export default Todo
