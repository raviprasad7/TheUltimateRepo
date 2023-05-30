import React, { useEffect, useState } from 'react';
import TodoService from '../../services/TodoService';
import { Space, Spin } from 'antd';
import TodoList from './TodoList';

const TodoApp: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const onToggle = (todoId: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    TodoService.fetchTodos().then((todos: Array<Todo>) => {
      setTodos(todos);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Space
        style={{
          width: '100%',
          height: '100vh',
          justifyContent: 'center',
        }}
      >
        <Spin />
      </Space>
    );
  }

  return <TodoList todos={todos} onToggle={onToggle} />;
};

export default TodoApp;
