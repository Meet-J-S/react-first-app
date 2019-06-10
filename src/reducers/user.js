import {GET_USER_DETAILS, LOGIN_USER} from '../actions/types'
import {userDefault} from './default/userDef'

export default (state = userDefault, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {user: action.payload};
        case GET_USER_DETAILS:
            return {userDetails: action.payload};
        default:
            return state;
    }
};