import { useState } from "react";

const Input = ({type = "text",name,id,placeholder,label}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <input
        type={type}
        name={name}
        id={id}
        className="form-input"
        placeholder={placeholder}
      />
    </>
  )
}

export default Input;