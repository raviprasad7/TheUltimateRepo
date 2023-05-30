import React, { useEffect, useState } from 'react';
import TodoService from '../../services/TodoService';
import { Space, Spin } from 'antd';
import TodoList from './TodoList';
import useFetch from '../../hooks/useFetch';
import { FETCH_TODOS_URL } from '../../constants/TodoApp/constant';

const TodoApp: React.FC = () => {
  const { data, error, isLoading } = useFetch(FETCH_TODOS_URL, null);

  const [todos, setTodos] = useState<Array<Todo>>([]);

  const onToggle = (todoId: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, [data]);

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
