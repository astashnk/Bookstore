import { Themes } from "../../types";
import { SET_THEME, SET_TAB} from "../action-types";

const setTheme = (theme: Themes) => ({
   type: SET_THEME,
   theme,
})

const setTab = (id: number) =>({
   type: SET_TAB,
   id
})

export {
   setTheme,
   setTab 
}