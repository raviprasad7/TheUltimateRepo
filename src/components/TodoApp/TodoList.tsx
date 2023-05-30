import { List, Typography } from 'antd';
import React from 'react';

interface IProps {
  todos: Array<any>;
  onToggle: Function;
}

const TodoList: React.FC<IProps> = ({ todos, onToggle }) => {
  console.log('todos: ', todos);
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item key={todo.id} onClick={() => onToggle(todo.id)}>
          {
            <Typography.Text delete={todo.completed}>
              {todo.title}
            </Typography.Text>
          }
        </List.Item>
      )}
    />
  );
};

export default TodoList;
