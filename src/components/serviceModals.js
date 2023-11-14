import { SidebarApp01, SidebarApp02, SidebarApp03, SidebarApp04, SidebarApp05, SidebarApp06, SidebarApp07, SidebarApp08, SidebarApp09, SidebarApp10 } from "./sidebarApps";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog"
import { Badge } from "./ui/badge";
import proplan1 from 'src/img/proplan1.png'
import proplan2 from 'src/img/proplan2.png'
import { Crown } from "lucide-react";
import { useState } from 'react'

export default function ServiceModals(){
  const apps = [<SidebarApp01 />, <SidebarApp02 />, <SidebarApp03 />, <SidebarApp04 />, <SidebarApp05 />, <SidebarApp06 />, <SidebarApp07 />, <SidebarApp08 />, <SidebarApp09 />, <SidebarApp10 />]

  const serviceMenus = [
    {
      icon:<SidebarApp01 />,
      image:proplan1,
      children:(
        <>
          <Badge className='rounded-full text-[#006AFF] bg-[#E5F5FF] shadow-none'>
            <Crown viewBox='0 0 24 24' width='16' height='16' color='#006AFF'/>
            Upgrade pro plan to use this feature
          </Badge>
          <div className="mt-3">
            <h1 className="main-heading tracking-[-0.6px]">Unlock Line CRM to let people engage</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
          </div>
        </>
      )
    },
    {
      icon:<SidebarApp02 />,
      image:proplan2,
      children:(
        <>
          <Badge className='rounded-full text-[#006AFF] bg-[#E5F5FF] shadow-none'>
            <Crown viewBox='0 0 24 24' width='16' height='16' color='#006AFF'/>
            Upgrade pro plan to use this feature
          </Badge>
          <div className="mt-3">
            <h1 className="main-heading tracking-[-0.6px]">Building your website creation with Untitle</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
          </div>
        </>
      )
    }
  ]
  return (
    <>
      {serviceMenus.map((d, index) => (
        <div className="nav-btns add-ons">
          <Dialog key={index}>
            <DialogTrigger>{d.icon}</DialogTrigger>
            <DialogContent className='p-0 border-0 max-w-4xl'>
              <DialogHeader className='flex-row'>
                <DialogTitle>
                  <img src={d.image} className='rounded-l-lg h-full w-[600px]'/>
                </DialogTitle>
                <DialogDescription className='px-10 py-6'>
                  {d.children}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  )
}