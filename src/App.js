import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from './todosSlice';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      <h1>ToDo list</h1>
      {todos.map(todo => (
        <div key={todo.id}>
          <input type="checkbox" checked={todo.completed} readOnly />
          <label>{todo.title}</label>
        </div>
      ))}
    </div>
  );
}

export default App;
