import { Layout } from 'antd';
import { AddTodo, Content, Header, TodoList } from './components';

const App = () => {
  return (
    <Layout>
      <Header />
      <Content>
        <AddTodo />
        <TodoList />
      </Content>
    </Layout>
  )
}

export default App;
