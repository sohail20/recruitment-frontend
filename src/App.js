import React from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const { Header, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/create">Create Job</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/jobs">View Jobs</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/create" element={<JobForm />} />
            <Route path="/jobs" element={<JobList />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
