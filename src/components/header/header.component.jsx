import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

// header is aware of the status of the currentUser
const Header = ({ currentUser, hidden }) => (
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
            {currentUser ?(
                <div className = 'option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className = 'option' to = '/signin'>
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        { hidden ? null :
        <CartDropdown />
        }
    </div>
)

/* allows us to receive props directly from the root-reducer, 
will return an object where the value or site where the name of the 
property will be the actual property we want to pass in 
and then the value will be the value */
const mapStateToProps = ({user: { currentUser }, cart: { hidden }}) => ({
    // destructured currentuser and hidden, off of user and cart which both come from state
    currentUser,
    hidden
});
// connect is a hoc that will provide additonal functionality to header
export default connect(mapStateToProps)(Header);