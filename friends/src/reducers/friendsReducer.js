 import { FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, FETCH_FRIENDS_FAILURE} from '../actions'

const initalState = {
    friends: [],
    error: "",
    isLoading: false
}

export const friendsReducer = (state = initalState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
        return {
           ...state,
            error: "",
            isLoading: true
        } 
        case FETCH_FRIENDS_SUCCESS:
        return {
           ...state,
            error: "",
            isLoading: false
        } 
        case FETCH_FRIENDS_FAILURE:
        return {
           ...state,
            error: "",
            isLoading: false
        } 
        default: 
        return state;
    }
};