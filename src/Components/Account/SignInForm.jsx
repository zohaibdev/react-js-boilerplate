import React from 'react';
import { Link, useNavigate } from "react-router-dom"
import { Form, Input, message } from 'antd';
import { login } from "../../Middleware/Auth"
import Roules from '../../Util/rules';

export default function SignInForm(props) {
    const navigate = useNavigate();

    const onFinish = values => {
        const isLogin = login(props, values);
        if (isLogin) {
            message.success('Login Success')
            navigate('/');
        } else {
            message.error('Login Failed')
        }
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form-block">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
            >
                <Form.Item name="username" type="text" rules={Roules.text} >
                    <Input placeholder="Username" autoComplete='off' />
                </Form.Item>
                <Form.Item name="password" type="password" rules={Roules.password} >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <button type="submit" className='tn-btn'>Sign in</button>
                </Form.Item>
            </Form>
            <div className="already-login">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </div>
    )
}