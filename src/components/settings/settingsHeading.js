import { ChevronsLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function SettingsHeading({link, text}){

    const navigate = useNavigate()

    return (
      <div className="flex gap-x-2 items-center">

        <ChevronsLeft className="lg:hidden" onClick={() => navigate(link)}/>

        <h1 
          className="text-base md:text-2xl font-normal md:font-semibold text-secondary md:text-primary text-center md:text-left"
        >
          {text}
        </h1>
      </div>
    )
}