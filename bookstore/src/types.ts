interface IBook {
   "title": string
   "subtitle": string
   "isbn13": number
   "price": string
   "image": string
   "url": string
}

interface IPdf {
   [key: string]: string
};

interface ISelectedBook {
   "error": number,
   "title": string,
   "subtitle": string,
   "authors": string,
   "publisher": string,
   "language"?: string,
   "isbn10": number,
   "isbn13": number,
   "pages": number,
   "year": number,
   "rating": number,
   "desc": string,
   "price": string,
   "image": string,
   "url": string,
   "pdf"?: IPdf
}

interface IBookResp {
   total: number,
   books: IBook[]
}

interface IBooksState {
   newBooks: IBook[];
   selectedBook: ISelectedBook,
   search: string,
   searchedBooks: IBook[],
   currentPage: number,
   totalPages: number,
   favBooks: ISelectedBook[]
}

interface ISearchedBookResp {
   "error": number
   "total": number
   "page": number
   "books": IBook[]
}

interface ITab{
   content: string,
   isActive?: boolean,
   style?:IStyle,
   id: number
}

enum Themes {
   DARK = "DARK",
   LIGHT = "LIGHT"
}

interface IStyle {
   [key: string]: string | number
};

interface IUiState {
   theme: Themes,
   activeTab: number
}

interface ISignUp{
   username: string,
   email: string,
   password: string
}

interface ISignIn{
   email: string,
   password: string
}

interface ITokensResponse{
   refresh: string,
   access: string
}

interface IUserState {
   user: IUserInfo | null,
}

interface IUserInfo {
   username: string,
   id: number,
   email: string,
}

interface IUserInfoResponse {
   username: string
}

interface IRegistrationActivation{
   uid: string,
   token: string
}

interface IStoreState {
   books: IBooksState,
   ui: IUiState,
   user: IUserState,
}

interface IBookInfo {
   info: IBook
}

enum ButtonTypes {
   Primary = 'Primary',
   Secondary = 'Secondary',
   Secondary2 = 'Secondary2',
};

interface IInput {
   className: string;
   name?: string;
   type: string;
   nameInput?: string;
   isActive?: boolean;
   title: string;
   placeholder?: string;
   value?: string;
   required?: boolean;
   style?: IStyle; 
   callback?: (event: any) => void;
   // onBlur?: (event: any) => void;
   onChange?: (event: any) => void;
}

interface IButton {
   content: string;
   isActive?: boolean;
   type?: ButtonTypes;
   className: string;
   style?: IStyle; 
   onClick?: () => void;
   callback?: ()=> void
}

export {
   type IBook,
   type IBookResp,
   type IBookInfo,
   type IStoreState, 
   type IBooksState, 
   type ISelectedBook,
   type ISearchedBookResp,
   Themes,
   type IUiState, 
   type ITab, 
   type IUserInfoResponse,
   type IUserState,
   type IRegistrationActivation,
   type ISignIn,
   type ISignUp,
   type ITokensResponse,
   type IUserInfo,
   ButtonTypes,
   type IInput,
   type IButton


}