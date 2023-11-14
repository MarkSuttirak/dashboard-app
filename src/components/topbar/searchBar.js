import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "../ui/command"
import { Search } from 'lucide-react'

export default function SearchBar(){
  return (
    <Dialog>
      <DialogTrigger className='bg-zinc-100 rounded-md px-2 py-[6px] text-[13px] h-7 flex items-center w-[300px] text-zinc-500 tracking-[0.02em] gap-x-[9px] leading-5'>
        <Search viewBox='0 0 24 24' width='14' height='14' className='ml-1'/>
        Search or type a command (Ctrl + G)
      </DialogTrigger>
      <DialogContent className='p-0'>
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>Profile</CommandItem>
              <CommandItem>Billing</CommandItem>
              <CommandItem>Settings</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}