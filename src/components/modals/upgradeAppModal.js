import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"
import { ArrowBigUpDash, BadgeCheck, Key, PlusCircle, CheckCircle2 } from "lucide-react"
import { useState } from 'react'

export default function UpgradeAppModal({plans}){
  const [open, setOpen] = useState(false)

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='btn-with-icon'>
          <ArrowBigUpDash />Upgrade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='secondary-heading'>Select plan</DialogHeader>
        <section className="flex gap-x-4">
          <label htmlFor='pro-one' className="w-full">
            <input
              type="radio"
              className="checkbox-card-input"
              name='plan'
              id='pro-one'
            />
            <span className="subheading border checkbox-card py-4 px-6">
              <div className="w-full">
                <h2 className='subheading font-bold'>Basic</h2>
                <p className='text-xs text-[#71717A] tracking-[0.12px] mt-1'>Free</p>

                <div className='flex gap-x-2 text-sm py-[6px]'>
                  <CheckCircle2 className="h-4 w-4 mt-1"/>
                  Included with all pro plans
                </div>
                <div className='flex gap-x-2 text-sm py-[6px]'>
                  <CheckCircle2 className="h-4 w-4 mt-1"/>
                  Included with all pro plans
                </div>
              </div>
            </span>
          </label>

          <label htmlFor='pro-two' className="w-full">
            <input
              type="radio"
              className="checkbox-card-input"
              name='plan'
              id='pro-two'
            />
            <span className="subheading border checkbox-card py-4 px-6">
              <div className="w-full">
                <h2 className='subheading font-bold'>Business</h2>
                <p className='text-xs text-[#71717A] tracking-[0.12px] mt-1'>฿750/month</p>

                <div className='flex gap-x-2 text-sm py-[6px]'>
                  <CheckCircle2 className="h-4 w-4 mt-1"/>
                  Included with all pro plans
                </div>
                <div className='flex gap-x-2 text-sm py-[6px]'>
                  <CheckCircle2 className="h-4 w-4 mt-1"/>
                  Included with all pro plans
                </div>
              </div>
            </span>
          </label>
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