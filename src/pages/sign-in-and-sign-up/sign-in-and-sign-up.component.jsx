import React from 'react';
import SignIn from '../../components/sign-in/sign-In.component';
import './sign-in-and-sign-up.component.scss';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => {

  return (
    <div className='sign-in-and-sign-up'>

      <SignIn/>
      <SignUp/>
    </div>
  )

}

export default SignInAndSignUpPage;