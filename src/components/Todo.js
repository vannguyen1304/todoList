import React, { useEffect, useState } from "react";

const Todo = (props) => {
  const {
    todo,
    deleteTodo,
    editTodo,
    editing,
    saveTodoAfterEdit,
    handleCompleted,
  } = props;
  const [todoEdit, setTodoEdit] = useState();

  // console.log(editing);

  const handleDelete = (todo) => {
    // console.log(todo);
    deleteTodo(todo);
  };

  const handleEdit = (todo) => {
    editTodo(todo);
    // setTodoEdit(editing);
  };

  const handleSave = (todo) => {
    // console.log({ ...todo, content: todoEdit });
    saveTodoAfterEdit({ ...todo, content: todoEdit });
  };

  const handleCompletedWhenClick = (todo) => {
    handleCompleted(todo);
  };

  useEffect(() => {
    if (editing) {
      setTodoEdit(editing.content);
      document.querySelector(".editing").focus();
    }
  }, [editing]);

  return (
    <div className="todo">
      {/* content dua va editing */}
      {editing && editing.id && editing.id == todo.id ? (
        <input
          className="editing"
          value={todoEdit}
          onChange={(e) => setTodoEdit(e.target.value)}
        ></input>
      ) : (
        <span
          onClick={() => handleCompletedWhenClick(todo)}
          className="content"
          style={
            todo.completed
              ? { textDecoration: "line-through", opacity: 0.7 }
              : {}
          }
        >
          {todo.content}
        </span>
      )}

      {/* neu co editing thi hien btn save neu khong thi edit */}
      {editing && editing.id && editing.id == todo.id ? (
        <span className="edit-btn btn" onClick={() => handleSave(todo)}>
          Save
        </span>
      ) : (
        <span className="edit-btn btn" onClick={() => handleEdit(todo)}>
          Edit
        </span>
      )}

      <span className="delete-btn btn" onClick={() => handleDelete(todo)}>
        Delete
      </span>
    </div>
  );
};

export default Todo;
