import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IBookInfo, IStoreState } from '../../types';
import { loadBooks, loadBook, loadSearchedBooks, addToFav, setTab } from '../../redux/action-creators';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Pagination } from '../Pagination';
import { Subscribe } from '../Subscribe';
import { ToHomePage } from '../ToHomePage';
import { Tabs } from '../Tabs';

const NewReleases = (props: IBookInfo) => {
   const theme = useSelector((state: IStoreState) => state.ui.theme)
   const {info} = props;
   const {title, subtitle, price, image, isbn13} = info
   return (
      <div className="book-card" style={{width:"300px", marginBottom:"40px", boxSizing:"border-box", padding:"15px 15px 50px 15px",boxShadow:"0px 0px 29px -14px rgba(0, 0, 0, 0.4)", position:"relative"}}>
         <Link to={`/books/${isbn13}`} style={{textDecoration:"none"}}>
            <div style={{textAlign:"center", boxSizing:"border-box"}}>
               <img style={{width:"90%", boxShadow:"0px 0px 29px -14px rgba(0, 0, 0, 0.4)"}} src={image}></img>
            </div>
            <div className={theme} style={{fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"18px", margin:"10px 0", padding:"0 5px"}}>{title.toUpperCase()}</div>
            <div style={{padding:"0 5px", fontFamily:"'Roboto Condensed', sans-serif", color:"#7d7d7d"}}>{subtitle}</div>
            <div className={theme} style={{position:"absolute", bottom:"20px", fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"17px", padding:"0 5px"}}>{price}</div>
         </Link>
      </div>
   )
}

const NewReleasesBooks = () =>{
   const books = useSelector((state: IStoreState) => state.books.newBooks)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(loadBooks(books))
   }, []);
   return (
      <>
      <Header/>
      <div style={{maxWidth:"1020px", margin:"0 auto", padding:"0px 10px"}}>
         <h2 className='main-header' style={{paddingTop:"90px"}}>NEW BOOK RELEASES</h2>
         <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {books ? books.map((el)=> <NewReleases info={el}/>) : <>No books here:(</>}
         </div>
         <Subscribe/>
      </div>
      <Footer/>
      </>
   )
}

