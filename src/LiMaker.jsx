import { useState } from "react";

export default function LiMaker({ todoItems, setTodoItems }) {
  const [isEdited, setIsEdited] = useState(null);
  const [inputEdit, setInputEdit] = useState("");

  function handleDelete(id) {
    const FilterElement = todoItems.filter((element) => {
      return element.id !== id;
    });

    setTodoItems(FilterElement);
    console.log(id);
  }

  function handleChange(e) {
    setInputEdit(e.target.value);
  }

  function handleEdit(id, text) {
    setIsEdited(id);
    setInputEdit(text);
  }

  function handleSave(id) {
    const temp = [...todoItems];
    temp.find((item) => {
      return item.id === id;
    }).text = inputEdit;
    setTodoItems(temp);
    setIsEdited(null);
  }

  function handleCancell() {
    setIsEdited(null);
  }

  function handleChecked(id) {
    const temp = [...todoItems];
    let handleCheckbox = temp.find((item) => {
      return item.id === id;
    });
    handleCheckbox.isDone = !handleCheckbox.isDone;
    setTodoItems(temp);
  }

  return (
    <ul>
      {todoItems.map((item) => {
        return (
          <div className="todoItems flex py-3 border-b-2 border-gray-300">
            <input
              type="checkbox"
              onChange={() => handleChecked(item.id)}
              className="w-5 mr-2 accent-red-500 hover:accent-red-400"
            />
            <li key={item.id}>
              {isEdited == item.id ? (
                <div className="grid grid-cols-3 gap-28">
                  <input
                    type="text"
                    value={inputEdit}
                    onChange={handleChange}
                    className="border-2 border-gray-400 rounded col-span-2"
                  />
                  <div className="col-span-1">
                    <button
                      onClick={() => handleSave(item.id)}
                      className="text-white bg-red-500 hover:bg-red-400 text-lg px-3 py-1 rounded mr-0.5"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancell}
                      className="text-white bg-cyan-700 hover:bg-cyan-600 text-lg px-3 py-1 rounded"
                    >
                      Cancell
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-10">
                  <span
                    className={`text-lg ${item.isDone ? "line-through" : ""} col-span-3`}
                  >
                    {item.text}
                  </span>
                  <div className="col-span-1 ">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-white bg-red-500 hover:bg-red-400 text-lg px-3 py-1 rounded mr-1"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(item.id, item.text)}
                    className="text-white bg-cyan-700 hover:bg-cyan-600 text-lg px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  </div>
                  
                </div>
              )}
            </li>
          </div>
        );
      })}
    </ul>
  );
}
