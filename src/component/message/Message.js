import React from "react";
import "./Message.css"

const Message = ({ value, nameClass, method }) => {

  const valueClass = `alert ${nameClass} fade show d-flex align-items-center`;

  const closeMassage = () => {
    method();
  }

  return (
    <div className={valueClass} role="alert">
      <strong className="mr-5">{value}</strong>
      <button
        className="close close-message"
        data-dismiss="alert"
        aria-label="Close"
      >
      <span onClick={closeMassage} aria-hidden="true" >&times;</span>
      </button>
    </div>
  )
}

export default Message;
//type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"
