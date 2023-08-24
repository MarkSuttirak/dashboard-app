const InputWithPrefix = ({prefix,placeholder}) => {
  return (
    <div className="mt-1 flex rounded-md shadow-sm flex-row-reverse">
      <input
        type="text"
        name="company-website"
        id="company-website"
        className="form-input with-prefix"
        placeholder={placeholder}
      />
      <span className="form-prefix">
        {prefix}
      </span>
    </div>
  )
}

export default InputWithPrefix;