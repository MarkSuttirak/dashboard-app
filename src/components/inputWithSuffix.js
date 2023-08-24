const InputWithSuffix = ({suffix, placeholder}) => {
    return (
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="company-website"
          id="company-website"
          className="form-input with-suffix"
          placeholder={placeholder}
        />
        <span className="form-suffix">
          {suffix}
        </span>
      </div>
    )
  }
  
  export default InputWithSuffix;