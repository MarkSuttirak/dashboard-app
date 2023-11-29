import { Badge } from "src/components/ui/badge"
import { ServiceBadge } from '../../components/sidebar/serviceBadge'
import { Switch } from "src/components/ui/switch";
import { useState } from 'react'
import { Button } from "src/components/ui/button";
import { CheckCircledIcon, CrossCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export default function FreePricing(){
  const [perYear, setPerYear] = useState(false);
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
        <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px]">General</h1>
        <p className="main-desc mt-4">Package for small businesses or personal use.</p>

        <div className='mt-6 flex flex-col gap-y-[18px]'>
          <div className='flex gap-x-2 items-center'>
            <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">Free</h1>
            <p className="main-desc">Forever</p>
          </div>
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