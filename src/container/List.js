import {connect} from "react-redux";
import {getUserDetails} from "../actions/user";
import List from "../components/List";

const handleLocalAction = (dispatch, action) => {
    const {type} = action;
    switch (type) {
        case localActions.GET_USER_DETAILS:
            return dispatch(getUserDetails());
        default:
            return;
    }
};

export const localActions = {
    GET_USER_DETAILS: 'GET_USER_DETAILS',
};

const mapStateToProps = (state) => {

    const {userDetails} = state.userReducer;

    return {
        localActions,
        userDetails
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLocalAction: actionType => handleLocalAction(dispatch, actionType)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);