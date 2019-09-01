import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    // async function gets event and prevent the default action of a form submit
    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        // check if passwords match
        if(password !== confirmPassword){
            alert("password don't match");
            return;
        }

        try {
            // creates a new user associated with the email and password
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            // once the user is returned, run createUserProfileDocument, if successful reset state, 
            await createUserProfileDocument(user, { displayName });
            // so await user creation then run setState and set state to the initial values where everything is empty.. clear form!
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className = 'sign-up'>
                <h2 className = 'title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className = 'sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        onChange = {this.handleChange}
                        label= 'Display Name'
                        required
                    />
                    <FormInput
                        type = 'text'
                        name = 'email'
                        value = {email}
                        onChange = {this.handleChange}
                        label= 'Email'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'password'
                        value = {password}
                        onChange = {this.handleChange}
                        label= 'Password'
                        required
                    />
                    <FormInput
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        onChange = {this.handleChange}
                        label= 'Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;