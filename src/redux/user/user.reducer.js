// redux is unaware of what state is initially when an action is fired.
const INITIAL_STATE = {
    currentUser: null
}

// if state is undefined it will use the default value
const userReducer = (state = INITIAL_STATE, action) => {
    // based on the action.type value
    switch (action.type) {
        case 'SET_CURRENT_USER':
            // return a new object that represents the new state that the user reducer will transform too
            return {
                // spread in everything else from state only want to modify what is required
                ...state,
                currentUser: action.payload
            }
        
        // if none of the actions match any cases just return state
        default: 
            return state;
    }
}

export default userReducer;