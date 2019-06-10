import {connect} from "react-redux";
import {loginUser} from "../actions/user";
import Home from "../components/Home";

const handleLocalAction = (dispatch, action) => {
    const {type} = action;
    switch (type) {
        case localActions.LOGIN_USER:
            return dispatch(loginUser(action.data));
        default:
            return;
    }
};

export const localActions = {
    LOGIN_USER: 'LOGIN_USER',
};


const mapStateToProps = (state) => {
    const {user} = state.userReducer;

    debugger;

    return {
        user,
        localActions
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: actionType => handleLocalAction(dispatch, actionType)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);