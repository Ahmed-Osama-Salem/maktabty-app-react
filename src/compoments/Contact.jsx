import React from "react";
import { Link } from "react-router-dom";

function Contact () {
  function submit (){
    alert("تم ارسال بيناتك بنجاح")
  }
 return <div className="contact-page">
    <Link  className="btn2" to="/" >الرجوع للمكتبة</Link>
    <form className="contact-form">
        <label>الاسم</label>
        <input type="text" placeholder="الاسم ثلاثى"/>
        <label>رقم الهاتف</label>
        <input type="text" placeholder="+02"/>
        <label>الإيميل</label>
        <input type="email" placeholder="example@mail.com"/>
        <label>التقيم/الملاحظات</label>
        <textarea rows="2" ></textarea>
        <button type="button" className="btn2" onClick={submit}>ارسال</button>
    </form>
 </div>
}

export default Contact;