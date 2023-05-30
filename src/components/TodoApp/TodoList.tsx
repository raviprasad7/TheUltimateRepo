import { Checkbox, List, Space, Typography } from 'antd';
import React from 'react';

interface IProps {
  todos: Array<Todo>;
  onToggle: Function;
}

const TodoList: React.FC<IProps> = ({ todos, onToggle }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item
          key={todo.id}
          style={{
            cursor: 'pointer',
          }}
          onClick={() => onToggle(todo.id)}
        >
          {
            <Space size={'middle'}>
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <Typography.Text delete={todo.completed}>
                {todo.title}
              </Typography.Text>
            </Space>
          }
        </List.Item>
      )}
    />
  );
};

export default TodoList;
