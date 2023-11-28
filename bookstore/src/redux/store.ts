import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watcherBooks } from './action-creators';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { uiReducer, booksReducer, userReducer } from './reducers';
import { watcherUser } from './action-creators/user-action-creators';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
   yield all([
      watcherBooks(),
      watcherUser()
   ])
}
const store = createStore(combineReducers({
   ui: uiReducer,
   books: booksReducer,
   user: userReducer,
}), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const handleTrack = () => {
   const state = store.getState();
   localStorage.setItem("prevState", JSON.stringify(state))
   console.log(state);
}

store.subscribe(handleTrack)

export {store}