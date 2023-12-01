export default function AppIcon({icon, title, desc}){
    return (
      <div className="w-[141px]">
        <div className="border rounded-xl w-[141px] h-[141px] flex items-center justify-center mb-3">
          {icon}
        </div>

        <h2 className="subheading font-medium mb-[7px]">{title}</h2>
        <p className="main-desc">{desc}</p>
      </div>
    )
  }