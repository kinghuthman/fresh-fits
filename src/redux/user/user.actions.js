// reducer needs to align with the action creator type
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})