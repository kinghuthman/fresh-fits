import React from 'react';

import './form-input.styles.scss';

const FormInput = ({handleChange, label, ...otherProps}) => (
    
    // wrapping the whole component in a group, want the label and input to be together
    <div className = 'group'>
        {/** handleChange will bubble up any change has been inputted, otherProps contains all the props passed into FormInput in the signIn form, label prop allows to selectively render a label */}
        <input className = 'form-input' onChange = {handleChange} {...otherProps}/>
        {
            label ?
            // if theres a value(user has typed something), shrink will be added to className else remain form-input-label 
            (<label className = {`${otherProps.value.length ? 'shrink': ''} form-input-label `}
            >
            {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput