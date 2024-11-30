import PropTypes from "prop-types";

function TodoForm({ setTitle, setDesc, setChecked, createTodo }) {
  return (
    <div className="mt-3 pl-5 pr-5 pb-5">
      <input
        type="text"
        placeholder="Enter title"
        className="block mb-3 p-2 border-2"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter description"
        className="block mb-3 p-2 border-2"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <div className="block mb-3">
        <input
          type="checkbox"
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        Completed
      </div>
      <button
        onClick={createTodo}
        className="bg-sky-500 text-white p-2 rounded-md hover:bg-sky-700"
      >
        Add this todo
      </button>
    </div>
  );
}

TodoForm.propTypes = {
  createTodo: PropTypes.func,
  setTitle: PropTypes.func,
  setDesc: PropTypes.func,
  setChecked: PropTypes.func,
};

export default TodoForm;
