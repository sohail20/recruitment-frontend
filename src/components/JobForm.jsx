import React from 'react';
import { Form, Input, Select, Button, DatePicker, message } from 'antd';
import axios from '../api';

const { Option } = Select;
const { TextArea } = Input;

const JobForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await axios.post('/jobs', values);
      message.success('Job posted successfully!');
      form.resetFields();
    } catch (err) {
      message.error('Failed to post job');
    }
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <Form.Item name="title" label="Job Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="department" label="Department" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="type" label="Employment Type" rules={[{ required: true }]}>
        <Select placeholder="Select type">
          <Option value="Full-time">Full-time</Option>
          <Option value="Part-time">Part-time</Option>
          <Option value="Internship">Internship</Option>
        </Select>
      </Form.Item>

      <Form.Item name="description" label="Job Description" rules={[{ required: true }]}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item name="location" label="Location" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="deadline" label="Application Deadline" rules={[{ required: true }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>

      <Button type="primary" htmlType="submit">Submit</Button>
    </Form>
  );
};

export default JobForm;
