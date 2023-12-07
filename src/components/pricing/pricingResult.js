import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs"
import { Button } from "../ui/button"
import { Phone } from "lucide-react"

export default function PricingResult({totalCost, commitments, estimated, estimateButton, isAnnual, setIsAnnual}){
  const EstimatedCost = () => {
    return (
      <div className="mt-[14px] mb-6">
        <h2 className="text-[13px] font-medium">Estimated cost to get started:</h2>
        <h2 className="text-base inter">฿ {typeof estimated !== 'number' ? estimated : estimated.toLocaleString()}</h2>
      </div>
    )
  }
  return (
    <div className="flex flex-col w-full lg:w-[40%]">
      <div className="sticky top-4">
        <Card className='p-10 h-fit'>
          <CardHeader className='px-0 pt-0'>
            <CardTitle className='flex gap-x-[10px] secondary-heading justify-center w-full'>
              <Tabs defaultValue='monthly' className="w-full" onValueChange={() => setIsAnnual(!isAnnual)}>
                <TabsList className="grid w-full grid-cols-2 h-fit mb-6">
                  <TabsTrigger value="monthly" className='flex flex-col'>
                    <h2 className="subheading font-medium">Pay Monthly</h2>
                    <p className="main-desc font-normal">Commit monthly</p>
                  </TabsTrigger>
                  <TabsTrigger value="annually" className='flex flex-col'>
                    <h2 className="subheading font-medium">Pay Yearly</h2>
                    <p className="main-desc font-normal">Commit annually</p>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value='monthly' className='text-[27px] text-center'>
                  <span className="text-[40px] inter">฿{totalCost.toLocaleString()}</span>/month
                  <EstimatedCost />
                </TabsContent>
                <TabsContent value='annually' className='text-[27px] text-center'>
                  <span className="text-[40px] inter">฿{(totalCost * 0.9).toLocaleString()}</span>/month
                  <div className="mt-3">
                    <h2 className="text-base text-[#18181B]">Billed annually</h2>
                    <p className="text-base text-[#18181B] font-semibold">at 
                      <span className="line-through text-[#71717A]"> ฿{(totalCost * 12).toLocaleString()}</span> 
                      <span className="text-[#EF4444]"> ฿{((totalCost * 12) * 0.9).toLocaleString()}/year</span>
                    </p>

                    <p className="text-sm text-[#71717A] font-normal my-2">With an annual commitment</p>
                  </div>
                  <EstimatedCost />
                </TabsContent>
              </Tabs>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-4 flex-col p-0">
            <h2 className="subheading font-medium">Product selections</h2>
            <div className="flex flex-col gap-y-3">
              {commitments}
            </div>
          </CardContent>
          <CardFooter className='flex flex-col items-start p-0'>
            <Button className='w-full my-6'>Buy Now</Button>
            <p className="main-desc">Offer are available to new Zaviago customers only. If you are eligible, the offer price will be displayed at checkout.</p>

            <div className="flex justify-center mt-6 w-full">
              {estimateButton}
            </div>
          </CardFooter>
        </Card>

        <div className="flex flex-col items-center mt-8">
          <p className="main-desc font-medium mb-8">Need help choosing a plan?</p>
          <Button className='btn-with-icon font-bold' variant='ghost'>
            <Phone className="w-4 h-4"/>
            06-4823-6459
          </Button>
        </div>
      </div>
    </div>
  )
}