import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return <div className="login">
            <div className="login-form">
                <div className="login-logo">HCLOUD</div>
                <Form onSubmit={this.handleSubmit}>
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '用户名不能为空!' }],
                        })(
                            <Input prefix={<Icon type="user" />} size={'large'} placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '密码不能为空!' }],
                        })(
                            <Input prefix={<Icon type="lock" />} size={'large'} type="password" placeholder="密码" />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" size={'large'} className="login-form-button">登录</Button>
                    </FormItem>
                </Form>
            </div>
        </div>;
    }
}

export default Form.create()(Login);