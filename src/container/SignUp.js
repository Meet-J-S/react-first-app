import {connect} from "react-redux";
import {signUpUser} from "../actions/user";
import SignUp from "../components/SignUp";

const handleLocalAction = (dispatch, action) => {
    const {type} = action;
    switch (type) {
        case localActions.SIGN_UP_USER:
            return dispatch(signUpUser(action.data));
        default:
            return;
    }
};

export const localActions = {
    SIGN_UP_USER: 'SIGN_UP_USER',
};

const mapStateToProps = (state) => {

    return {
        localActions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: actionType => handleLocalAction(dispatch, actionType)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);