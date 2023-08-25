const InputWithSuffix = ({suffix, placeholder, id, type = "text", name, label,width,height,border}) => {
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
          style={{width:width,height:height,border:border}}
        />
        <span className="input-addon form-suffix" style={{border:border}}>
          {suffix}
        </span>
      </div>
    </>
  )
}

export default InputWithSuffix;