import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

import todos from './api/todos';
import users from './api/users';

function App() {
  const preparedTodos = [];

  todos.forEach((todo) => {
    const user = users.find(person => person.id === todo.userId);

    if (user !== undefined) {
      preparedTodos.push({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        user,
      });
    }
  });

  return (
    <div className="app">
      <h1 className="app__title">Static list of todos</h1>
      <p className="app__statistic">
        <span>Todos: </span>
        {todos.length}
      </p>
      <p className="app__statistic">
        <span>Users: </span>
        {users.length}
      </p>
      <div className="todo">
        <TodoList todoList={preparedTodos} />
      </div>
    </div>
  );
}

export default App;
