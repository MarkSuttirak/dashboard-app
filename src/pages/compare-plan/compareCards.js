import { Badge } from "src/components/ui/badge"
import { ServiceBadge } from '../../components/sidebar/serviceBadge'
import { Switch } from "src/components/ui/switch";
import { useState } from 'react'
import { Button } from "src/components/ui/button";
import { CheckCircledIcon, CrossCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { XCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CompareCards(){
  const [perYear, setPerYear] = useState(false);

  const proPrivileges = ['Everything in Free!', 'Unlimited Quota', 'Collaborative workspace', '1 teammate slot', 'Priority support']
  const freePrivileges = [
    {
      privilege:'Individual use',
      available:'full'
    },
    {
      privilege:'All basic applications',
      available:'full'
    },
    {
      privilege:'1 Free web page',
      available:'limited'
    },
    {
      privilege:'30 product slots',
      available:'limited'
    },
    {
      privilege:'collect 30 orders/month',
      available:'none'
    }
  ]

  const handlePerYear = () => {
    setPerYear(!perYear)
  }

  return (
    <section className="flex gap-x-6 justify-center mt-[44px] items-center">
      <div className="px-10 py-6 bg-white border-[3px] border-[#18181B] rounded-xl w-[400px] h-fit">
        <ServiceBadge text='Recommended'/>
        <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px]">Professional</h1>
        <p className="main-desc mt-4">Upgrade package to Pro to enjoy unrestricted access to everything for you and your friends you and your friends</p>

        <div className='mt-6 flex flex-col gap-y-[18px]'>
          <div className='flex gap-x-3 items-center'>
            <Switch onCheckedChange={handlePerYear} />
            <Badge variant='outline'>Yearly save - ฿ 1,500</Badge>
          </div>
          <div className='flex gap-x-2 items-center'>
            <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">{perYear ? '฿ 7,500' : '฿ 750'}</h1>
            <div>
              <p className="main-desc">per</p>
              <p className="main-desc">{perYear ? 'year' : 'month'}</p>
            </div>
          </div>
        </div>

        <Link to='/payment'>
          <Button className='btn-with-icon my-6 w-full'>
            <LightningBoltIcon />
            Upgrade to Pro
          </Button>
        </Link>

        <div className="flex flex-col gap-y-4">
          {proPrivileges.map(p => (
            <div className="flex items-center gap-x-2 subheading font-medium">
              <CheckCircledIcon color='#2CB216'/>
              {p}
            </div>
          ))}
        </div>
      </div>
      <div className="px-10 py-6 bg-white border border-[#E4E4E7] rounded-xl w-[340px] h-fit">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl tracking-[-0.6px] text-[#18181B] font-semibold">General</h1>
          <Badge className='bg-[#ECFDF3] hover:bg-[#ECFDF3] text-[#2CB216] rounded-full shadow-none font-normal text-xs'>
            Your Plan Now
          </Badge>
        </div>
        <p className="main-desc mt-4">Package for small businesses or personal use.</p>

        <div className='flex gap-x-2 items-center mt-6 mb-5'>
          <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">Free</h1>
          <p className="main-desc">Forever</p>
        </div>

        <div className="flex flex-col gap-y-4">
          {freePrivileges.map(p => (
            <div className={`flex items-center gap-x-2 text-sm font-medium ${p.available === 'limited' ? 'text-[#71717A]' : p.available === 'none' ? 'text-[#EF4444]' : 'text-[#18181B]'}`}>
              {p.available !== 'none' ? (
                <CheckCircledIcon color={p.available === 'full' ? '#2CB216' : '#71717A'}/>
              ) : (
                <CrossCircledIcon color='#EF4444'/>
              )}
              {p.privilege}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}