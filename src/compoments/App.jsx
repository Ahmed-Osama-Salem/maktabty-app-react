import React, { useEffect, useState } from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ViewBooks from "./ViewBooks";
import BookList from "./BooksList";
import Contact from "./Contact";
import AddBooks from "./AddBooks";


function App () {
  const [bookData,setBookData] = useState([]);
  

  const saveBooks = () => {
    const localData = JSON.parse(localStorage.getItem("book"));
    //send book data to viewBooks
    setBookData(localData);
    
    
  }

  
  

  useEffect(()=>{
    if (localStorage.getItem("book")) {
      saveBooks();
    }
  },[])
  return <HashRouter>
   
     <Routes>
       <Route element={<Main saveBooks={saveBooks} />} path="/"/>
       <Route element={<ViewBooks bookData={bookData} setBookData={setBookData} />} path="book-info"/>
       <Route element={<BookList/>} path="books"/>
       <Route element={<Contact/>} path="contact"/>
       <Route element={<AddBooks/>} path="add-books"/>
      </Routes>
    </HashRouter>
  
}

export default App;