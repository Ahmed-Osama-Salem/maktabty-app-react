import React from "react";

function FavoriteBooks(props) {
  return (
    <div className="fav-book" id={props.id}>
      <img src={props.favImg} alt="fav" />

      <h2>
        {props.id + 1} - {props.favTitle}
      </h2>
      <p>{props.favDis}</p>
      <p>authors : {props.favAut}</p>
      <p>pageCount : {props.favPage}</p>
      <p>categories : {props.favCat}</p>
      <button
        type="button"
        className="btn2"
        onClick={() => props.onRemove(props.id)}
      >
        حذف الكتاب
      </button>
    </div>
  );
}

export default FavoriteBooks;
