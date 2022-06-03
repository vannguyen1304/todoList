import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todoList } = props;
  //   console.log(todoList);

  return (
    <div className="todolist">
      {todoList.length == 0 ? <h3 className="empty">List is empty</h3> : ""}
      <div className="todos-container">
        {todoList.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={props.deleteTodo}
              editTodo={props.editTodo}
              editing={props.editing}
              saveTodoAfterEdit={props.saveTodoAfterEdit}
              handleCompleted={props.handleCompleted}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
