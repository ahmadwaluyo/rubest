import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const img = require("../assets/img/login-background.jpg");

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={styles}>
        <h1>Login</h1>
        <Form
        name="normal_login"
        className="login-form"
        style={{ width: "25%"}}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
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
            <Link to="/">
                Forgot password
            </Link>
        </Form.Item>

        <Form.Item>
            <Button style={styleLogin} htmlType="submit" className="login-form-button">
            Log in
            </Button>
            <span>
            {" "}Or <Link to="/">register now!</Link>
            </span>
        </Form.Item>
        </Form>
    </div>
  );
};

const styles = {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    paddingTop: "18vh",
    background: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

const styleLogin = {
    background: "rgb(26, 116, 232)", 
    width: "100%", 
    color: "#fff", 
    borderRadius: "4px", 
    marginBottom: 10
}

export default Login