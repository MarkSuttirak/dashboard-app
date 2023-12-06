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

export default function PricingEstimate({recurringFee, oneTimeFee, monthlyCost, estimatedCost}){
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='ghost' className='subheading font-semibold'>
          View price breakdown
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='mt-6 mb-12 font-semibold text-3xl text-center'>Pricing estimation</DialogTitle>
          <DialogDescription>
            <>
              <h2 className="text-base text-[#09090B] font-semibold">Recurring Fees</h2>
              <div className="flex flex-col gap-6">
                {recurringFee.filter(data => data.price > 0).map(data => (
                  <div className="flex items-center justify-between">
                    <p className="main-desc">{data.title}</p>
                    <p className="subheading flex flex-col justify-end">
                      <div className="flex gap-x-2 items-center">
                        <p className="line-through text-[#71717A] text-xs font-medium"> ฿{(data.price * 12).toLocaleString()}</p> 
                        <p className="text-[#EF4444] text-base font-semibold"> ฿{((data.price * 12) * 0.9).toLocaleString()}/month</p>
                      </div>
                      <span className="text-xs flex justify-end">(Billed annually)</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="flex flex-col gap-6">
                {oneTimeFee.map(data => (
                  <div className="flex items-center justify-between">
                    <p className="main-desc">{data.title}</p>
                    <p className="subheading flex flex-col justify-end">
                      <div className="flex gap-x-2 items-center">
                        <p className="line-through text-[#71717A] text-xs font-medium"> ฿{(data.price * 12).toLocaleString()}</p> 
                        <p className="text-[#EF4444] text-base font-semibold"> ฿{((data.price * 12) * 0.9).toLocaleString()}/month</p>
                      </div>
                      <span className="text-xs flex justify-end">(Billed annually)</span>
                    </p>
                  </div>
                ))}
              </div> */}
            </>
          </DialogDescription>
        </DialogHeader>
        <Separator className='my-6'/>
        <DialogFooter>
          <div className='flex flex-col w-full'>
            <div className="flex justify-between items-center">
              <h2 className="subheading">Monthly cost:</h2>
              <p className="main-desc">฿{monthlyCost || 0}/month</p>
            </div>
            <div className="flex justify-between items-center">
              <h2>Estimated cost to get started:</h2>
              <p>฿{estimatedCost || 0}/month</p>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}