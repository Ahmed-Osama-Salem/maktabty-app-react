import React from "react";
import {useNavigate} from "react-router-dom";
import FavoriteBooks from "./FavoriteBooks";


function ViewBooks ({bookData,setBookData}) {


  const navigateBack = useNavigate()
  function backToBooks () {
    navigateBack("/");
    
  }
  //stop here remove one book from favorite
  function onRemove (id){
    // console.log(id);
    const filter = bookData.filter((book,index)=>{
      return index !== id;
    })
    setBookData(filter);
    localStorage.book = JSON.stringify(bookData);
  }
  //remove all books
  const removeAll = () => {
    localStorage.clear();
    setBookData([]);
    
  }
 
 
  return <div className="book-view">
  <div >
  <button type="button" onClick={backToBooks} className="btn3">الرجوع الى المكتبة</button>
   <button type="button" className="btn2" onClick={removeAll}>حذف الكل</button>
   </div>
   {bookData.map((fav,index)=>{
     return <FavoriteBooks
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
   })}
   
  </div>
}

export default ViewBooks;