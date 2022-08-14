import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksData } from "../books";

function AddBooks() {
  const [text, setText] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookDisc: "",
    bookData: "",
  });
  const [bookAdd, setBookAdd] = useState([]);

  function handelInputs(e) {
    let newText = e.target.value;
    let newName = e.target.name;
    setText({ ...text, [newName]: newText });
  }
  console.log(text);

  const handelSubmit = (e) => {
    e.preventDefault();
    setText(text);
    setBookAdd((preValue) => {
      return [...preValue, text];
    });
    booksData.unshift(text);
  };

  console.log(booksData);
  return (
    <div className="add-books">
      <h1>تقدر تضيف كتابك ضمن مجموعة مكتبتى</h1>
      <form onSubmit={handelSubmit}>
        <label>اسم الكتاب</label>
        <input type="text" onChange={handelInputs} name=" bookTitle" />
        <label>اسم المؤلف</label>
        <input type="text" onChange={handelInputs} name="bookAuthor" />
        <label>وصف الكتاب</label>
        <input type="text" onChange={handelInputs} name="bookDisc" />
        <label>تاريخ اصدار الكتاب</label>
        <input type="text" onChange={handelInputs} name="bookData" />
        <button className="btn2" type="submit">
          اضافة كتاب
        </button>
      </form>
      <Link className="btn2" to="/">
        القائمة الرئيسية
      </Link>
      <div className="flex-books">
        {bookAdd.map((newBook) => {
          return (
            <div className="book-new">
              <img
                alt="book"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpbJuy6d3MzgFt_8fyEV2FlhtQX6Ej542D5Wseoa3NSH5BGMJxHf-JnWz9nSRpgqMfTgg&usqp=CAU"
              />
              <h2>title : {newBook.bookTitle} </h2>
              <p>Author: {newBook.bookAuthor} </p>
              <p>discription : {newBook.bookDisc}</p>
              <p>year : {newBook.bookData} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddBooks;
