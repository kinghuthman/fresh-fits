import React from 'react';

import './custom-button.styles.scss';

// pull the children off of the props that get passed into the button and then destructure the other props into otherProps and spread it into the button
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    // conditionally render a className based off props
    <button className ={`${inverted ? 'inverted' : ''} 
    ${isGoogleSignIn ? 'google-sign-in' : ''} 
    custom-button`}  
    {...otherProps}>
        {children} 
    </button>
)

export default CustomButton