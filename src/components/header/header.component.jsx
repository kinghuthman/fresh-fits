import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';


const Header = () => (
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
        </div>
    </div>
)

export default Header