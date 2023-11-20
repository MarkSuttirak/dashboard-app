import { Input } from "src/components/ui/input"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { MoreHorizontal, PlusCircle, X } from "lucide-react"
import { Icons } from "src/components/ui/icons"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { DataList } from "src/components/pagination"
import { useState } from 'react'
import DeleteAppModal from "src/components/deleteAppModal"

const installedApps = [
  {
    id:'reducoed',
    icon:<Icons.reducoedApp />,
    title:'Reducoed',
    version:'Version 2.2',
    link:''
  },
  {
    id:'line-crm',
    icon:<Icons.lineCRMApp />,
    title:'Line CRM',
    version:'Version 2.2',
    link:''
  },
  {
    id:'inbio',
    icon:<Icons.inbioApp />,
    title:'InBio',
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
  {
    id:'zaviago-erp',
    icon:<Icons.erpApp />,
    title:'Zaviago ERP',
    version:'Version 2.2',
    link:''
  },
  {
    id:'rewardful',
    icon:<Icons.rewardfulApp />,
    title:'Rewardful',
    version:'Version 2.2',
    link:''
  },
  {
    id:'untitle',
    icon:<Icons.untitleApp />,
    title:'Untitle',
    version:'Version 2.2',
    link:''
  },
]

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
  const navigate = useNavigate()
  const appsPerPage = 6
  const [search, setSearch] = useState('');
  const { id } = useParams()

  const [deleteStatus, setDeleteStatus] = useState('');

  const appData = (id === 'manage-apps' ? installedApps : appsToUpgrade).filter(app => app.title.toUpperCase().includes(search.toUpperCase()))

  return (
    <section className="w-[672px]">
      <h2 className="settings-heading">{id === 'manage-apps' ? 'Manage Apps' : 'Upgrade Apps'}</h2>
      <p className="main-desc">{id === 'manage-apps' ? 'Manage the apps on your site or go to the App Market to add new ones. Get More Apps' : 'Manage the apps on your site or go to the App Market to add new ones.'}</p>
      <div className="mt-6 mb-4 flex gap-x-2">
        <Input placeholder='Search App' className='w-[250px]' onChange={e => {setSearch(e.target.value)}} value={search}/>
        <Button variant='ghost' className={`flex items-center gap-x-2 ${search !== '' ? 'visible opacity-1' : 'invisible opacity-0'} transition duration-200`} onClick={() => {setSearch('')}}>
          Reset
          <X viewBox="0 0 24 24" width='16' height='16'/>
        </Button>
      </div>

      <section>
        <h3 className="subheading font-medium">Apps</h3>

        <div className="mt-[10px] flex flex-col gap-y-6">
          <DataList pagination={appData.length > appsPerPage ? true : false} listPerPage={appsPerPage}>
            {appData.map(app => (
              <div className="flex items-center justify-between" key={app.id}>
                <div className="flex items-center gap-x-3">
                  {app.icon}
                  <div>
                    <h2 className="subheading font-medium">{app.title}</h2>
                    <p className="main-desc">{app.version}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  {id === 'manage-apps' ? (
                    <Link to={app.link}>
                      <Button variant='outline'>Open</Button>
                    </Link>
                  ) : (
                    <Link to={`/integration/appstore/${app.id}`}>
                      <Button variant='outline'>Upgrade</Button>
                    </Link>
                  )}

                  <Popover>
                    <PopoverTrigger>
                      <Button variant='outline' className='p-2'>
                        <MoreHorizontal viewBox="0 0 24 24" height="16" width="16"/>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='p-0 w-[243px]'>
                      <Command>
                        <CommandList>
                          <CommandGroup>
                            <CommandItem onSelect={() => navigate(`/integration/appstore/${app.id}`)}>
                              App Info
                            </CommandItem>
                            <CommandItem>
                              Customer Care
                            </CommandItem>
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup>
                            <CommandItem className='p-0'>
                              <DeleteAppModal status={deleteStatus} setStatus={setDeleteStatus} title={app.title}/>
                            </CommandItem>
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