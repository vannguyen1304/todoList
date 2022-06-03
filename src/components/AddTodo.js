import React, { useState } from "react";

const AddTodo = (props) => {
  const { addTodo } = props;
  const [valueInput, setValueInput] = useState("");
  const handleAdd = () => {
    if (valueInput) {
      setValueInput("");
      addTodo(valueInput);
    }
  };
  return (
    <div className="add-todo">
      <input
        type="text"
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
      />
      <button onClick={() => handleAdd()}>Add</button>
    </div>
  );
};

export default AddTodo;
