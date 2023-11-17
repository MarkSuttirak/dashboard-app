import { Input } from "src/components/ui/input"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { MoreHorizontal, PlusCircle, X } from "lucide-react"
import DrawLine from "src/components/drawLine"
import { Icons } from "src/components/ui/icons"
import { Link } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "src/components/ui/command"
import { DataList } from "src/components/pagination"

export default function UpgradeApps(){
  const appsToUpgrade = [
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
    {
      icon:<Icons.posApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    },
    {
      icon:<Icons.reducoedApp />,
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
    {
      icon:<Icons.reducoedApp />,
      title:'Instagram Store',
      version:'Version 2.2',
      link:''
    }
  ]

  return (
    <>
      <div className="mt-6 mb-4 flex gap-x-2">
        <Input placeholder='Search App' className='w-[250px]'/>
        <Button variant='ghost' className='flex items-center gap-x-2'>
          Reset
          <X viewBox="0 0 24 24" width='16' height='16'/>
        </Button>
      </div>

      <section>
        <h3 className="subheading font-medium">Apps</h3>

        <div className="mt-[10px] flex flex-col gap-y-6">
          <DataList pagination={true} listPerPage={8}>
            {appsToUpgrade.map(app => (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  {app.icon}
                  <div>
                    <h2 className="subheading font-medium">{app.title}</h2>
                    <p className="main-desc">{app.version}</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <Link to={app.link}>
                    <Button variant='outline'>Upgrade</Button>
                  </Link>
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
                            <CommandItem>
                              App Info
                            </CommandItem>
                            <CommandItem>
                              Customer Care
                            </CommandItem>
                          </CommandGroup>
                          <CommandSeparator />
                          <CommandGroup>
                            <CommandItem>
                              Delete
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
    </>
  )
}