import { useState } from "react"
import { setPage, setSearch as setSearchRedux, setTheme} from "../../redux/action-creators"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Themes } from "../../types"

const Header = () => {
   const [search, setSearch] = useState('')
   const dispatch = useDispatch()
   const handleClick = () => {
      dispatch(setSearchRedux(search))
      dispatch(setPage(1))
   }
   const [state, setMode] = useState(true)
   const onChange = (theme: Themes) => {
      dispatch(setTheme(theme))
      setMode(!state)
   }
   const locateToFav = () => {
      window.location.pathname = "/books/favorites"
   }
   return (
      <div className="color" style={{zIndex:"100", boxShadow:"0px 0px 8px 0px rgba(0, 0, 0, 0.2)", position: "fixed", width:"100%", minHeight:"50px", boxSizing:"border-box", padding:"5px 10px"}}>
         <div style={{margin:"0 auto", height:"100%", maxWidth:"1020px", display:"flex", justifyContent:"space-between", flexWrap:"wrap", alignItems:"center"}}>
            <div style={{fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"24px", color:"black"}}>THE BOOKSHELF</div>
            <div style={{display:"flex", alignItems:"flex-start"}}>
               <input value={search} onChange={(e)=> setSearch(e.target.value)} style={{height:"18px", width:"170px", backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px"}}></input>
               <button style={{margin:"0px", padding:"0px", height:"23.2px", width:"23.2px", backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px"}} onClick={handleClick}>
                  {search === '' ? 
                  <span className="material-symbols-outlined" style={{fontSize:"18px"}}>search</span>
                  :  
                  <Link to={`/books/search/${search}`} style={{textDecoration:"none", color:"#7d7d7d"}} >
                     <span className="material-symbols-outlined" style={{fontSize:"18px"}}>search</span>
                  </Link>}
               </button>
            </div>
            <div style={{width:"140px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
               <div>
               {state ?
                  <button style={{backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px", fontFamily:"'Roboto Condensed', sans-serif", fontWeight:"600"}} onClick={() => onChange(Themes.DARK)}>MODE</button>
                  :
                  <button style={{backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px", fontFamily:"'Roboto Condensed', sans-serif", fontWeight:"600"}} onClick={() => onChange(Themes.LIGHT)}>MODE</button>
               }
               </div>
               <button onClick={locateToFav} style={{border:"none", background:"none", padding:"0", display:"flex", alignItems:"center"}}><span className="material-symbols-outlined">favorite</span></button>
               <span className="material-symbols-outlined">shopping_bag</span>
               <span className="material-symbols-outlined">person</span>
            </div>
         </div>
      </div>
   )
}

export {Header}