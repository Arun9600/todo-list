const Form = ({ todo, setTodo, formHandler }) => {
  return (
    <>
      <form>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" onClick={formHandler} disabled={!todo}>
          Add
        </button>
      </form>
    </>
  );
};

export default Form;
