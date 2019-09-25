import { UserActionTypes } from './user.types';
// reducer needs to align with the action creator type
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})