import { Button } from '../Button';
import { ButtonTypes } from '../../types';
import { Link } from 'react-router-dom';

const RegConfirmation = () => {
   return(
      <div style={{height:"100vh", width:"100vw", fontFamily:"'Oswald', sans-serif", fontWeight:"600"}}>
         <div style={{maxWidth:"600px", position:"relative", top:"calc(50% - 100px)", left:"calc(50% - 600px/2)"}}>
            <p style={{fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', margin:"0"}}>
               Please, activate your account with the activation <br/>
               link in the email <p style={{display:"inline-block", fontWeight:"600", margin:"0"}}>example@gmail.com.</p> <br/>
               Please, check your email.
            </p>
            <Link to="/posts" style={{textDecoration:"none"}}>
               <Button
                  className = 'button prm1'
                  content = 'Go to home'
                  type = { ButtonTypes.Primary }
                  callback = { () => console.log('0') }
               />
            </Link>
         </div>
      </div>
   )
}

export {RegConfirmation}