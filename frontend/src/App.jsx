import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    async function getTodos() {
      const res = await fetch("http://localhost:3000/api/todos");
      const data = await res.json();
      setTodos(data.todos);
    }

    getTodos();
  }, []);

  async function createTodo() {
    const payload = {
      title: title,
      description: desc,
      completed: checked,
    };

    const res = await fetch("http://localhost:3000/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    window.location.reload();
    console.log(data);
  }

  async function deleteTodo(id) {
    if (id !== undefined) {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      window.location.reload();
    }
  }

  return (
    <>
      <div>
        <p className="text-7xl underline decoration-sky-500 p-5">doit!</p>
        <TodoForm
          setTitle={setTitle}
          setDesc={setDesc}
          setChecked={setChecked}
          createTodo={createTodo}
        />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </div>
    </>
  );
}

export default App;
