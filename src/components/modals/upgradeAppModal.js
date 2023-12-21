import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"
import { ArrowBigUpDash, BadgeCheck, Key, PlusCircle, CheckCircle2 } from "lucide-react"
import { useState } from 'react'

export default function UpgradeAppModal({plans}){
  const [open, setOpen] = useState(false)

  console.log(plans);

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='btn-with-icon'>
          <ArrowBigUpDash />Upgrade
        </Button>
      </DialogTrigger>
      <DialogContent className='min-w-[600px]'>
        <DialogHeader className='secondary-heading'>Select plan</DialogHeader>
        <section className="flex gap-x-4">


        {Array.isArray(plans) && plans.length > 0 && (
            plans.map(item => (
              <label key={item.name} htmlFor={`pro-${item.name}`} className="w-full" >
                <input
                  type="radio"
                  className="checkbox-card-input"
                  name='plan'
                  id={`pro-${item.name}`}
                />
                <span className="subheading border checkbox-card py-4 px-6">
                  <div className="w-full">
                    <h2 className='subheading font-bold'>{item.name}</h2>
                    <p className='text-xs text-[#71717A] tracking-[0.12px] mt-1 mb-3'>{item.price}</p>

                    {item.features.map((feature, index) => (
                      <div key={index} className='flex gap-x-2 text-sm py-[6px]'>
                        <CheckCircle2 className="h-4 w-4"/>
                        {feature}
                      </div>
                    ))}
                  </div>
                </span>
              </label>
            ))
          )}

          

        </section>

        <DialogFooter>
          <div className="flex justify-between w-full">
            <DialogClose>
              <Button variant='outline'>Cancel</Button>
            </DialogClose>
            <Button>Select plan</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}