import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useFormik } from 'formik';
import { useRelayEnvironment } from 'relay-hooks';
import { commitMutation } from 'relay-runtime';
import { useRouter } from 'next/router';
import FormError from '../../common/form/form-error';
import mutation from './SignInForm.relay';
import standardRelayError from '../../utils/standard-relay-error';
import EmailInput from '../../common/form/EmailControl.component';
import PasswordInput from '../../common/form/password-control.component';
import * as Yup from 'yup';
import { Routes } from '../../utils/routes';
import LoadingIndicator from '../../common/loading-indicator';
import RememberMeControl from '../../common/form/remember-me';
import '../../LogIn/login.styles.less';
const image = require('../../../assets/logo/loginImage.svg');
const logoMarker = require('../../../assets/logo/Logo.svg');

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string().required('Required'),
  remember: Yup.boolean(),
});

const LoginForm = (): any => {
  const environment: any = useRelayEnvironment();
  const router = useRouter();
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    validateOnChange: false,
    onSubmit: values => {
      setLoading(true);
      setErrors([]);
      commitMutation(environment, {
        mutation,
        variables: {
          input: {
            ...values,
          },
        },
        onCompleted: () => {
          console.log('on complete');
          router.push('/');
        },
        onError: standardRelayError(setLoading, setErrors),
      });
    },
  });

  return (
    <div>
      <LoadingIndicator loading={loading} msg="Signing in" />
      <Form onSubmit={formik.handleSubmit}>
        <div className="login-container">
          <div className="login-image-wrapper">
            <img src={image} className="login-image" />
            <div className="form-container">
              <img src={logoMarker} className="form-logo" />
              <div className="form-title">ADMİN GİRİŞ</div>
              <div className="form-frame">
                <div className="form-input">
                  <EmailInput
                    formikProps={formik}
                    name="email"
                    icon="mail"
                    inputProps={{
                      placeholder: 'Email',
                    }}
                  />
                </div>
                <div className="form-input">
                  <PasswordInput
                    name="password"
                    label=""
                    icon="lock"
                    handleChange={formik.handleChange}
                    handleBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.errors && formik.errors.password}
                    touched={formik.touched && formik.touched.password}
                    inputProps={{
                      autoCapitalize: 'none',
                      placeholder: 'Password',
                    }}
                  />
                </div>

                <div className="form-button">
                  <Button type="submit">Giriş</Button>
                </div>
                {!!errors.length && <FormError errors={errors} />}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
