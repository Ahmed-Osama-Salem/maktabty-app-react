import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { booksData } from "../books";
import propTypes from "prop-types";
import ReadMoreReact from "read-more-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookList({ data, bookData }) {
  const notify = (b) => toast(b + " " + "تم اضافة كتاب");
  const navigateToView = useNavigate();

  //function that save books in array and localStorage
  const arr = bookData;
  function addToLocal(id) {
    for (let i = 0; i < booksData.length; i++) {
      if (i === id) {
        arr.push(booksData[i]);
        console.log(arr);
        localStorage.setItem("book", JSON.stringify(arr));
        data();
        notify(booksData[i].title);
      }
    }
  }

  function viewInfo() {
    navigateToView("book-info");
  }

  return (
    <div className="book-card">
      <h2>مكتبة الكتب</h2>

      <div className="links">
        <Link className="link-single" to="/">
          الرئيسية
        </Link>
        <Link className="link-single" to="/book-info">
          المفضلة
        </Link>
      </div>
      <h3>{bookData.length} :عدد الكتب المفضلة </h3>
      <div className="flex-book">
        {booksData.map((book, index) => {
          return (
            <SingleBook
              key={index}
              id={index}
              fullId={book.id}
              bookImg={book.thumbnailUrl}
              bookTitle={book.title}
              bookAuthor={book.authors}
              bookPage={book.pageCount}
              bookDis={book.shortDescription}
              onAdd={addToLocal}
              onInfo={viewInfo}
            />
          );
        })}
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
}

function SingleBook(props) {
  return (
    <div className="single-book">
      <img src={props.bookImg} alt="book" />
      <h3> {props.bookTitle}</h3>
      <p>author : {props.bookAuthor}</p>
      <p>page count : {props.bookPage} pages</p>
      <ReadMoreReact text={props.bookDis} />
      <p>{props.id + 1}</p>
      <div className="btn-style">
        <button
          className="btn2"
          type="button"
          onClick={() => props.onAdd(props.fullId)}
        >
          اضافة للمفضلة
        </button>
        <button type="button" onClick={props.onInfo} className="btn2">
          عرض المفضلة
        </button>
      </div>
    </div>
  );
}

SingleBook.propTypes = {
  bookDis: propTypes.string.isRequired,
};

SingleBook.defaultProps = {
  bookDis:
    "Lorem ipsum dolor sit amet. Vel modi blanditiis non molestiae similique laborum quo voluptatem numquam est omnis accusamus. Non quia impedit qui sunt praesentium et rerum delectus vel minus galisum quo quidem voluptas.",
};

export default BookList;
