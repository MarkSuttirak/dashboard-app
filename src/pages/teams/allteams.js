import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../../components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover"
import { useState } from "react";
import { DataList } from "src/components/pagination";

export default function AllTeams(){
  const teamnames = ['Zaviago','Intergoods','Line','Testbrand','Guten Tag','Frappe','Django', 'Bonjour']
  const [current, setCurrent] = useState(1)
  const TeamCard = ({teamname, avatar}) => {
    return (
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{teamname[0].toUpperCase()}{teamname[Math.floor(teamname.length / 2)].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium leading-none">{teamname}</p>
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Switch{" "}
              <ChevronDownIcon className="ml-2 h-4 w-4 text-muted-foreground" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[140px]" align="end">
            <Command>
              <CommandList>
                <CommandGroup className="p-1.5">
                  <CommandItem>Switch</CommandItem>
                  <CommandItem>View member</CommandItem>
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
      <div>
        <h1 className="subheading font-medium my-6">Current team</h1>

        <div className="flex flex-col gap-y-6 mt-[10px]">
          <TeamCard teamname={teamnames[current]} />
        </div>
      </div>
      <div>
        <h1 className="subheading font-medium my-6">Teams</h1>

        <div className="flex flex-col gap-y-6 mt-[10px]">
          <DataList pagination={teamnames.length > 6 ? true : false} listPerPage={6}>
            {teamnames.map(t => <TeamCard teamname={t} />)}
          </DataList>
        </div>
      </div>
    </div>
  )
}