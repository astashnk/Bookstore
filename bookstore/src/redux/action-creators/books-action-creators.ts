import { LOAD_BOOKS, SET_BOOKS, LOAD_BOOK, SET_SELECTED_BOOK, SET_SEARCH, SET_PAGE, COUNT_PAGES, LOAD_SEARCHED_BOOKS, SET_SEARCHED_BOOK, ADD_TO_FAV } from "../action-types"
import { takeEvery, put } from 'redux-saga/effects';
import { IBook, IBookResp, ISearchedBookResp, ISelectedBook } from "../../types";

const setBooks = (books: IBook[]) => ({
   type: SET_BOOKS,
   books
})

const loadBooks = (searchInfo: any) => ({
   type: LOAD_BOOKS,
   searchInfo
})

const setSelectedBook = (book: ISelectedBook) => ({
   type: SET_SELECTED_BOOK,
   book,
})

const loadBook = (isbn13: number) => ({
   type: LOAD_BOOK,
   isbn13,
})

const loadSearchedBooks = (info:any) => ({
   type: LOAD_SEARCHED_BOOKS,
   info
})

const setSearchedBooks = (sBooks: IBook[]) => ({
   type: SET_SEARCHED_BOOK,
   sBooks,
})

const setSearch = (search: string) => ({
   type: SET_SEARCH,
   search,
})

const setPage = (page: number) =>({
   type: SET_PAGE,
   page
})

const countPages = (num: number) =>({
   type: COUNT_PAGES,
   num
})

const addToFav = (fBook: ISelectedBook | ISelectedBook[]) =>({
   type: ADD_TO_FAV,
   fBook
})


function* fetchBooks(action: any) {
   const resp: Response = yield fetch(`https://api.itbook.store/1.0/new`)
   console.log(resp)
   const data: IBookResp = yield resp.json();
   yield put(setBooks(data.books))
}

function* fetchLoadBook(action: any) {
   const response: Response = yield fetch(`https://api.itbook.store/1.0/books/${action.isbn13}`)
   console.log(response)
   const book: ISelectedBook = yield response.json();
   console.log(book)
   yield put(setSelectedBook(book))
}

function* fetchSearchedBooks(action: any) {
   const {info} = action;
   console.log(action)
   const resp: Response = yield fetch(`https://api.itbook.store/1.0/search/${info.search}/${info.page}`)
   console.log(resp)
   const data: ISearchedBookResp = yield resp.json();
   yield put(setSearchedBooks(data.books))
   let maxPage = Math.ceil(data.total/10);
   yield put(countPages(maxPage))
   console.log(data.books)
}

function* watcherBooks() {
   yield takeEvery(LOAD_BOOKS, fetchBooks)
   yield takeEvery(LOAD_BOOK, fetchLoadBook)
   yield takeEvery(LOAD_SEARCHED_BOOKS, fetchSearchedBooks)
}

export {loadBooks, watcherBooks, loadBook, loadSearchedBooks, setSearch, setPage, addToFav}