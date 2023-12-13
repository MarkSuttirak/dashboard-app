import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Icons } from "src/components/ui/icons"
import { appsList } from "src/components/sidebar/servicePrivileges"
import { Link } from "react-router-dom"
import { Button } from "src/components/ui/button"

export default function RecommendedApps(){
  const otherapps = [
    {
      icon:<Icons.crmApp />,
      title:appsList.crm.name,
      desc:appsList.crm.desc,
      id:'crm'
    },
    {
      icon:<Icons.lineCRMApp />,
      title:appsList.lineCRM.name,
      desc:appsList.lineCRM.desc,
      id:'line-crm'
    },
    {
      icon:<Icons.rewardfulApp />,
      title:appsList.rewardful.name,
      desc:appsList.rewardful.desc,
      id:'rewardful'
    },
    {
      icon:<Icons.reducoedApp />,
      title:appsList.reducoed.name,
      desc:appsList.reducoed.desc,
      id:'reduced'
    },
    {
      icon:<Icons.inbioApp />,
      title:appsList.marketConnect.name,
      desc:appsList.marketConnect.desc,
      id:'marketconnect'
    },
    {
      icon:<Icons.untitleApp />,
      title:appsList.untitled.name,
      desc:appsList.untitled.desc,
      id:'untitled'
    },
  ]
  return (
    <section className="grid grid-cols-3 gap-6">
      {otherapps.map((app, index) => (
        <Card key={app.id} className='app-card border-0'>
          <CardHeader className='flex flex-row gap-x-6'>
            <div className="w-[90px]">
              {app.icon}
            </div>
            <div className="m-[0!important]">
              <CardTitle>{app.title}</CardTitle>
              <CardDescription className='mt-[6px]'>{app.desc}</CardDescription>
            </div>
          </CardHeader>
          <CardFooter className='flex items-center justify-between'>
            <div className="text-sm">
              {/* {isInstalled ? <span className="text-[#2CB216] inline-flex items-center gap-x-2"><CheckCircle2 className="h-4 w-4 text-[#2CB216]"/>Installed</span> : requiredPro ? <span className="text-[#71717A] inline-flex items-center gap-x-2"><Crown className="h-4 w-4 text-[#71717A]"/>Pro plan</span> : <span className="text-[#71717A]">Free plan available</span>} */}
              Free plan available
            </div>
            <Link to={`/integration/appstore/${app.id}`} className="see-more">
              <Button variant='outline'>See more</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}