import React from "react";
import BookList from "./BooksList";
import Navbar from "./Navbar";

function Main ({saveBooks,bookData}){
    return <section className="header" >
    <Navbar/>
        <div className="first-sec">
            <h1>مكتبتى</h1>
            <p> مكتبتى هتساعدك  تلاقى  كل الكتب </p>
            
        </div>
        <BookList data={saveBooks} bookData={bookData} />
    </section>
}

export default Main;