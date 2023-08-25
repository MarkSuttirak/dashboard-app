const InputWithSuffix = ({suffix, placeholder, id, type = "text", name, label,width,height}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <div className="flex rounded-md">
        <input
          type={type}
          name={name}
          id={id}
          className="form-input with-suffix"
          placeholder={placeholder}
          style={{width:width,height:height}}
        />
        <span className="input-addon form-suffix">
          {suffix}
        </span>
      </div>
    </>
  )
}

export default InputWithSuffix;