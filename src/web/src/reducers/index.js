import { combineReducers } from "redux";

import {loginData} from "../reducers/signIn-reducers"

import {signupData} from "../reducers/signUp-reducers"

import {userData} from "../reducers/listUser-reducers"

import {chatData} from "../reducers/listChat-reducers"

export default combineReducers({
    loginData,

    signupData,

    userData,
    
    chatData,
});