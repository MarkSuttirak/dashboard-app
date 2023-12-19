import { Link } from "react-router-dom";

export default function AppIcon({icon, title, desc, link}){
    return (
      <div className="w-[141px]">
        <Link to={link}>
          <div className="border rounded-xl w-[141px] h-[141px] flex items-center justify-center mb-3">
            {icon}
          </div>
        </Link>

        <h2 className="subheading font-medium mb-[7px]">{title}</h2>
        <p className="text-xs text-[#667085]">{desc}</p>
      </div>
    )
  }