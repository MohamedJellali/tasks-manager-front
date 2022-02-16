import "./App.css";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App m-5">
      <h1>TODO LIST</h1>
      <TodoList />
    </div>
  );
}

export default App;
