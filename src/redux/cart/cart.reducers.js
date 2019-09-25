import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    // hides the dropdown when a user first arrives to the website
    hidden: true,
};

// cart reducer's default state is the initial state
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
        return {
            ...state,
            hidden: !state.hidden
        }
        default:
            return state;
    }
}

export default cartReducer;