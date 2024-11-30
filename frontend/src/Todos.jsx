import PropTypes from "prop-types";

function Todos({ todos, deleteTodo }) {
  async function handleCheck(id, isChecked) {
    if (isChecked) {
      alert("Best of luck for your task. 🚀");
    } else {
      alert("Congrats! You have completed this task. 🎉");
    }
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
    });
    const data = await res.json();
    console.log(data);
    window.location.reload();
  }

  return (
    <div className="p-5">
      {todos.map((todo, index) => {
        return (
          <div key={index} className="border-2 p-3 mb-3">
            <h3 className="mb-1">Task #{index + 1}</h3>
            <p className="mb-1">{todo.title}</p>
            <p className="mb-1">{todo.description}</p>
            <div>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => {
                  handleCheck(todo._id, todo.completed);
                }}
              />{" "}
              Completed
            </div>
            <button
              className="text-red-500 mt-1 block"
              onClick={() => {
                deleteTodo(todo._id);
              }}
            >
              Delete this todo
            </button>
          </div>
        );
      })}
    </div>
  );
}

Todos.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  setId: PropTypes.func,
};

export default Todos;
