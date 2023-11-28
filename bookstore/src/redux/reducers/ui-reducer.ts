import { IUiState, Themes } from "../../types"
import { SET_THEME, SET_TAB } from "../action-types";

const initialState = {
   theme: Themes.LIGHT,
   activeTab: 1,
}

const getInitialState = () => {
   const cacheState = localStorage.getItem("prevState")
   if (cacheState) {
      const jsState = JSON.parse(cacheState)
      return jsState.ui
   }
   return initialState
}

const uiReducer = (state: IUiState = getInitialState(), action: any) => {
   switch(action.type) {
      case SET_THEME: {
         return ({
            ...state,
            theme: action.theme
         })
      }
      case SET_TAB: {
         return({
            ...state,
            activeTab: action.id
         })
      }
      default: {
         return state;
      }
   }
}

export {
   uiReducer,
}