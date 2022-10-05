import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
  number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const addLoanForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const [fornData,setFormData] =useState({});
  function handleChange(e){
    setFormData({...FormData, [e.target.name]:[e.target.value]})
  }

  function handleSubmit(){
    fetch("")
  }


  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'MemberNo']}
        label="Member No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'Amount']}
        label="Amount"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 9999999,
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item name={['user', 'Category']} label="Category">
        <Input />
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default addLoanForm;