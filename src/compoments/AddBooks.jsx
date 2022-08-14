import React, { useState } from "react";
import { Link } from "react-router-dom";
import { booksData } from "../books";

function AddBooks() {
  const [text, setText] = useState({
    thumbnailUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT538yXb7RXLfxcjMmO07mnzD1v3XuNqlxy3w&usqp=CAU",
    title: "",
    authors: "",
    shortDescription: "",
    pageCount: "",
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

  return (
    <div className="add-books">
      <h1>تقدر تضيف كتابك ضمن مجموعة مكتبتى</h1>
      <form onSubmit={handelSubmit}>
        <label>اسم الكتاب</label>
        <input type="text" onChange={handelInputs} name="title" />
        <label>اسم المؤلف</label>
        <input type="text" onChange={handelInputs} name="authors" />
        <label>وصف الكتاب</label>
        <input type="text" onChange={handelInputs} name="shortDescription" />
        <label>عدد الصفح</label>
        <input type="text" onChange={handelInputs} name="pageCount" />
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
              <img alt="book" src={newBook.thumbnailUrl} />
              <h2>title : {newBook.title} </h2>
              <p>Author: {newBook.authors} </p>
              <p>discription : {newBook.shortDescription}</p>
              <p>pages : {newBook.pageCount} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddBooks;
