import React from 'react';

import './sign-in.styles.scss';


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
                    <input 
                        name = 'email'
                        type = 'email'
                        value = {this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>
                    <input 
                        name = 'password' 
                        type = 'password'
                        value = {this.state.password}
                        onChange={this.handleChange}
                        required
                    />
                    <label>Email</label>

                    <input type='submit' value ='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn