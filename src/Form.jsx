import { useState } from "react";

export default function Form({ todoItems, setTodoItems }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleAdd(e) {
    e.preventDefault()
    if(inputValue.length){
      const localVAriable = {
        id: Math.floor(Math.random() * 1000) + 1,
        text: inputValue,
        isDone:false
      };
      setTodoItems([...todoItems, localVAriable]);
      setInputValue("");
    }
    
  }

  console.log(todoItems);

  return (
    <div className="App">
      <form className="mt-8 grid grid-cols-4 gap-4 border-b-2 border-gray-300 pb-8">
        <input
          type="text"
          name="task"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your Task"
          className="border-2 border-gray-400 col-span-3 p-2 rounded text-lg"
        />
        <button onClick={handleAdd} className="col-span-1 border rounded bg-red-500 hover:bg-red-400 text-white text-lg">Add</button>
      </form>
    </div>
  );
}
