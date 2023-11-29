import { Badge } from "src/components/ui/badge"
import { ServiceBadge } from '../../components/sidebar/serviceBadge'
import { Switch } from "src/components/ui/switch";
import { useState } from 'react'
import { Button } from "src/components/ui/button";
import { CheckCircledIcon, CrossCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function ProPricing(){
  const [perYear, setPerYear] = useState(false);

  const proPrivileges = ['Everything in Free!', 'Unlimited Quota', 'Collaborative workspace', '1 teammate slot', 'Priority support']

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
    </section>
  )
}