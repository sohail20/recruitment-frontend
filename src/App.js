import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <a href="/create">Create Job</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/jobs">View Jobs</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '2rem' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/create" />} />
            <Route path="/create" element={<JobForm />} />
            <Route path="/jobs" element={<JobList />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