const SelectedBook = () => {
   const theme = useSelector((state: IStoreState) => state.ui.theme)
   const selectedBook = useSelector ((state: IStoreState)=> state.books.selectedBook)
   const favBooks = useSelector ((state: IStoreState)=> state.books.favBooks)
   const books = useSelector((state: IStoreState) => state.books.newBooks)
   const tab = useSelector((state: IStoreState) => state.ui.activeTab)
   const {isbn13} = useParams()
   const dispatch = useDispatch()
   console.log(selectedBook)
   const handleClick = () => {
      return !favBooks.includes(selectedBook) ? favBooks.push(selectedBook) : favBooks,
      dispatch(addToFav(favBooks));}
   console.log(favBooks)
   useEffect(()=>{
      dispatch(loadBook(Number(isbn13)))
      dispatch(setTab(1))
      window.scrollTo(0, 0)
   }, [isbn13])

   const urlBook = selectedBook?.pdf;
   const bookKey = urlBook? Object.keys(urlBook)[0] : '';
   const pdfBook = urlBook?.[`${bookKey}`]
   console.log(pdfBook)

   let randomBooks = [];
   for (let i = 0; i < 3; i++) {
   let randomIndex = Math.floor(Math.random() * books.length);
   randomBooks.push(books[randomIndex]);
   }
   console.log(randomBooks);
   
   return (
      <>
      <Header/>
      <div style={{maxWidth:"1020px", margin:"0 auto", padding:"0px 10px", paddingTop:"100px"}}>
         <ToHomePage/>
         <div className='main-header' style={{paddingBottom:"10px"}}>{selectedBook?.title.toUpperCase()}</div>
         <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {/* left block */}
            <div style={{textAlign:"center", minWidth:"290px", width:"45%", position:"relative"}}>
               <img style={{width:"96%", boxShadow:"0px 0px 29px -14px rgba(0, 0, 0, 0.4)"}} src={selectedBook?.image}></img>
               <button onClick={handleClick} style={{position:"absolute", top:"10px", right:"10px", border:"none", background:"none"}}><span className={`material-symbols-outlined ${theme}`}>favorite</span></button>
            </div>
            {/* right block */}
            <div style={{borderTop:"1px solid #7d7d7d", minWidth:"290px", width:"45%", fontFamily:"'Roboto Condensed', sans-serif", textAlign:"center"}}>
               <div style={{display:"flex", justifyContent:"space-between", padding:"20px 0px 10px"}}>
                  <div style={{fontFamily:"'Oswald', sans-serif", fontWeight:"500", fontSize:"28px"}}>{selectedBook?.price}</div>
                  <div style={{fontSize:"18px", fontWeight:"600", display:"flex", alignItems:"end"}}>
                     {selectedBook?.rating}
                     <span className={`material-symbols-outlined ${theme}`}>grade</span>
                  </div>
               </div>
               <div style={{display:"flex", justifyContent:"space-between", fontSize:"16px", marginTop:"6px"}}>
                  <div style={{color:"#7d7d7d"}}>Authors</div>
                  <div style={{fontWeight:"600"}}>{selectedBook?.authors}</div>
               </div>
               <div style={{display:"flex", justifyContent:"space-between", fontSize:"16px", marginTop:"6px"}}>
                  <div style={{color:"#7d7d7d"}}>Publisher</div>
                  <div style={{fontWeight:"600"}}>{selectedBook?.publisher}, {selectedBook?.year}</div>
               </div>
               <div style={{display:"flex", justifyContent:"space-between", fontSize:"16px", marginTop:"6px"}}>
                  <div style={{color:"#7d7d7d"}}>Language</div>
                  <div style={{fontWeight:"600"}}>{selectedBook?.language}</div>
               </div>
               <div style={{display:"flex", justifyContent:"space-between", fontSize:"16px", marginTop:"6px"}}>
                  <div style={{color:"#7d7d7d"}}>Pages</div>
                  <div style={{fontWeight:"600"}}>{selectedBook?.pages}</div>
               </div>
               <div style={{fontSize:"16px", marginTop:"10px"}}>
                  {pdfBook? <Link className={`${theme}`} to={pdfBook} style={{textDecoration:"none"}}>{bookKey}</Link> : <div></div>}
               </div>
               <button style={{boxSizing:"border-box", height:"34px", width:"100%", fontFamily:"'Oswald', sans-serif", fontWeight:"400", fontSize:"16px", backgroundColor:"black", border: "2px solid white", borderRadius:"5px", color:"white", margin:"20px 0"}}>ADD TO CART</button>
            </div>
         </div>
         <Tabs/>
         <div style={{fontFamily:"'Roboto Condensed', sans-serif", marginBottom:"36px"}}>
            {tab == 1 ? <div>{selectedBook?.desc}</div> : <></>}
            {tab == 2 ? <div>This book was written in {selectedBook?.year} by {selectedBook?.authors}.</div> : <></>}
            {tab == 3 ? <div>No information here.</div> : <></>}
         </div>
         <Subscribe/>
         <div className='main-header' style={{paddingBottom:"10px", fontSize:"24px"}}>SIMILAR BOOKS</div>
         <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {randomBooks ? randomBooks.map((el)=> <NewReleases info={el}/>) : <>No books here:(</>}
         </div>
      </div>
      <Footer/>
      </>
   )
}

const SearchResults = () => {
   const dispatch = useDispatch();
   const search = useSelector ((state: IStoreState)=> state.books.search)
   const sBooks = useSelector ((state: IStoreState)=> state.books.searchedBooks)
   const page = useSelector ((state: IStoreState)=> state.books.currentPage)
   useEffect(() => {
      dispatch(loadSearchedBooks({sBooks, search, page}))
   }, [search, page]);
   console.log(sBooks)
   return ((
      <>
      <Header/>
      <div style={{maxWidth:"1020px", margin:"0 auto", padding:"100px 10px 0px"}}>
      <ToHomePage/>
         <h2 className='main-header' style={{paddingBottom:"10px"}}>SEARCH RESULTS "{search.toUpperCase()}"</h2>
         <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
         {sBooks.length!==0 ? sBooks.map((el)=> <NewReleases info={el}/>) : <div style={{margin:"auto", fontSize:"15px", fontFamily:"'Roboto Condensed', sans-serif", padding:"100px 0px", textAlign:"center"}}>Unfortunately, there are no such books in our store.<br></br> You can try to find them again or look for others according to your taste.</div>}
         </div>
         <Pagination/>
         <Subscribe/>
      </div>
      <Footer/>
      </>
   ))
}
export {NewReleases, NewReleasesBooks, SelectedBook, SearchResults}