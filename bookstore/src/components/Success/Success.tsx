import { Button } from '../Button';
import { ButtonTypes } from '../../types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { activationRegistration } from '../../redux/action-creators/user-action-creators';

const Success = () => {
   const {uid = '', token = ''} = useParams();
   const dispatch = useDispatch()
   useEffect(()=> {
      dispatch(activationRegistration({uid, token}))
   }, [uid, token])
   return(
      <div style={{height:"100vh", width:"100vw", fontFamily:"'Oswald', sans-serif", fontWeight:"600"}}>
         <div style={{maxWidth:"600px", position:"relative", top:"calc(50% - 200px)", left:"calc(50% - 600px/2)"}}>
            <p style={{fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', margin:"0"}}>
               Email confirmed. <br/>
               Your registration is now completed.
            </p>
            <Link to="/">
               <Button
                  className = 'button prm1'
                  content = 'Go to home'
                  type = { ButtonTypes.Primary }
                  callback = { () => console.log('0') }
               />
            </Link>
            <p style={{color: '#7d7d7d', fontSize: '16px', fontStyle: 'normal', fontWeight: '400', lineHeight: '24px', textAlign: "center", margin:"0"}}>Don't have an account?&nbsp;
            <Link to="/signup"><a><p style={{display:"inline-block", color:"#7d7d7d", fontWeight:"600"}}>Sign Up</p></a></Link></p>
         </div>
      </div>
   )
}

export {Success}