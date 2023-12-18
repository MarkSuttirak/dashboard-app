import React, {useState} from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import upgradeProBg from 'src/img/upgrade-pro-bg.png'
import { ServiceBadge } from '../sidebar/serviceBadge'
import ServicePrivileges from '../sidebar/servicePrivileges'
import { Link } from 'react-router-dom'
import { BellIcon, LightningBoltIcon, EyeNoneIcon, LockOpen1Icon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { Badge } from '../ui/badge'
import DrawLine from "../drawLine";
import { Heart, PartyPopper, ThumbsUp, UserCircle, UserPlus } from 'lucide-react'

export default function UpgradeProModal(){
  const [openModal, setOpenModal] = useState(false)
  const [perYear, setPerYear] = useState(false);

  const handleCloseModal = () => {
    if (openModal){
      setOpenModal(false);
      setTimeout(() => {
        setPerYear(false)
      }, 100)
    } else {
      setOpenModal(true);
    }
  }

  const handlePerYear = () => {
    setPerYear(!perYear)
  }

  const privileges = [
    {
      icon:<PartyPopper className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'Everything in Free!',
      desc:'Unlock every application at once'
    },
    {
      icon:<LockOpen1Icon className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'Unlimited quota',
      desc:'No limited orders, pages, customers etc.'
    },
    {
      icon:<ThumbsUp className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'Collaborative workspace',
      desc:'Enable team features'
    },
    {
      icon:<UserPlus className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'1 team member',
      desc:'Free 1 teammate slot'
    },
    {
      icon:<UserCircle className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'Super Admin',
      desc:'Can access billing and members'
    },
    {
      icon:<Heart className="mt-1 stroke-[1.5] text-[#09090B] h-5 w-5"/>,
      title:'Priority support',
      desc:'Response within 4 hours'
    },
  ]

  return (
    <Dialog open={openModal} onOpenChange={handleCloseModal}>
      <DialogTrigger>
        <Button variant='ghost' className='text-[#006AFF] hover:text-[#006AFF] hover:bg-transparent gap-x-2 text-xs flex items-center font-normal'>
          <LightningBoltIcon color='#006AFF'/>
          Upgrade to Pro
        </Button>
      </DialogTrigger>
      <DialogContent className='p-0 border-0 max-w-4xl'>
        <DialogHeader className='flex-row'>
          <DialogTitle>
            <img src={upgradeProBg} className='rounded-l-lg h-full w-[700px] object-cover'/>

            <div className="absolute left-5 bottom-5 flex gap-x-2 items-center">
              <Button variant='link' className='text-white text-xs p-0 h-fit'>Support</Button>
              <DrawLine color='#FFF' width='1px' height='14px'/>
              <Button variant='link' className='text-white text-xs p-0 h-fit'>Contact us</Button>
            </div>
          </DialogTitle>
          <DialogDescription className='pb-10 shadow-lg'>
            <div className="flex flex-col justify-between h-full px-10 pt-6">
              <section>
                <div className='flex items-center justify-between mb-2'>
                  <h1 className="main-heading tracking-[-0.6px]">Professional</h1>
                  <ServiceBadge text='Recommended'/>
                </div>
                <p className='text-[#71717A]'>Say hello to the world and let readers know what your blog is all about.</p>

                <div className='mt-6 flex flex-col gap-y-[18px]'>
                  <div className='flex gap-x-3 items-center inter'>
                    <Switch onCheckedChange={handlePerYear} />
                    <Badge variant='outline'>Yearly save - ฿ 1,500</Badge>
                  </div>
                  <div className='flex gap-x-2'>
                    <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px] inter">{perYear ? '฿ 7,500' : '฿ 750'}</h1>
                    <p className='text-[#71717A] text-base'>{perYear ? 'Year / User' : 'Month / User'}</p>
                  </div>
                </div>

                <ul className="mt-8 gap-y-[17px] flex flex-col px-2 mb-10 h-[240px] overflow-auto">
                  {privileges.map(p => (
                    <ServicePrivileges icon={p.icon} title={p.title} desc={p.desc}/>
                  ))}
                </ul>
              </section>
              <section>
                <Link to='/payment/plan/pro'>
                  <Button className='btn-with-icon w-full mb-[7px]'>
                    <LightningBoltIcon />
                    Upgrade to Pro
                  </Button>
                </Link>
                <p className="main-desc">See more details at <Link className="text-[#006AFF]" to='/dashboard/compare-plan'>Compare Plans & Features</Link></p>
              </section>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}