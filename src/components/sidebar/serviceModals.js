import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ServicePrivileges from "./servicePrivileges";
import { ServiceBadge } from "./serviceBadge";
import DrawLine from "../drawLine";
import { useEffect, useContext } from "react";
import { BellIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import { useServiceMenus } from "src/hooks/useServiceMenu";
import { Icons } from "../ui/icons";

const privileges = [
  {
    icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Super Admin',
    desc:'Can access billing and members'
  },
  {
    icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Remove',
    desc:'Turn off all notifications'
  },
  {
    icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Super Admin',
    desc:'Can access billing and members'
  },
  {
    icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
    title:'Remove',
    desc:'Turn off all notifications'
  }
]

export default function ServiceModals(){
  const icons = [<Icons.erpApp />, <Icons.posApp />, <Icons.rewardfulApp />, <Icons.untitleApp />, <Icons.reducoedApp />, <Icons.inbioApp />, <Icons.blogAndPagesApp />, <Icons.lineCRMApp />, <Icons.sidebarApp09 />, <Icons.sidebarApp10 />]
  const services = useServiceMenus()

  useEffect(() => {
    const items = privileges.map((item) => {
      if (item.title == 'Remove' || item.title == 'Supertest'){
        return item
      } else {
        return undefined
      }
    })
    // console.log(items.filter((item) => item !== undefined))
  }, [])

  return (
    <Dialog>
      {icons.map((i, index) => (
        <div className="nav-btns add-ons">
          <DialogTrigger onClick={() => services.select(index)}>{i}</DialogTrigger>
        </div>
      ))}
      <DialogContent className='p-0 border-0 max-w-4xl'>
        <DialogHeader className='flex-row'>
          <DialogTitle className='relative'>
            <img src={services.image} className='rounded-l-lg h-full w-[800px]'/>
            <div className="absolute left-5 bottom-5 flex gap-x-2 items-center">
              <Button variant='link' className='text-white text-xs p-0 h-fit'>Privacy Policy</Button>
              <DrawLine color='#FFF' width='1px' height='14px'/>
              <Button variant='link' className='text-white text-xs p-0 h-fit'>Contact us</Button>
            </div>
          </DialogTitle>
          <DialogDescription className='px-10 pt-6 pb-10 shadow-lg'>
            <div className="flex flex-col justify-between h-full">
              <section>
                <ServiceBadge text={services.require_pro_text}/>
                <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">{services.title}</h1>
                <p>{services.desc}</p>
                <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
                  {privileges.map(p => {
                    return (<ServicePrivileges key={p.id} icon={p.icon} title={p.title} desc={p.desc}/>)
                  })}
                </ul>
              </section>
              <section>
                <Link to='/payment'>
                  <Button className='btn-with-icon w-full mt-10 mb-[7px]'>
                    <LightningBoltIcon />Upgrade to Pro
                  </Button>
                </Link>
                <p className="main-desc">See all features in <Link className="text-[#006AFF]" to={`/integration/appstore/${services.link}`}>App store Detail</Link></p>
              </section>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}