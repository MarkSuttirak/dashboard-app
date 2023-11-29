import { Badge } from "src/components/ui/badge"
import { ServiceBadge } from '../sidebar/serviceBadge'
import { Switch } from "src/components/ui/switch";
import { useState } from 'react'
import { Button } from "src/components/ui/button";
import { CheckCircledIcon, CrossCircledIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card"

export default function StarterPricing(){
  const [perYear, setPerYear] = useState(false);

  const privileges = ['2 users', 'Includes 1,000 marketing contacts', 'Up to 3 dashboards, each with 10 reports per dashboard', '1 blog, excluding Zaviago branding', 'Includes 2 paid users']
  const handlePerYear = () => {
    setPerYear(!perYear)
  }

  return (
    <Card className='w-1/3'>
      <CardHeader>
        <CardTitle className='text-3xl tracking-[-0.75px] text-[#18181B] font-semibold flex items-center justify-between'>
          Starter
          <ServiceBadge text='Recommended'/>
        </CardTitle>
        <CardDescription className="main-desc pt-4">Upgrade package to Pro to enjoy unrestricted access to everything for you and your friends you and your friends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='flex gap-x-2 items-center'>
          <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ 750</h1>
          <div>
            <p className="main-desc">per</p>
            <p className="main-desc">month</p>
          </div>
        </div>

        {/* <div className='mt-6 flex flex-col gap-y-[18px]'>
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
        </div> */}

        <a href=''>
          <Button className='btn-with-icon my-6 w-full'>
            <LightningBoltIcon />
            Buy Now
          </Button>
        </a>

        <div className="flex flex-col gap-y-4">
          {privileges.map(p => (
            <div className="flex gap-x-2 subheading font-medium">
              <div className="w-4 mt-[2px]">
                <CheckCircledIcon color='#2CB216' />
              </div>
              <p className="subheading">{p}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}