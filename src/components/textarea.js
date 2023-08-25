const Textarea = ({label, id, name, placeholder, border}) => {
  return (
    <>
      {label && <label htmlFor={id} className="subheading">{label}</label>}
      <textarea id={id} name={name} placeholder={placeholder} className="form-input" style={{border:border}}/>
    </>
  )
}

export default Textarea;