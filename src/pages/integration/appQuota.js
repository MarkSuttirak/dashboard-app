import { Input } from "src/components/ui/input"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { Icons } from "src/components/ui/icons"
import { Link } from "react-router-dom"

export default function AppsQuota(){
  const appsQuotaFree = [
    {
      icon:<Icons.reducoedApp />,
      title:'Reducoed',
      version:'Version 2.2',
      link:''
    },
    {
      icon:<Icons.erpApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    },
    {
      icon:<Icons.posApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    },
  ]

  const appsQuotaPro = [
    {
      icon:<Icons.posApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    },
    {
      icon:<Icons.erpApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    },
  ]

  return (
    <section className="flex flex-col gap-y-[10px] mt-6">
      <h3 className="subheading font-medium">Free Plan</h3>

      <div className="flex flex-col gap-y-6">
        {appsQuotaFree.map(app => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              {app.icon}
              <div>
                <h2 className="subheading font-medium">{app.title}</h2>
                <p className="main-desc">{app.version}</p>
              </div>
            </div>
            <Link to={app.link}>
              <Button variant='outline'>Read more</Button>
            </Link>
          </div>
        ))}
      </div>

      <h3 className="subheading font-medium">Pro Plan</h3>

      <div className="flex flex-col gap-y-6">
        {appsQuotaPro.map(app => (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              {app.icon}
              <div>
                <h2 className="subheading font-medium">{app.title}</h2>
                <p className="main-desc">{app.version}</p>
              </div>
            </div>
            <Link to={app.link}>
              <Button variant='outline'>Read more</Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}