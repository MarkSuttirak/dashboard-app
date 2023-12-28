import { Skeleton } from "../ui/skeleton"
import { Icons } from "../ui/icons"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover"
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
} from "src/components/ui/command"

export default function SidebarWebsite(){
  const { data: sites } = useQuery('sites', site.list, {enabled: false});

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-x-2">
          <div className="min-w-9 min-h-9">
            <Icons.zaviagoApp className='cursor-pointer w-9 h-9'/>
          </div>
          <span className="flex gap-x-2 items-center">
            <div className="flex flex-col text-left">
              <h2 className="cal-sans text-[17px] font-semibold">zaviago<span className="text-[13px]">.com</span></h2>
              <p className={`text-[11px] font-medium tracking-[-0.33px] text-[#5A5A5A] ${sites ? '-mt-1' : 'mt-0'}`}>
                {sites ? sites?.site_list[0].name : <Skeleton className='h-3 w-full rounded-sm'/>}
              </p>
            </div>
          </span>
        </div>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}