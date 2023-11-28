import { IStoreState } from "../../types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/action-creators";

const Pagination = () => {
   const count = useSelector((state: IStoreState) => state.books.currentPage)
   const pages = useSelector((state: IStoreState) => state.books.totalPages)
   console.log(pages)
   const dispatch = useDispatch()
   const handleClickP = () => {
      dispatch(setPage(count+1))
      console.log(count+1)
      window.scrollTo(0, 0)
   }
   const handleClickM = () => {
      dispatch(setPage(count-1))
      console.log(count-1)
      window.scrollTo(0, 0)
   }
   return (
      <div style={{display:"flex", maxWidth:"400px", justifyContent:"space-between", height:"25px", margin:"0 auto", marginTop:"14px", marginBottom:"10px"}}>
         <button style={{height:"23.2px", margin:"0px", padding:"0px", width:"90px", backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px"}} disabled={count===1 ? true : false} onClick={handleClickM}>←</button>
         <p style={{margin:"auto", fontSize:"15px", fontFamily:"'Roboto Condensed', sans-serif"}}>Page {count} of { pages}</p>
         <button style={{height:"23.2px", margin:"0px", padding:"0px", width:"90px", backgroundColor:"#F3F3F3", border: "2px solid #7d7d7d", borderRadius:"5px"}} disabled={count===pages || pages==0 ? true : false} onClick={handleClickP}>→</button>
      </div>
   )
}

export { Pagination }