import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

// sign in component, will render on sign-in-and-sign-up page
class SignIn extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        // want full control of what submit is going to do
        event.preventDefault();

        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // upon successful login clear input fields
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.log(error);
        }

        
    }

    // pulls the value and name off of the targeted event
    handleChange = event => {
        const { value, name } = event.target;

        // dynamically set state with the name and value that has been retrieved  ex: email: this.state.email
        this.setState({ [name]: value })
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
                        handleChange={this.handleChange}
                        value = {this.state.email}
                        label = 'email'
                        required
                    />
                    
                    <FormInput 
                        name = 'password' 
                        type = 'password'
                        handleChange={this.handleChange}
                        value = {this.state.password}
                        label = 'password'
                        required
                    />
                    <div className = 'buttons'>
                        <CustomButton type='submit'> Sign in</CustomButton>
                        {/** sign in with google pop up!, isGoogleSignIn for custom button */}
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn