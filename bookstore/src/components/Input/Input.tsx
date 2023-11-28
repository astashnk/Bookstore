import { IInput } from "../../types";
import './style.css';

const Input = (props: IInput) => {
const { name, type, isActive = true, title, placeholder, value, className, callback } = props;
return (
   <div className='container-input'>
      <label className='labelInput'>
      {title}
      <input
         className = { className }
         name = {name}
         type = {type}
         disabled = {!isActive}
         placeholder = {placeholder}
         value = {value}
         onChange = { callback }
      />
      {name === 'error' && <p className="error-text" style={{color:'red', margin: '0'}}>Error message</p>}
      </label>
   </div>
)
}

export { Input }