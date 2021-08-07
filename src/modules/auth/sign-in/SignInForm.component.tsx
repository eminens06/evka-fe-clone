import { NextPage } from 'next';
import { Form, Button, Row, Col, message } from 'antd';
import { loadSession } from '../utils/session.utils';
import useAuthState from '../utils/UseAuthState.hook';
import './SignIn.module.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Router from 'next/router';
import { Routes } from '../utils/routes';
import { useEffect } from 'react';
import Input from '../../../atoms/Input';
import { useMutation } from 'relay-hooks';
import TOKEN_AUTH, {
  SignInFormRelayMutation,
} from '../../../__generated__/SignInFormRelayMutation.graphql';

const SignInForm: NextPage = () => {
  const session = loadSession();
  const state = useAuthState(session);

  const [tokenAuth] = useMutation<SignInFormRelayMutation>(TOKEN_AUTH, {
    onError: (addErrors: any) => {
      if (addErrors.message === 'Please enter valid credentials') {
        message.error('Kullanıcı adı veya şifre hatalıdır');
      }
    },
    onCompleted: (res) => {
      window.location.reload();
    },
  });

  useEffect(() => {
    if (state === 'authenticated') {
      Router.push(Routes.kiosk);
    }
  }, []);

  const onFinish = (values: any) => {
    //TODO: kullanici girisi istegi atilacak

    tokenAuth({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    //window.alert(errorInfo);
  };

  return (
    <Row>
      <Col xs={6} sm={7} md={8} lg={9} xl={10} />
      <Col className="sign-in-wrapper" xs={12} sm={10} md={8} lg={6} xl={4}>
        <img src="/evka-logo.png" alt="Evka" className="sign-in-logo" />
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Lütfen kullanıcı adınızı kontrol ediniz.',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Kullanıcı Adı"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Lütfen şifrenizi kontrol ediniz.' },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Şifre"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Giriş Yap
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default SignInForm;
