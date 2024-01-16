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
import { Check, PlusCircle } from "lucide-react";

export default function SidebarWebsite(){
  const { data: sites } = useQuery('sites', site.list, {enabled: false});

  const workspaceMenus = [
    {title:'WorkSpace', icon:<Icons.zaviagoApp />, desc:'ระบบจัดการธุรกิจและขายสินค้า', enabled:<Check className="h-4 w-4"/>},
    {title:'จัดการธุรกิจ', icon:<Icons.erpApp />, desc:'ระบบจัดการธุรกิจและขายสินค้า', link:'https://www.zaviago.com/manage'},
    {title:'บล็อกและบทความ', icon:<Icons.blogPostApp />, desc:'สร้างข่าวสารและเขียนบทความ', link:'/coming-soon'},
    {title:'CRM', icon:<Icons.posApp />, desc:'จัดการและดูข้อมูลลูกค้าต่างๆ', link:'https://www.zaviago.com/crm'},
    {title:'เว็บไซต์', icon:<Icons.websiteApp fill='white' />, desc:'สร้างและออกแบบเว็บไซต์', link:'/coming-soon'},
    {title:'MarketConnect', icon:<Icons.inbioApp />, desc:'จัดการออเดอร์จาก eCommerce Platform', link:'https://www.zaviago.com/marketplace'},
    {title:'Canvas', icon:<Icons.blogAndPagesApp />, desc:'ระบบออกแบบ Graphics', link:'/coming-soon'}
  ]

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
      <PopoverContent className='p-0 relative left-4 w-full'>
        <Command>
          <CommandList className='max-h-full w-full'>
            <CommandGroup>
              {workspaceMenus.map((menu, index) => (
                <CommandItem onSelect={() => {menu.link === '/coming-soon' ? window.open("/coming-soon",'_blank') : window.open(menu.link, '_self')}}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-2">
                      {menu.icon}
                      <div>
                        <h2 className="text-sm text-primary">{menu.title}</h2>
                        <p className="text-[13px] text-[#565656]">{menu.desc}</p>
                      </div>
                    </div>
                    {menu.enabled}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem className='flex items-center gap-x-2'>
                <div className="bg-accent rounded-md p-[10px]">
                  <PlusCircle className="h-4 w-4"/>
                </div>
                เพิ่มหรือหาแอปใช้งานเพิ่มเติม
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}