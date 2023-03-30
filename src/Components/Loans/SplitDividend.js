import React from 'react'
import { Form, Table, Input } from 'antd';
const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const columns = [
    {
      title: 'Mode',
      dataIndex: 'mode',
      key: 'mode',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
];

const SplitDividend = () => {
    const [form] = Form.useForm();
   function handleSubmit(){

   }
  return (
      
        <Form form={form} {...layout} name="nest-messages" onFinish={handleSubmit}  onSubmit={handleSubmit}> 
          <Table columns={columns} />
        <Form.Item name="gross" label="Gross Dividend">
        <Input  />
      </Form.Item>
      <Form.Item name="total" label="Total">
        <Input />
      </Form.Item>
      <Form.Item name="balance" label="Balance">
        <Input  />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
      </Form>
    
  )
}

export default SplitDividend