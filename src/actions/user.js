import {LOGIN_USER, GET_USER_DETAILS} from './types'
import axios from "axios";
import {BASE_URL} from '../helper/APIConsts'

export const loginUser = (data) => {
    return (dispatch, getState) => {
        return axios.post(`http://localhost:4555/login`, data)
            .then((res) => {
                debugger;
                if (res.status && res.status === 200) {
                    dispatch({
                        type: LOGIN_USER,
                        payload: res.data,
                    });

                    return Promise.resolve({
                        status: res.status,
                        message: res.data.msg
                    });
                } else {
                    return Promise.reject({
                        status: res.status || 422,
                        message: res.data.msg || ''
                    });
                }
            }).catch((err) => {
            if (err.response && err.response.data && err.response.data.msg) {
                // alert(err.response.data.msg);
                return Promise.reject({
                    message:  err.response.data.msg
                });
            } else {
                alert('Something went wrong : ' + err)
            }
        })
    }
};

export const signUpUser = (data) => {
    return (dispatch, getState) => {
        return axios.post(`http://localhost:4555/user`, data)
            .then((res) => {
                debugger;
                if (res.status && res.status === 200) {
                    return Promise.resolve({
                        status: res.status,
                        message: res.data.msg || 'Sign Up Successful !'
                    });
                } else {
                    return Promise.reject({
                        status: res.status || 422,
                        message: res.data.msg || ''
                    });
                }
            }).catch((err) => {
            if (err.response && err.response.data && err.response.data.msg) {
                // alert(err.response.data.msg);
                return Promise.reject({
                    message:  err.response.data.msg
                });
            } else {
                alert('Something went wrong : ' + err)
            }
        })
    }
};

export const getUserDetails = () => {
    return (dispatch, getState) => {
        console.log(BASE_URL + 'users');
        return axios.get(BASE_URL+'users')
            .then((res) => {
                if (res.status && res.status === 200) {
                    dispatch({
                        type: GET_USER_DETAILS,
                        payload: res.data,
                    });
                } else {
                    return Promise.reject({
                        status: res.status || 422,
                        message: res.data.msg || ''
                    });
                }
            }).catch((err) => {
            if (err.response && err.response.data && err.response.data.msg) {
                alert(err.response.data.msg);
            } else {
                alert('Something went wrong : ' + err)
            }
        })
    }
};