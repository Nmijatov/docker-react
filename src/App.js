import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const activeTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Docker React Todo App</h1>
        <p className="subtitle">Jednostavna Todo aplikacija u Docker kontejneru</p>

        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Dodaj novi zadatak..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">Dodaj</button>
        </form>

        <div className="stats">
          <span>{activeTodos} aktivnih zadataka</span>
          <span>{todos.length} ukupno</span>
        </div>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <li className="empty-state">Nema zadataka. Dodaj novi zadatak gore!</li>
          ) : (
            todos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div className="todo-content" onClick={() => toggleTodo(todo.id)}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                </div>
                <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        <footer className="footer">
          <p>Made with React + Docker</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
