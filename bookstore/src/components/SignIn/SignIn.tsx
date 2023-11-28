import { Button } from '../Button';
import { ButtonTypes } from '../../types';
import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/action-creators/user-action-creators';
import {useState} from 'react';

const SignIn = () => {

   const [emailError, setEmailError] = useState(""); 
   const [passwordError, setPasswordError] = useState(""); 
   // const [userNameError, setUserNameError] = useState(""); 

   // const [userName, setUserName] = useState(""); 
   const [password, setPassword] = useState(""); 
   // const [confirmPassword, setConfirmPassword] = useState(""); 
   const [email, setEmail] = useState(""); 

   const MAX_EMAIL_LENGTH = 30; 
   const MAX_PASSWORD_LENGTH = 40; 
   const MAX_NAME_LENGTH = 20; 
   
   const handlePasswordChange = (ev: any) => { 
      if (ev.target.value.length > MAX_PASSWORD_LENGTH) { 
         setPasswordError( 
         `Password length should be less the ${MAX_PASSWORD_LENGTH} characters.` 
         ); 
      } else { 
         setPasswordError(""); 
         setPassword(ev.target.value); 
      } 
   }; 

   const handleEmaleChange = (ev: any) => { 
      if (ev.target.value.length > MAX_EMAIL_LENGTH) { 
         setEmailError( 
         `Email length should be less the ${MAX_EMAIL_LENGTH} characters.`
         ); 
      } else { 
         setEmailError(""); 
         setEmail(ev.target.value); 
      } 
   }; 


   const dispatch = useDispatch() 
   const handleSignIn = () => {  
      dispatch(signIn({ 
         password, 
         email, 
      })) 
   }; 

   return (
      <div style={{height:"100vh", width:"100vw", fontFamily:"'Oswald', sans-serif", fontWeight:"600"}}>
         <div style={{maxWidth:"600px", position:"relative", top:"calc(50% - 200px)", left:"calc(50% - 600px/2)"}}>
            <Input
               className='input default'
               type='email'
               title='Email'
               callback={handleEmaleChange}
               placeholder='Your email'
            />
            <Input
               className='input default'
               type='password'
               title='Password'
               callback={handlePasswordChange}
               placeholder='Your password'
            />
               <Button
                  className = 'button prm1'
                  content = 'Sign In'
                  type = { ButtonTypes.Primary }
                  callback = {handleSignIn }
               />
            <p style={{color: '#7d7d7d', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', textAlign: "center", margin:"0"}}>Don't have an account?&nbsp;
            <Link to="/signup"><a><p style={{display:"inline-block", color:"#7d7d7d", fontWeight:"600"}}>Sign Up</p></a></Link></p>
         </div>
      </div>
   )
}

export {SignIn}