import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-In.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
            <h2>I already Have an account</h2>
      <span>Sign In with email and password</span>
      <form onSubmit={this.onSubmit} className='sign-in'>
        <FormInput
          name='email'
          type='email'
          value={this.state.email}
          required
          label='email'
          handleChange={this.onChange}
        />

        <FormInput
          name='password'
          type='password'
          required
          label='password'
          value={this.state.password}
          handleChange={this.onChange}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign In </CustomButton>
          <CustomButton onClick={signInWithGoogle} isSignInWithGoogle>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      </div>
    );
  }
}

export default SignIn;
