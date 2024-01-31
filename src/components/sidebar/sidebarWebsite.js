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
    {title:'WorkSpace', icon:<Icons.zaviagoApp className='w-[30px] h-[30px]'/>, desc:'ระบบจัดการธุรกิจและขายสินค้า', enabled:<Check className="h-4 w-4"/>},
    {title:'จัดการธุรกิจ', icon:<Icons.erpApp className='w-[30px] h-[30px]'/>, desc:'ระบบจัดการธุรกิจและขายสินค้า', link:'https://www.zaviago.com/manage'},
    {title:'บล็อกและบทความ', icon:<Icons.blogPostApp className='w-[30px] h-[30px]'/>, desc:'สร้างข่าวสารและเขียนบทความ', link:'/coming-soon'},
    {title:'CRM', icon:<Icons.posApp className='w-[30px] h-[30px]'/>, desc:'จัดการและดูข้อมูลลูกค้าต่างๆ', link:'https://www.zaviago.com/crm'},
    {title:'เว็บไซต์', icon:<Icons.websiteApp fill='white' className='w-[30px] h-[30px]'/>, desc:'สร้างและออกแบบเว็บไซต์', link:'/coming-soon'},
    {title:'MarketConnect', icon:<Icons.inbioApp className='w-[30px] h-[30px]'/>, desc:'จัดการออเดอร์จาก eCommerce Platform', link:'https://www.zaviago.com/marketplace'},
    {title:'Canvas', icon:<Icons.blogAndPagesApp className='w-[30px] h-[30px]'/>, desc:'ระบบออกแบบ Graphics', link:'/coming-soon'}
  ]

  return (
    <Popover>
      <PopoverTrigger>
        <div className="flex items-center gap-x-2">
          <div className="min-w-9 min-h-9 relative">
            <Icons.zaviagoApp className='cursor-pointer w-9 h-9 z-9'/>
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
      <PopoverContent className='p-1 relative left-3 min-w-[355px] w-full rounded-xl'>
        <Command>
          <CommandList className='max-h-full w-full'>
            <CommandGroup>
              {workspaceMenus.map((menu, index) => (
                <CommandItem className='mb-[10px] px-[7px]' onSelect={() => {menu.link === '/coming-soon' ? window.open("/coming-soon",'_blank') : window.open(menu.link, '_self')}}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-x-[10px]">
                      {menu.icon}
                      <div>
                        <h2 className="text-sm text-primary font-semibold">{menu.title}</h2>
                        <p className="text-[13px] text-[#565656] -mt-1">{menu.desc}</p>
                      </div>
                    </div>
                    {menu.enabled}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}