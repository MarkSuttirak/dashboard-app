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
import { EyeNoneIcon, Pencil1Icon, PersonIcon } from "@radix-ui/react-icons";
import { Checkbox } from "src/components/ui/checkbox";
import { useUser } from "src/hooks/useUser";
import Loading from "src/components/ui/loading";

export default function TeamMembers(){
  const { user, auth } = useUser();
  const userRoles = [
    {
      role:'Super Admin',
      ability:'Can access billing and add members',
      icon:<PersonIcon className="mt-1"/>
    },
    {
      role:'Member',
      ability:'Can edit',
      icon:<Pencil1Icon className="mt-1"/>
    },
    {
      role:'Remove',
      ability:'Remove from the team',
      icon:<EyeNoneIcon className="mt-1"/>
    }
  ]
  const [checkedFilter, setCheckedFilter] = useState([])
  const [search, setSearch] = useState('')

  const handleCheckFilter = (option) => {
    setCheckedFilter((prevFilters) => {
      if (prevFilters.includes(option)) {
        return prevFilters.filter((filter) => filter !== option);
      } else {
        return [...prevFilters, option];
      }
    });
  }

  const allMembers = auth?.team_members.filter(name => name.first_name.toUpperCase().includes(search.toUpperCase()) || name.last_name.toUpperCase().includes(search.toUpperCase()))
  // const filteredMembers = allMembers.filter((member) =>
  //   checkedFilter.length === 0 || checkedFilter.includes(member.roles[0])
  // );

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
              <CommandList>
                <CommandGroup className="p-1.5">
                  {auth?.team_members.map(member => (
                    <>
                      {member?.roles.map(role => (
                        <CommandItem className="flex items-start px-4 py-2 gap-x-4">
                          {role.icon}
                          <div className="flex flex-col">
                            <h3 className="subheading font-medium">{role.role}</h3>
                            <p className="text-sm text-muted-foreground">
                              {role.ability}
                            </p>
                          </div>
                        </CommandItem>
                      ))}
                    </>
                  ))}
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
        <Input className='max-w-[300px]' placeholder='Search User' value={search} onChange={(e) => setSearch(e.target.value)}/>
        <Popover>
          <PopoverTrigger>
            <Button variant='outline' className='border border-dashed flex items-center gap-x-2'>
              <div className="flex items-center gap-x-2">
                <PlusCircle viewBox='0 0 24 24' width='16' height='16'/>
                Role
              </div>
              {checkedFilter.length > 0 && (
                <>
                  <DrawLine color='#E4E4E7' height="80%" width="1px"/>
                  {checkedFilter.length < 3 ? (
                    <>
                      {checkedFilter.map(c => (
                        <Badge variant="secondary" className='rounded-md'>{c}</Badge>
                      ))}
                    </>
                  ) : (
                    <Badge variant="secondary" className='rounded-md'>{checkedFilter.length} selected</Badge>
                  )}
                </>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <div className="p-1">
              {userRoles.map(option => (
                <div className="flex items-center justify-between px-2 py-[6px]">
                  <div className="flex items-center gap-x-2">
                    <Checkbox id={`filter-${option.role}`} checked={checkedFilter.includes(option.role)} onCheckedChange={() => handleCheckFilter(option.role)}/>
                    <label htmlFor={`filter-${option.role}`} className="subheading">{option.role}</label>
                  </div>
                  {/* <span className="text-xs">{allMembers.filter(item => item.role === option.role).length}</span> */}
                </div>
              ))}
            </div>

            {checkedFilter.length > 0 && (
              <>
                <DrawLine width='100%' height='1px' color='#E4E4E7'/>
                <div className="p-1">
                  <Button className='w-full font-normal' variant='ghost' onClick={() => setCheckedFilter([])}>Clear filters</Button>
                </div>
              </>
            )}
          </PopoverContent>
        </Popover>
        <Button variant='ghost' className={`flex items-center gap-x-2 ${search !== '' || checkedFilter.length > 0 ? 'visible opacity-1' : 'invisible opacity-0'} transition duration-200`} onClick={() => {setSearch('');setCheckedFilter([])}}> 
          Reset
          <X viewBox="0 0 24 24" width='16' height='16'/>
        </Button>
      </div>

      <div className="flex flex-col gap-y-6 my-6">
        {/* <DataList pagination={filteredMembers.length > 6 ? true : false} listPerPage={6} emptyText="There is no member you are looking for.">
          {filteredMembers.map(t => (
            <TeamCard firstname={t.first_name} lastname={t.last_name} role={t.roles[0]} email={t.name}/>
          ))}
        </DataList> */}
        <DataList listPerPage={6} emptyText="There is no member you are looking for.">
          {allMembers?.map(t => (
            <TeamCard firstname={t.first_name} lastname={t.last_name} role={t.roles[0]} email={t.name}/>
          )) || <Loading />}
        </DataList>
      </div>
    </div>
  )
}