import React, { useState } from "react";

const ReadMore = ({children}) => {
    const [isRead,setIsRead] = useState(false);

    const toggleBtn = () => {
        setIsRead((preValue)=>{
         return !preValue;
        });
    }

    const text = children;

  return <p>
      {isRead ? text : text.substr(0,10)}
     <span onClick={toggleBtn}>{isRead ? "Read More" : "..Read less"}</span>
  </p>
}

export default ReadMore;