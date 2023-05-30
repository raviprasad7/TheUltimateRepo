import React, { useEffect, useState } from 'react';
import TodoService from '../../services/TodoService';
import { Typography } from 'antd';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const onToggle = (todoId) => {
    todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
    });
  };

  useEffect(() => {
    TodoService.fetchTodos().then((todos) => {
      console.log('setting todos: ', todos);
      setTodos(todos);
    });
  }, []);

  return <TodoList todos={todos} onToggle={onToggle} />;
};

export default TodoApp;
