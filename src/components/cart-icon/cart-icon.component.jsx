import React from 'react';
import { connect } from 'react-redux'

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon' />
        <span className = 'item-count'>0</span>
    </div>
);

// toggleCartHidden is a function that triggers the dispatch of toggleCartHidden
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// mapDispatchToProps pass functions that can trigger state change
export default connect(
    null,
    mapDispatchToProps
)(CartIcon);