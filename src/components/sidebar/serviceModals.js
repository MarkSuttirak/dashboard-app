import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { serviceMenus } from "./serviceMenus";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ServicePrivileges from "./servicePrivileges";
import { ServiceBadge } from "./serviceBadge";
import DrawLine from "../drawLine";

export default function ServiceModals(){
  return (
    <>
      {serviceMenus.map((d, index) => (
        <div className="nav-btns add-ons">
          <Dialog key={index}>
            <DialogTrigger>{d.icon}</DialogTrigger>
            <DialogContent className='p-0 border-0 max-w-4xl'>
              <DialogHeader className='flex-row'>
                <DialogTitle className='relative'>
                  <img src={d.image} className='rounded-l-lg h-full w-[800px]'/>

                  <div className="absolute left-5 bottom-5 flex gap-x-2 items-center">
                    <Button variant='link' className='text-white text-xs p-0 h-fit'>Privacy Policy</Button>
                    <DrawLine color='#FFF' width='1px' height='14px'/>
                    <Button variant='link' className='text-white text-xs p-0 h-fit'>Contact us</Button>
                  </div>
                </DialogTitle>
                <DialogDescription className='px-10 pt-6 pb-10 shadow-lg'>
                  <div className="flex flex-col justify-between h-full">
                    <section>
                      <ServiceBadge text={d.require_pro_text}/>
                      <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">{d.title}</h1>
                      <p>{d.desc}</p>
                      <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
                        {d.privileges.map(p => (
                          <ServicePrivileges icon={p.icon} title={p.title} desc={p.desc}/>
                        ))}
                      </ul>
                    </section>
                    <section>
                      <Button className='btn-with-icon w-full mt-10 mb-[7px]'>
                        <LightningBoltIcon />Upgrade to Pro
                      </Button>
                      <p className="main-desc">See all features in <Link className="text-[#006AFF]" to={d.link}>App store Detail</Link></p>
                    </section>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  )
}