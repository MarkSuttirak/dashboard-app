import { Button } from "src/components/ui/button"
import { Icons } from "src/components/ui/icons"
import { Input } from "src/components/ui/input"
import { X } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { useState } from "react"

const appsQuotaFree = [
  {
    id:'reducoed',
    icon:<Icons.reducoedApp className="h-9 w-9"/>,
    title:'Reducoed',
    version:'Version 2.2',
  },
  {
    id:'line-crm',
    icon:<Icons.lineCRMApp className="h-9 w-9"/>,
    title:'Line CRM',
    version:'Version 2.2',
  },
  {
    icon:<Icons.posApp className="h-9 w-9"/>,
    title:'Instagram Store',
    version:'Version 2.2',
    link:''
  },
]

const appsQuotaPro = [
  {
    icon:<Icons.posApp className="h-9 w-9"/>,
    title:'Instagram Store',
    version:'Version 2.2',
    link:''
  },
  {
    icon:<Icons.erpApp className="h-9 w-9"/>,
    title:'Instagram Store',
    version:'Version 2.2',
    link:''
  },
]

export const totalAppsQuota = [...appsQuotaFree, ...appsQuotaPro]

export default function AppsQuota(){
  const [search, setSearch] = useState('');
  const { id } = useParams()
  const { t } = useTranslation()

  return (
    <>
      <h2 className="settings-heading">Apps Quota</h2>
      <p className="main-desc">Control upgrades and review limits for each apps on your site.</p>
      <section className="flex flex-col gap-y-4">
        <div className="mt-8 flex gap-x-2">
          <Input placeholder={t('integration.search_apps')} className='w-[250px]' onChange={e => {setSearch(e.target.value)}} value={search}/>
          <Button variant='ghost' className={`flex items-center gap-x-2 ${search !== '' ? 'visible opacity-1' : 'invisible opacity-0'} transition duration-200`} onClick={() => {setSearch('')}}>
            {t('reset')}
            <X viewBox="0 0 24 24" width='16' height='16'/>
          </Button>
        </div>

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
    </>
  )
}