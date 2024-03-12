import { ChevronsLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "../breadcrumbs"

export default function SettingsHeading({link, text}){

    const navigate = useNavigate()

    return (
      <>
        <h1 className="hidden lg:block text-2xl font-semibold">
          {text}
        </h1>

        <div className="flex items-center gap-x-2 lg:hidden">
          <ChevronsLeft className="lg:hidden" onClick={() => navigate(link)}/>
          <Breadcrumbs />
        </div>
      </>
    )
}