import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util'

import {ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

// header is aware of the status of the currentUser
const Header = ({ currentUser }) => (
    <div className = 'header'>
        {/** logo links back to homepage */}
        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo' />
        </Link>
        {/** special container for individual link options */}
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>
                SHOP
            </Link>
            <Link className = 'option' to = '/contact'>
                CONTACT
            </Link>
            {/**render a div to signout if the user is signed in, link if the user is not signed in */}
            {
                currentUser ?
                <div className = 'option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className = 'option' to = '/signin'>
                    SIGN IN
                </Link>
            }
        </div>
    </div>
)

export default Header