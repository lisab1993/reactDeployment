const AddTodo = (props) => {
  const { submitTodo, handleTodoTextChange, todoText } = props;

  return (
    <div>
      <div>
        <form onSubmit={submitTodo}>
          <div>Enter Todo</div>
          <input 
          type="text"
          name="task" 
          value={todoText}
          onChange={handleTodoTextChange}
          className="border-2 border-black"
          />
          <button>Submit Todo</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
