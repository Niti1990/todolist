import React from "react";
 import List from './components/list/List';



// 1_ get isDone prop
// 2_ display 'checked' attribute in checkbox based on isDone true/false
// react way-> put your conditional in {isDone ? ....}
// 3_ display conditionally the class of the todo
// 4_ display conditionally the contenteditable attribute

function Todo({ title, deleteCallback }) {
  const handleDelete = () => {
    console.log("delete from todo");
    deleteCallback(id);
  };

  return (
    <div>
      <li>
        <p>{title}</p>
        <button onClick={handleDelete}>delete item</button>
        <button>edit item</button>
      </li>
    </div>
  );
}

export default Todo;