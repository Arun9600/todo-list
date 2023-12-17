import Todo from "./components/Todo";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="form-area">
          <h1>Todo Lists</h1>
          <Todo />
        </div>
      </div>
    </>
  );
};

export default App;
