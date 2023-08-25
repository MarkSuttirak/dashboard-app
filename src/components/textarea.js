const Textarea = ({label, id, name, placeholder}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <textarea id={id} name={name} placeholder={placeholder} className="form-input"/>
    </>
  )
}

export default Textarea;