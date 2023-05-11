import React from 'react'
import { LockOutlined } from '@ant-design/icons';
import { Button,  Form, Input } from 'antd';

const layout = {

    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 20,
      
    },
  };
  
const CreateUser = () => {

    const [form] = Form.useForm();
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:8080/api/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(e),
        }).then((r) => {
          if (r.ok) {
            alert("Registration Successfull")
            //navigate('/app')
            window.location.replace("/app");
          }
        });
        form.resetFields();
      }

  return (
    <Form
    name="nest-messages"
    
    {...layout}
    onFinish={handleSubmit}
    onSubmit= {handleSubmit}
  >
    <div className='signup'>
    <label>Member No</label>
    <Form.Item
      name="member_no"
      rules={[
        {
          required: true,
          message: 'Please input your Member No!',
        },
      ]}
    >
      <Input  placeholder="Member No" />
    </Form.Item>
   
    <label>Email</label>
<Form.Item
  name="email"
  rules={[
    {
      required: true,
      message: 'Please input Email!',
      
    },
  ]}
>
  <Input 
  type="email"
  placeholder="Email" />

  </Form.Item>
  <label>Password</label>
    <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
           prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          autocomplete="new-password"
        />
      </Form.Item>
      <label>Confirm Password</label>
      <Form.Item
        name="password_confirmation"
        rules={[
          {
            required: true,
            message: 'Please Confirm Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
     
      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button"  >
        
          Sign Up
        </Button>
        </Form.Item>
        </div>
    </Form>
  )
}

export default CreateUser