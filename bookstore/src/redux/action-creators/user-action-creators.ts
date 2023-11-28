import { IRegistrationActivation, ISignUp, ISignIn, ITokensResponse, IUserInfo, IUserInfoResponse } from "../../types";
import { ACTIVATION_REGISTRATION, SIGN_UP, SIGN_IN, GET_USER_INFO, SET_USER } from "../action-types/user-action-types";
import { takeEvery, put } from 'redux-saga/effects';
import { getToken } from "../../utils";

const activationRegistration = (activationInfo: IRegistrationActivation) => ({
   type: ACTIVATION_REGISTRATION,
   activationInfo,
})

const signUp = (signUpInfo: ISignUp) => ({
   type: SIGN_UP,
   signUpInfo
})

const signIn = (signInInfo: ISignIn) => ({
   type: SIGN_IN,
   signInInfo
})

const getUserInfo = () => ({
   type: GET_USER_INFO,
})

const setUser = (user: IUserInfo) => ({
   type: SET_USER,
   user,
})

function* fetchActivationRegistration(action: any) {
   const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
      method:'POST',
      body: JSON.stringify(action.activationInfo),
      headers:{
         'Content-Type':'application/json'
      }
   })
   console.log(response)
}

function* fetchSignUp(action:any){
   const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
      method:'POST',
      body: JSON.stringify(action.signUpInfo),
      headers:{
         'Content-Type':'application/json'
      }
   })
}

function* fetchSignIn(action:any){
   const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
      method:'POST',
      body: JSON.stringify(action.signInInfo),
      headers:{
         'Content-Type':'application/json'
      }
   })
   if (response.status === 200) {
   const data: ITokensResponse = yield response.json();
   const { access, refresh } = data;
   localStorage.setItem("access", access)
   localStorage.setItem("refresh", refresh)
   yield put(getUserInfo())
   }
}

function* fetchUserInfo() {
   const token: string = yield getToken();
   const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
      headers: {
         "Authorization": `Bearer ${token}`
      },
   });
   const data: IUserInfo = yield response.json();
   console.log(data)
   yield put(setUser(data))
   window.location.pathname = "/books"
}

function* watcherUser() {
   yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
   yield takeEvery(SIGN_UP, fetchSignUp)
   yield takeEvery(SIGN_IN, fetchSignIn)
   yield takeEvery(GET_USER_INFO, fetchUserInfo)
}

export {
   activationRegistration,
   watcherUser,
   signUp,
   signIn,
}