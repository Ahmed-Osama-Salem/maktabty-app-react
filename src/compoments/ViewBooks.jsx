import React from "react";
import { useNavigate } from "react-router-dom";
import FavoriteBooks from "./FavoriteBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewBooks({ bookData, setBookData }) {
  const notify = (boo) => toast(boo + "" + "تم حذف كتاب ");
  const navigateBack = useNavigate();
  function backToBooks() {
    navigateBack("/");
  }
  //stop here remove one book from favorite
  function onRemove(id) {
    // console.log(id);
    const filter = bookData.filter((book, index) => {
      return index !== id;
    });
    notify(bookData[id].title);
    setBookData(filter);
    localStorage.book = JSON.stringify(bookData);
  }
  //remove all books
  const removeAll = () => {
    localStorage.clear();
    setBookData([]);
  };

  return (
    <div className="book-view">
      <div>
        <button type="button" onClick={backToBooks} className="btn3">
          الرجوع الى المكتبة
        </button>
        <button type="button" className="btn2" onClick={removeAll}>
          حذف الكل
        </button>
        <h3>{bookData.length} : عدد الكتب</h3>
      </div>
      {bookData.map((fav, index) => {
        return (
          <FavoriteBooks
            key={index}
            id={index}
            favImg={fav.thumbnailUrl}
            favTitle={fav.title}
            favDis={fav.longDescription}
            favAut={fav.authors}
            favPage={fav.pageCount}
            favCat={fav.categories}
            onRemove={onRemove}
          />
        );
      })}
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default ViewBooks;
