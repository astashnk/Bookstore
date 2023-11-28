// import { IPostsState, IPostInfo, IMyPost } from "../../types"
import { IBook, IBooksState, ISelectedBook} from "../../types"
import { SET_BOOKS, SET_SELECTED_BOOK, SET_SEARCH, SET_SEARCHED_BOOK, SET_PAGE, COUNT_PAGES, ADD_TO_FAV } from "../action-types"

const initialState = {
   newBooks: [] as IBook[],
   searchedBooks: [] as IBook[],
   selectedBook: null,
   search: '',
   currentPage: 1,
   totalPages: 10,
   favBooks: [] as ISelectedBook[]
}

const getInitialState = () => {
   const cacheState = localStorage.getItem("prevState")
   if (cacheState) {
      const jsState = JSON.parse(cacheState)
      return jsState.books
   }
   return initialState
}

const booksReducer = (state:IBooksState = getInitialState(), action: any) => {
   switch(action.type) {
      case SET_BOOKS: {
         return ({
            ...state,
            newBooks: action.books
         })
      }
      case SET_SELECTED_BOOK: {
         console.log(action.book)
         return ({
            ...state,
            selectedBook: action.book
         })
      }
      case SET_SEARCHED_BOOK:{
         console.log(action.sBooks)
         return({
            ...state,
            searchedBooks: action.sBooks
         })
      }
      case SET_SEARCH: {
         return({
            ...state,
            search: action.search
         })
      }
      case SET_PAGE: {
         return({
            ...state,
            currentPage: action.page
         })
      }
      case COUNT_PAGES:{
         return({
            ...state,
            totalPages: action.num
         })
      }
      case ADD_TO_FAV:{
         return({
            ...state,
            favBooks: action.fBook
         })
      }
      default: {
         return state;
      }
   }
}

export { booksReducer }