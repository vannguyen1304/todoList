import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, content: "nhiem vu 1", completed: false },
    { id: 2, content: "nhiem vu 2", completed: false },
  ]);
  const [editing, setEditing] = useState();

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      content: todo,
      completed: false,
    };
    // console.log(newTodo);
    setTodoList([...todolist, newTodo]);
  };

  const deleteTodo = (todo) => {
    const newTodoList = todolist.filter((todoItem) => {
      return todoItem.id !== todo.id;
    });
    setTodoList(newTodoList);
  };

  const setEditTodo = (todo) => {
    setEditing(todo);
    // console.log("da vao edit", todo);
  };

  const saveTodoAfterEdit = (newTodo) => {
    // console.log(newTodo);
    const newTodoList = [...todolist];
    let index = -1;
    newTodoList.forEach((todoItem, indexItem) => {
      if (todoItem.id == newTodo.id) {
        index = indexItem;
      }
    });
    // console.log(index);
    newTodoList[index].content = newTodo.content;
    setTodoList(newTodoList);
    setEditing("");
  };

  const handleCompleted = (todo) => {
    const newTodoList = [...todolist];
    let index = -1;
    newTodoList.forEach((todoItem, indexItem) => {
      if (todoItem.id == todo.id) {
        index = indexItem;
      }
    });
    // console.log(index);
    newTodoList[index].completed = !newTodoList[index].completed;
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <h1 className="name">ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todolist}
        deleteTodo={deleteTodo}
        editTodo={setEditTodo}
        editing={editing}
        saveTodoAfterEdit={saveTodoAfterEdit}
        handleCompleted={handleCompleted}
      />
    </div>
  );
}

export default App;
