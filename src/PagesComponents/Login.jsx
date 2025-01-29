import React from 'react';
import HeroBanner from '../Components/HeroBanner/HeroBanner';
import LoginForm from '../Components/Form/LoginForm';


function Login() {
  return (
    <React.Fragment>
      <HeroBanner />
      <LoginForm/>
    </React.Fragment>
  );
}

export default Login;
