import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

import {Link } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 24,
  },
};
const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const [form] = Form.useForm();
  function handleSubmit(e){
    fetch("http://localhost:8080/api/v1/auth/authenticate",

    {
      method: 'POST',
      headers:{
        "Content-Type":"application/json",
         "accept":"application/json"
      },
      body:JSON.stringify(e)

    }).then((r) => {
       if(r.ok){
        
        alert("login Successful" );
        window.location.replace("/app");
       }
     
    }
      
    ).then((data) => {
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
     
      console.log("mary");

    })
    
    
    form.resetFields();
  }

  return (
    <Form
      name="normal_login"
      {...layout}
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      onSubmit= {handleSubmit}
    >
      <div className='login'>
        <div className='border'>
          <label>Email</label>
      <Form.Item
      
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
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
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/CreateUser">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
      
        <Button type="primary" htmlType="submit" className="login-form-button"  >
        
          Log in
        </Button>
        

        <Link to="/SignUp">  <a className="login-form-forgot" href="/SignUp">
          Register now!
        </a> </Link>
      </Form.Item>
      </div>
      
      </div>
      
    </Form>
  );
};

export default Login;