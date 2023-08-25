const InputWithPrefix = ({prefix,placeholder,id, type = "text", name, label,width,height}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <div className="flex rounded-md flex-row-reverse">
        <input
          type={type}
          name={name}
          id={id}
          className="form-input with-prefix"
          placeholder={placeholder}
          style={{width:width,height:height}}
        />
        <span className="input-addon form-prefix">
          {prefix}
        </span>
      </div>
    </>
  )
}

export default InputWithPrefix;