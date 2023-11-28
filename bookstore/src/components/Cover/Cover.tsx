import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"

const Cover = () => {
   const theme = useSelector((state: IStoreState) => state.ui.theme)
   const user = useSelector((state: IStoreState) => state.user.user)
   return(
      <Link to="/books" style={{textDecoration:"none", color:"black"}}>
         <div style={{height:"100vh", width:"100vw", fontFamily:"'Oswald', sans-serif", fontWeight:"600"}}>
            <div className={theme} style={{fontSize:"56px", position:"absolute", top:"calc(50% - 50px)", left:"calc(50% - 314px/2)"}}>The Bookshelf</div>
         </div>
      </Link>
   )
}

export {Cover}
