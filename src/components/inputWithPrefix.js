const InputWithPrefix = ({prefix,placeholder,id, type = "text", name}) => {
  return (
    <div className="mt-1 flex rounded-md shadow-sm flex-row-reverse">
      <input
        type={type}
        name={name}
        id={id}
        className="form-input with-prefix"
        placeholder={placeholder}
      />
      <span className="input-addon form-prefix">
        {prefix}
      </span>
    </div>
  )
}

export default InputWithPrefix;