import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const toggleUl = useRef();

  const slideNavbar = () => {
    toggleUl.current.classList.toggle("active");
  };
  return (
    <nav className="nav-bar">
      <h3>مكتبتى</h3>
      <span className="toggle-btn" onClick={slideNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>
      <div className="nav-links" ref={toggleUl}>
        <ul>
          <Link className="link-Style" to="books">
            الكتب
          </Link>
          <Link className="link-Style" to="/book-info">
            المفضلة
          </Link>
          <Link className="link-Style" to="contact">
            التواصل
          </Link>
          <Link className="link-Style" to="/add-books">
            اضافة كتاب
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
