import { IButton, Themes } from "../../types";
import { useState, useContext} from 'react';
// import { ThemeContext } from "../../contexts";
import "./style.css"

const Button = (props: IButton) => {
   // const {theme} = useContext (ThemeContext)

   const { content, isActive = true, type, className, style, callback } = props;
   const [backgroundColor, setColor] = useState('rgb(24, 24, 149)');
   const handleClick = () => {
      callback && callback()
      setColor(backgroundColor === 'red'? 'rgb(24, 24, 149)' : 'red')
   }
   return (
      <button 
         className = { className
            // +` ${theme===Themes.DARK? '_DARK' : '_LIGHT'}` 
         }
         disabled = { !isActive }
         style = { style }
         onClick = { handleClick }> 
         { content }
      </button>
   )
};

export { Button };