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

export default function PricingEstimate({estimated, data, monthlyCost, estimatedCost}){
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='ghost' className='subheading font-semibold'>
          View price breakdown
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pricing estimation</DialogTitle>
          <DialogDescription>
            <>
              <h2>Test</h2>
              <div>
                <p></p>
                <p>฿12000/month</p>
              </div>
            </>
          </DialogDescription>
        </DialogHeader>
        <Separator className='my-6'/>
        <DialogFooter>
          <div className='flex flex-col w-full'>
            <div className="flex justify-between items-center">
              <h2>Monthly cost:</h2>
              <p>฿{monthlyCost || 0}/month</p>
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