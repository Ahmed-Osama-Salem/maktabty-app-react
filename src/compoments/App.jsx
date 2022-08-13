import React, { useEffect, useState } from "react";
import Main from "./Main";
import {  Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import ViewBooks from "./ViewBooks";
import BookList from "./BooksList";
import Contact from "./Contact";
import AddBooks from "./AddBooks";


function App () {
  const [bookData,setBookData] = useState([]);
  
// function saves the data inside array and localstorage every time 
  const saveBooks = () => {
    const localData = JSON.parse(localStorage.getItem("book"));
    //send book data to viewBooks
    setBookData(localData);
  }

  // useEffect for the reload pages and save data
  useEffect(()=>{
    if(localStorage.getItem("book") !== null)
     saveBooks(); 
  },[])

  
  return <BrowserRouter>
   
     <Routes>
       <Route element={<Main saveBooks={saveBooks} bookData={bookData} />} path="/"/>
       <Route element={<ViewBooks bookData={bookData} setBookData={setBookData} />} path="book-info"/>
       <Route element={<BookList/>} path="books"/>
       <Route element={<Contact/>} path="contact"/>
       <Route element={<AddBooks/>} path="add-books"/>
      </Routes>
    </BrowserRouter>
  
}

export default App;