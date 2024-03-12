import { ChevronsLeft } from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import Breadcrumbs from "../breadcrumbs"

export default function SettingsHeading({link, text}){
  const location = useLocation()
  const navigate = useNavigate()

  // Set the horizontal padding on billing plan due to the overflow of tabs
  const billingPlan = location.pathname === '/dashboard/settings/billing-plans'

  return (
    <>
      <h1 className="hidden lg:block text-2xl font-semibold">
        {text}
      </h1>

      <div className={`flex items-center gap-x-2 lg:hidden ${billingPlan ? "px-5" : ''}`}>
        <ChevronsLeft className="lg:hidden" onClick={() => navigate(link)}/>
        <Breadcrumbs />
      </div>
    </>
  )
}