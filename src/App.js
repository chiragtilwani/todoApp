import './App.css';
import TodoApp from './TodoApp'
import { TodoProvider } from './context/Todo.context'

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <TodoApp />
      </TodoProvider>
    </div>
  );
}

export default App;
