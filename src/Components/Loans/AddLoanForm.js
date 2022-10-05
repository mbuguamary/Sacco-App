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

  const [formData,setFormData] = useState({});
  const [loan,setLoan] = useState({});
  function handleChange(e){
    setFormData({...FormData, [e.target.name]:[e.target.value]})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch("http://localhost:8001/loandetails",
    {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        "accept":"application/json"
      },
      body: JSON.stringify(formData)

    })
    .then(res => res.json())
    .then (data => {
     setLoan([...loan,data])
    })

  }


  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} onSubmit={handleSubmit}>
      <Form.Item
      
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="name" onChange={handleChange} />
      </Form.Item>
      <Form.Item
      
        label="Member No"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="memberno" onChange={handleChange} />
      </Form.Item>
     
      <Form.Item  label="Category">
        <Input name="category" onChange={handleChange}/>
      </Form.Item>
      <Form.Item
        
        label="Amount"
        rules={[
          {
            required: true,
          },
        ]}
      
      >
        <Input name="amount" onChange={handleChange}/>
      </Form.Item>
      
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <button type="submit" >
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddLoanForm;