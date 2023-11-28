import { Button } from '../Button';
import { ButtonTypes } from '../../types';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/action-creators/user-action-creators';
import {useState} from 'react';

// const handleConfirmed = () =>{
//    const dispatch = useDispatch()
//    dispatch(signUp({
//       username: userName,
//       email,
//       password
//    }))
// }

const SignUp = () => {
   const [emailError, setEmailError] = useState(""); 
   const [passwordError, setPasswordError] = useState(""); 
   const [userNameError, setUserNameError] = useState(""); 

   const [userName, setUserName] = useState(""); 
   const [password, setPassword] = useState(""); 
   const [confirmPassword, setConfirmPassword] = useState(""); 
   const [email, setEmail] = useState(""); 

   const MAX_EMAIL_LENGTH = 30; 
   const MAX_PASSWORD_LENGTH = 40; 
   const MAX_NAME_LENGTH = 20; 

   const dispatch = useDispatch() 

const handleEmailChange = (ev: any) => { 
   if (ev.target.value.length > MAX_EMAIL_LENGTH) { 
      setEmailError( 
      `Email length should be less the ${MAX_EMAIL_LENGTH} characters.`
      ); 
   } else { 
      setEmailError(""); 
      setEmail(ev.target.value); 
   } 
}; 

const handleUserNameChange = (ev: any) => { 
   if (ev.target.value.length > MAX_NAME_LENGTH) { 
      setUserNameError( 
      `Name length should be less the ${MAX_NAME_LENGTH} characters.` 
      ); 
   } else { 
      setUserNameError(""); 
      setUserName(ev.target.value); 
   } 
}; 

const handlePassworddChange = (ev: any) => { 
   if (ev.target.value.length > MAX_PASSWORD_LENGTH) { 
      setPasswordError( 
      `Password length should be less the ${MAX_PASSWORD_LENGTH} characters.` 
      ); 
   } else { 
      setPasswordError(""); 
      setPassword(ev.target.value); 
   } 
}; 

const handleConfirmed = () => {  
   dispatch(signUp({ 
      username: userName, 
      password, 
      email, 
   })) 
}; 

   return (
      <div style={{height:"100vh", width:"100vw", fontFamily:"'Oswald', sans-serif", fontWeight:"600"}}>
         <div style={{maxWidth:"600px", position:"relative", top:"calc(50% - 270px)", left:"calc(50% - 600px/2)"}}>
         <Input
            className='input default'
            type='text'
            title='Name'
            callback={handleUserNameChange}
            placeholder='Your name'
         />
         <Input
            className='input default'
            type='email'
            title='Email'
            callback={handleEmailChange}
            placeholder='Your email'
         />
         <Input
            className='input default'
            type='password'
            title='Password'
            callback={handlePassworddChange}
            placeholder='Your password'
         />
         <Input
            className='input default'
            type='password'
            title='Confirm password'
            callback={(ev: any) => setConfirmPassword(ev.target.value)}
            placeholder='Confirm password'
         />

         <Button
            className = 'button prm1'
            content = 'Sign Up'
            type = { ButtonTypes.Primary }
            callback = {handleConfirmed }
         />

         <p style={{color: '#7d7d7d', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', textAlign: "center", margin:"0"}}>Already have an account?&nbsp;
         <Link to="/signin"><a><p style={{display:"inline-block", color:"#7d7d7d", fontWeight:"600"}}>Sign In</p></a></Link></p>
         </div>
      </div>
   )
}

export {SignUp}