import { Card, Space, Typography } from 'antd';

const { Text } = Typography;

const HomeContainer: React.FC = (): JSX.Element => {
  return (
    <Space size={16}>
      <Card
        title='Todo App'
        extra={<a href='/todo-app'>Open</a>}
        style={{ width: 300 }}
      >
        <Text>Demo Todo app to add, list, check and uncheck todos.</Text>
      </Card>
    </Space>
  );
};

export default HomeContainer;
