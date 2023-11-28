import { IUserState } from "../../types";
import { SET_USER } from "../action-types/user-action-types";

const initialState = {
   user: null,
}

const getInitialState = () => {
   const cacheState = localStorage.getItem("prevState")
   if (cacheState) {
      const jsState = JSON.parse(cacheState)
      return jsState.user
   }
   return initialState
}

const userReducer = (state:IUserState = getInitialState(), action: any) => {
   console.log(state)
   switch(action.type) {
      case SET_USER: {
         return ({
               ...state,
               user: action.user
         })
      }
      default: {
         return state;
      }
   }
}

export { userReducer }