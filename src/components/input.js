import { useState } from "react";

const Input = ({type = "text",name,id,placeholder,label,width,height,border}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <input
        type={type}
        name={name}
        id={id}
        className="form-input"
        placeholder={placeholder}
        style={{width:width,height:height,border:border}}
      />
    </>
  )
}

export default Input;