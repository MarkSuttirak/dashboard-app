import { Input } from "src/components/ui/input"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { MoreHorizontal, PlusCircle, X } from "lucide-react"
import { Icons } from "src/components/ui/icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { DataList } from "src/components/pagination"
import { useState, useEffect } from 'react'
import DeleteAppModal from "src/components/modals/deleteAppModal"
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useTranslation } from "react-i18next"

const appsToUpgrade = [
  {
    id:'reducoed',
    icon:<Icons.reducoedApp />,
    title:'Reducoed',
    version:'Version 2.2',
    link:''
  },
  {
    id:'pos-store',
    icon:<Icons.posApp />,
    title:'POS Store',
    version:'Version 2.2',
    link:''
  },
]

export default function ManageOrUpgradeApps(){
  const { t } = useTranslation()
  const navigate = useNavigate()
  const appsPerPage = 6
  const [search, setSearch] = useState('');
  const { id } = useParams()
  const [deleteStatus, setDeleteStatus] = useState('');
  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  
  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !installedApps.data) {
      benchApps.refetch();
      installedApps.refetch();
    }
  }, [user, sites,benchApps,installedApps]);

  const appList = benchApps.data || [];
  const appData = (id === 'manage-apps' ? appList : appsToUpgrade);

  return (
    <section className="w-[672px]">
      <h2 className="settings-heading">{id === 'manage-apps' ? t('integration.manage_apps') : t('integration.upgrade_apps')}</h2>
      <p className="main-desc">{id === 'manage-apps' ? t('integration.manage_apps_desc') : t('integration.upgrade_apps_desc')}</p>
      <div className="mt-8 mb-4 flex gap-x-2">
        <Input placeholder={t('integration.search_apps')} className='w-[250px]' onChange={e => {setSearch(e.target.value)}} value={search}/>
        <Button variant='ghost' className={`flex items-center gap-x-2 ${search !== '' ? 'visible opacity-1' : 'invisible opacity-0'} transition duration-200`} onClick={() => {setSearch('')}}>
          {t('reset')}
          <X viewBox="0 0 24 24" width='16' height='16'/>
        </Button>
      </div>

      <section>
        <h3 className="subheading font-medium">{t('apps')}</h3>

        <div className="mt-[10px] flex flex-col gap-y-6">
        <DataList pagination={appData?.length > appsPerPage ? true : false} listPerPage={appsPerPage}>
        {appData?.filter(app => installedApps.data?.some(installedApp => installedApp.title === app.title))
          .filter(data => data.title.toUpperCase().includes(search.toUpperCase())).map(app => (
          <div className="flex items-center justify-between" key={app.name}>
            <div className="flex items-center gap-x-3">
              {app.image ? <img src={site.backend_url()+app.image} className="h-9 w-9 rounded-lg"/> : <Icons.erpApp />}
              <div>
                <h2 className="subheading font-medium">{app.title}</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-3">
              {id === 'manage-apps' ? (
                <Link to={`/integration/appstore/${app.title}`}>
                  <Button variant='outline'>{t('integration.open')}</Button>
                </Link>
              ) : (
                <Link to={`/integration/appstore/${app.title}`}>
                  <Button variant='outline'>{t('upgrade')}</Button>
                </Link>
              )}
              <Popover>
                <PopoverTrigger className="relative">
                  <Button variant='outline' className='w-9 px-0'><MoreHorizontal className="h-4 w-4"/></Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-[160px] absolute -right-4'>
                  <Command>
                    <CommandList>
                      <CommandGroup>
                        <CommandItem onSelect={() => navigate(`/integration/appstore/${app.title}`)}>{t('app_details.app_info')}</CommandItem>
                        <CommandItem>{t('app_details.customer_care')}</CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup>
                        <CommandItem className='p-0'><DeleteAppModal title={app.title} status={deleteStatus} setStatus={setDeleteStatus}/></CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ))}

        </DataList>
        </div>
      </section>
    </section>
  )
}