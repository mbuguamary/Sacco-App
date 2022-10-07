import { Form, Input, InputNumber } from 'antd';
import { useState } from 'react';
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
  
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const AddLoanForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [form] = Form.useForm();
  const [formData,setFormData] = useState({});
  const [loan,setLoan] = useState({});
  function handleChange(e){
    setFormData({...FormData, [e.target.name]:[e.target.value]})
  }

  function handleSubmit(e){
    //e.preventDefault();
    console.log(e, " is the data")
    fetch("http://localhost:8001/loandetails",
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(e)

    })
    .then(res => res.json())
    .then (data => data
      )
      form.resetFields();
    

  }


  return (
    <Form  form={form} {...layout} name="nest-messages" onFinish={handleSubmit} validateMessages={validateMessages} onSubmit={handleSubmit}>
      <Form.Item
        name="member"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={handleChange} />
      </Form.Item>
      <Form.Item
        name="memberno"
        label="Member No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input  onChange={handleChange} />
      </Form.Item>
     
      <Form.Item name="category" label="Category">
        <Input  onChange={handleChange}/>
      </Form.Item>
      <Form.Item
        name="amount"
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input  onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="primary" htmlType="submit" >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddLoanForm;