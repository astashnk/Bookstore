import { NewReleases } from "../NewReleases"
import { Header } from "../Header"
import { Subscribe } from "../Subscribe"
import { Footer } from "../Footer"
import { useDispatch, useSelector } from "react-redux"
import { IStoreState } from "../../types"
import { ToHomePage } from "../ToHomePage"
import { useEffect } from "react"
import { addToFav } from "../../redux/action-creators"

const Favorites = () => {
   const favBooks = useSelector ((state: IStoreState)=> state.books.favBooks)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(addToFav(favBooks))
   }, [favBooks]);
   return(
      <>
      <Header/>
      <div style={{maxWidth:"1020px", margin:"0 auto", padding:"100px 10px 0px"}}>
      <ToHomePage/>
         <h2 className='main-header' style={{paddingBottom:"10px"}}>FAVORITE BOOKS</h2>
         <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {favBooks.length!=0 ? favBooks.map((el)=> <NewReleases info={el}/>) : <div style={{margin:"auto", fontSize:"15px", fontFamily:"'Roboto Condensed', sans-serif", padding:"105px 0px", textAlign:"center"}}>No books here:(</div>}
         </div>
         <Subscribe/>
      </div>
      <Footer/>
      </>
   )
}

export {Favorites}