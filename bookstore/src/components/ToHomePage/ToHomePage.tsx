import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { IStoreState } from "../../types"

const ToHomePage = () => {
   const theme = useSelector((state: IStoreState) => state.ui.theme)
   return(
      <div style={{paddingLeft:"20px", paddingBottom:"14px"}}>
         <Link to='/books' style={{textDecoration:"none", display:"flex", alignItems:"center", borderBottom:"1px solid #7d7d7d", maxWidth:"110px"}}>
            <span className={`material-symbols-outlined ${theme}`}>chevron_left</span>
            <span  className={theme} style={{fontFamily:"'Roboto Condensed', sans-serif"}}>Home page</span>
         </Link>
      </div>
   )
}

export {ToHomePage}