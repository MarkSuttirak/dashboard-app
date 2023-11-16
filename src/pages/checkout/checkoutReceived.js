import { Card, CardContent, CardFooter, CardHeader } from "src/components/ui/card";
import { Link } from "react-router-dom";
import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Lottie from "lottie-react";
import receivedInfo from 'src/components/received-info-check.json'

export default function CheckoutReceived(){
  return (
    <>
      <div className="page-section max-w-[580px] mx-auto">
        <Card className='justify-center p-0'>
          <CardHeader className='p-10'>
            <Lottie animationData={receivedInfo} loop={false} style={{width:"128px",height:"128px",margin:"auto"}}/>
            <h1 className="text-[36px] font-extrabold tracking-[-0.9px] leading-[40px] text-center text-[#09090B]">We have received your information 🎉</h1>
            <p className="mt-[12px!important] secondary-desc text-center">Thank you for notifying us of your payment. We will investigate quickly within 6 hours.</p>
            <p className="main-desc mt-[24px!important] text-center">
              You can go to "Setting / Billing & Plan / Invoice" to track status your order. If the status is not updated Please <Link className="text-[#006AFF]">Contact us</Link>
            </p>
          </CardHeader>

          <Separator />

          <CardContent className='p-10'>
            <h2 className="domain-heading mb-4">Invoice detail</h2>
            <table className="w-full table-invoice-detail">
              <tbody>
                <tr className="main-desc my-4">
                  <td className="text-[#424242]">Invoice No.</td>
                  <td className="text-right">INV001</td>
                </tr>
                <tr className="main-desc">
                  <td className="text-[#424242]">Date</td>
                  <td className="text-right">24-07-23</td>
                </tr>
                <tr className="main-desc">
                  <td className="text-[#424242]">Status</td>
                  <td className="text-right">In progress</td>
                </tr>
                <tr className="main-desc">
                  <td className="text-[#424242]">Amount</td>
                  <td className="text-right">฿727.00</td>
                </tr>
              </tbody>
            </table>
          </CardContent>

          <CardFooter className='pb-10 px-10'>
            <Button className='btn-with-icon w-full' onClick={() => window.location.href="/"}>
              <BadgeCheck viewBox="0 0 24 24" width='16' height='16'/>
              Back to Workspace
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}