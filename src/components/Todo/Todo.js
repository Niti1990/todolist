import React from "react";

function Todo({ title, deleteCallback, id }) {
    const handleDelete = () => {
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

export default Todo