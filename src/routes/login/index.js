import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Button, Input, Checkbox } from 'antd';
import { Link } from 'dva/router';
import 'antd/lib/form/style';
import 'antd/lib/icon/style';
import 'antd/lib/button/style';
import 'antd/lib/input/style';
import 'antd/lib/checkbox/style';
import Page from '../../components/Page';
import './index.less';

const FormItem = Form.Item;

const Login = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('valores recibidos del form', values);
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <FormItem className="login-form-input">
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Por favor ingrese usuario' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Usuario" />,
        )}
      </FormItem>
      <FormItem className="login-form-input">
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Por favor ingrese su contraseña' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Contraseña" />,
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>Recuerdame</Checkbox>,
        )}

        <a className="login-form-forgot" href="">Olvide mi contraseña</a>
        <Button type="primary" htmlType="submit" className="login-form-button" >Ingresar</Button>
        O <Link to="/logup">registrate ahora!</Link>
      </FormItem>
    </Form>
  );
};


export default connect()(Form.create()(Login));
