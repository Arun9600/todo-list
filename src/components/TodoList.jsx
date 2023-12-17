const TodoList = ({ todos, setTodos }) => {
  const deleteHandle = (item) => {
    const filter = todos.filter((todo) => todo !== item);
    setTodos(filter);
  };
  const todoLength = todos.length;
  return (
    <>
      <ul>
        {todos.map((item) => (
          <li key={item}>
            {item}
            <span onClick={() => deleteHandle(item)}>x</span>
          </li>
        ))}
      </ul>
      <p className="totalTodos">Total Todos: {todoLength}</p>
    </>
  );
};

export default TodoList;
