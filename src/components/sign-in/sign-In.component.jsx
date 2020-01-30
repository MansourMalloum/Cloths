import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-In.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      
    }
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
