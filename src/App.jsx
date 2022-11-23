import Form from "./Form";
import { useState } from "react";
import LiMaker from "./LiMaker";
import './assets/style.css'
function App() {
  const [todoItems, setTodoItems] = useState([]);
  return (
    <section className="bg-white container max-w-3xl p-10 rounded">
    <h1 className="text-3xl text-gray-700">ToDo App</h1>
      <Form todoItems={todoItems} setTodoItems={setTodoItems} />
      
      <LiMaker todoItems={todoItems} setTodoItems={setTodoItems} />
    </section>
  );
}

export default App;
