import React, { useEffect, useState } from 'react';
import { Table, Typography } from 'antd';
import axios from '../api';

const { Title } = Typography;

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('/jobs');
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Deadline',
      dataIndex: 'deadline',
      key: 'deadline',
      render: (text) => new Date(text).toLocaleDateString(),
    },
  ];

  return (
    <>
      <Title level={2}>Job Listings</Title>
      <Table
        columns={columns}
        dataSource={jobs.map((job) => ({ ...job, key: job.id }))}
        pagination={{ pageSize: 5 }}
        bordered
      />
    </>
  );
};

export default JobList;
