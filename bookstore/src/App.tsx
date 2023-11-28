import React from 'react';
import { Footer, Header, NewReleases, NewReleasesBooks, SelectedBook, Cover,SearchResults, Favorites, Success, SignIn, SignUp, RegConfirmation } from './components';
import './App.css';
import { useSelector } from 'react-redux';
import { IStoreState } from './types';
import {
  BrowserRouter, Routes, Route, Navigate
  } from "react-router-dom";

function App() {
  const theme = useSelector((state: IStoreState) => state.ui.theme)
  const user = useSelector((state: IStoreState) => state.user.user)
  return (
    <div className ={`${theme}`}>
      <BrowserRouter>
        <Routes>
        <Route path={'/'}>
          <Route index element={<Cover/>}/>
          <Route path={'/books'}>
            <Route index element={
              (user ? <NewReleasesBooks/> : <Navigate to={"/signin"}/>)
            }/>
            <Route path={`:isbn13`} element={
              (user ? <SelectedBook/> : <Navigate to={"/signin"}/>)
            }/>
            <Route path={`search/:search`} element={
              (user ? <SearchResults/> : <Navigate to={"/signin"}/>)
            }/>
            <Route path={`favorites`} element={
              (user ? <Favorites/> : <Navigate to={"/signin"}/>)
            }/>
          </Route>
          <Route path={'signup'}> 
            <Route index element={<SignUp/>}/>
            <Route path={`regconf`} element={<RegConfirmation/>}/>
          </Route>
          <Route path={'signin'}> 
            <Route index element={<SignIn/>}/>
            <Route path={`activate/:uid/:token`} element={<Success/>}/>
          </Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export {App};
