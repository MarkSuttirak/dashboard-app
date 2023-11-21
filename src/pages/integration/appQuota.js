import { Button } from "src/components/ui/button"
import { Icons } from "src/components/ui/icons"
import { Link } from "react-router-dom"

const appsQuotaFree = [
  {
    id:'reducoed',
    icon:<Icons.reducoedApp />,
    title:'Reducoed',
    version:'Version 2.2',
  },
  {
    id:'line-crm',
    icon:<Icons.lineCRMApp />,
    title:'Line CRM',
    version:'Version 2.2',
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

export const totalAppsQuota = [...appsQuotaFree, ...appsQuotaPro]

export default function AppsQuota(){
  return (
    <section className="mt-6 flex flex-col gap-y-4">
      <div>
        <h3 className="subheading font-medium mb-[10px]">Free Plan</h3>

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
              <Link to={`/integration/quota-detail/${app.id}`}>
                <Button variant='outline'>Read more</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="subheading font-medium mb-[10px]">Pro Plan</h3>

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
              <Link to={`/integration/quota-detail/${app.id}`}>
                <Button variant='outline'>Read more</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}