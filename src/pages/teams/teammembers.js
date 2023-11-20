import { PlusCircle, X, ChevronDownIcon } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../../components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import DrawLine from "../../components/drawLine";
import { useState } from 'react'
import { DataList } from "src/components/pagination";

const teamMembers = [
  {
    firstname:'Olivia',
    lastname:'Martin',
    role:'Viewer',
    email:'test@mail.com'
  },
  {
    firstname:'Isabella',
    lastname:'Nguyen',
    role:'Viewer',
    email:'b@example.com'
  },
  {
    firstname:'Markus',
    lastname:'Schneider',
    role:'Viewer',
    email:'markus@example.com'
  },
  {
    firstname:'Erina',
    lastname:'Bruhner',
    role:'Viewer',
    email:'erina@example.com'
  },
]

export default function TeamMembers(){
  const [search, setSearch] = useState('')

  const allMembers = teamMembers.filter(name => name.firstname.toUpperCase().includes(search.toUpperCase()) || name.lastname.toUpperCase().includes(search.toUpperCase()))

  const TeamCard = ({firstname, lastname, email, role, avatar}) => {
    return (
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{firstname[0]}{lastname[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{firstname}{" "}{lastname}</p>
            <p className="text-sm text-muted-foreground mt-[2px]">{email}</p>
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="ml-auto">
              {role}{" "}
              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" align="end">
            <Command>
              <CommandInput placeholder="Select new role..." />
              <CommandList>
                <CommandEmpty>No roles found.</CommandEmpty>
                <CommandGroup className="p-1.5">
                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>Viewer</p>
                    <p className="text-sm text-muted-foreground">
                      Can view and comment.
                    </p>
                  </CommandItem>
                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>Developer</p>
                    <p className="text-sm text-muted-foreground">
                      Can view, comment and edit.
                    </p>
                  </CommandItem>
                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>Billing</p>
                    <p className="text-sm text-muted-foreground">
                      Can view, comment and manage billing.
                    </p>
                  </CommandItem>
                  <CommandItem className="teamaspace-y-1 flex flex-col items-start px-4 py-2">
                    <p>Owner</p>
                    <p className="text-sm text-muted-foreground">
                      Admin-level access to all resources.
                    </p>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    )
  }
  return (
    <div>
      <h1 className="subheading font-medium">People with access</h1>
      <div className="mt-[10px] flex gap-x-2">
        <Input placeholder='Search User' onChange={(e) => setSearch(e.target.value)}/>
        <Button variant='outline' className='border border-dashed flex items-center gap-x-2'>
          <div className="flex items-center gap-x-2">
            <PlusCircle viewBox='0 0 24 24' width='16' height='16'/>
            Role
          </div>
          <DrawLine color='#E4E4E7' height="80%" width="1px"/>
          <Badge variant="secondary" className='rounded-md'>3 Selected</Badge>
        </Button>
        <Button variant='ghost' className='flex items-center gap-x-2'>
          Reset
          <X viewBox="0 0 24 24" width='16' height='16'/>
        </Button>
      </div>

      <div className="flex flex-col gap-y-6 my-6">
        <DataList pagination={allMembers.length > 6 ? true : false} listPerPage={6} emptyText="There is no member you are looking for.">
          {allMembers.map(t => (
            <TeamCard firstname={t.firstname} lastname={t.lastname} role={t.role} email={t.email}/>
          ))}
        </DataList>
      </div>
    </div>
  )
}