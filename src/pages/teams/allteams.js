import { PlusCircle, X, ChevronDownIcon } from "lucide-react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import VerticalLine from "../../components/verticalLine";
import { Badge } from "../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "../../components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover"

export default function AllTeams(){
  const TeamCard = ({teamname, role, avatar}) => {
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
      <h1 className="subheading font-medium mt-6">Teams</h1>

      <div className="flex flex-col gap-y-6 mt-[10px]">
        <TeamCard teamname="Zaviago" />
        <TeamCard teamname="intergoods" />
      </div>
    </div>
  )
}