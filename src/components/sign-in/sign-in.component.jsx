import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.util';

// sign in component, will render on sign-in-and-sign-up page
class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        // want full control of what submit is going to do
        event.preventDefault();

        this.setState({ email: '', password: ''})
    }

    // pulls the value and name off of the targeted event
    handleChange = event => {
        const {value, name } = event.target;

        // dynamically set state with the name and value that has been retrieved  ex: email: this.state.email
        this.setState({ [name]: value})
    } 
    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name = 'email'
                        type = 'email'
                        value = {this.state.email}
                        handleChange={this.handleChange}
                        label = 'email'
                        required
                    />
                    
                    <FormInput 
                        name = 'password' 
                        type = 'password'
                        value = {this.state.password}
                        handleChange={this.handleChange}
                        label = 'password'
                        required
                    />

                    <CustomButton type='submit'> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn