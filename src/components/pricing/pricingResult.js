import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs"
import BundleSelect from "./bundleSelect"
import { Button } from "../ui/button"
import { Phone } from "lucide-react"

export default function PricingResult({totalMonthly, totalYearly, commitments}){
  return (
    <div className="flex flex-col w-full lg:w-[40%]">
      <Card className='p-10 h-fit'>
        <CardHeader className='px-0 pt-0'>
          <CardTitle className='flex gap-x-[10px] secondary-heading justify-center w-full'>
            <Tabs defaultValue='monthly' className="w-full">
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
                <span className="text-[40px]">฿{totalMonthly.toLocaleString()}</span>/month
              </TabsContent>
              <TabsContent value='annually' className='text-[27px] text-center'>
                <span className="text-[40px]">฿{Math.ceil((totalYearly / 12).toLocaleString())}</span>/month
                <div className="mt-3">
                  <h2 className="secondary-heading">Billed annually</h2>
                  <p className="main-desc font-normal">at ฿{totalYearly}/year</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4 flex-col p-0">
          <h2 className="subheading font-medium">With an annual commitment</h2>
          <div className="flex flex-col gap-y-3">
            {commitments}
          </div>
        </CardContent>
        <CardFooter className='flex flex-col items-start p-0'>
          <Button className='w-full my-6'>Buy Now</Button>
          <p className="main-desc">Offer are available to new Zaviago customers only. If you are eligible, the offer price will be displayed at checkout.</p>
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
  )
}