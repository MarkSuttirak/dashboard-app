import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

export default function PricingEstimate({recurringFee, oneTimeFee, totalCost, estimatedCost, isAnnual}){
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='ghost' className='subheading font-semibold'>
          View price breakdown
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='mt-4 mb-12 font-semibold text-3xl text-center'>Pricing estimation</DialogTitle>
          <DialogDescription>
            <>
              {recurringFee.length > 0 ? <h2 className="text-base text-[#09090B] font-semibold">Recurring Fees</h2> : null}
              <div className="flex flex-col gap-6">
                {recurringFee.filter(data => data.price > 0).map(data => (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="subheading">{data.title}</p>
                      <p className="main-desc">{data.desc}</p>
                    </div>
                    <p className="subheading flex flex-col justify-end">
                      <div className="flex gap-x-2 items-center">
                        {isAnnual ? (
                          <>
                            <p className="line-through text-[#71717A] text-xs font-medium inter"> ฿{(data.price * 12).toLocaleString()}</p> 
                            <p className="text-[#EF4444] text-base font-semibold inter"> ฿{((data.price * 12) * 0.9).toLocaleString()}/year</p>
                          </>
                        ) : <p className="text-base font-semibold inter">฿{(data.price).toLocaleString()}/month</p>}
                      </div>
                      <span className="text-xs flex justify-end">(Billed monthly)</span>
                    </p>
                  </div>
                ))}
              </div>

              {oneTimeFee.length > 0 ? <h2 className="text-base text-[#09090B] font-semibold mt-12 mb-4">One-Time Fees (Required)</h2> : null}
              <div className="flex flex-col gap-6">
                {oneTimeFee.filter(data => data.price > 0).map(data => (
                  <div className="flex items-center justify-between">
                    <p className="main-desc">{data.title}</p>
                    <p className="subheading flex flex-col justify-end">
                      <div className="flex gap-x-2 items-center justify-end">
                        <p className="text-base font-semibold inter">฿{(data.price).toLocaleString()}</p>
                      </div>
                    </p>
                  </div>
                ))}
              </div>
            </>
          </DialogDescription>
        </DialogHeader>
        <Separator className='my-6'/>
        <DialogFooter>
          <div className='flex flex-col w-full gap-y-6'>
            <div className="flex justify-between items-center bg-[#F4F4F5] px-6 py-3 rounded-md">
              <h2 className="text-base font-semibold text-[#09090B]">Monthly cost:</h2>
              {isAnnual ? (
                <div className="flex gap-x-2 items-center">
                  <p className="line-through text-[#71717A] text-xs font-medium inter"> ฿{(totalCost * 12).toLocaleString()}</p> 
                  <p className="text-[#EF4444] text-sm font-semibold inter"> ฿{((totalCost * 12) * 0.9).toLocaleString()}/year</p>
                </div>
              ) : <p className="main-desc">฿{(totalCost).toLocaleString() || 0}/month</p>}
            </div>
            <div className="flex justify-between items-center bg-[#F4F4F5] px-6 py-3 rounded-md">
              <h2 className="text-base font-semibold text-[#09090B]">Estimated cost to get started:</h2>
              <p className="inter main-desc">฿{estimatedCost.toLocaleString() || 0}</p>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}