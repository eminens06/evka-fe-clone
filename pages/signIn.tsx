import { NextPage } from 'next';
import { RelayEnvironmentProvider } from 'relay-hooks';
import environment from '../src/relay/environment';
import React from 'react';
import SignInForm from '../src/modules/auth/sign-in/SignInForm.component';

const SignIn: NextPage = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <SignInForm />
    </RelayEnvironmentProvider>
  );
};

export default SignIn;
