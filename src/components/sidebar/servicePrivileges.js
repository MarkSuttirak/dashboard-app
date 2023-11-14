export default function ServicePrivileges({icon, title, desc}){
  return (
    <li className="flex gap-x-4">
      {icon}
      <div>
        <h2 className="subheading">{title}</h2>
        <p className="main-desc">{desc}</p>
      </div>
    </li>
  )
}