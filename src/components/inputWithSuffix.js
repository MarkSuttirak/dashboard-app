const InputWithSuffix = ({suffix, placeholder, id, type = "text", name}) => {
  return (
    <div className="mt-1 flex rounded-md shadow-sm">
      <input
        type={type}
        name={name}
        id={id}
        className="form-input with-suffix"
        placeholder={placeholder}
      />
      <span className="input-addon form-suffix">
        {suffix}
      </span>
    </div>
  )
}

export default InputWithSuffix;