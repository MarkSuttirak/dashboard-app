import { Card } from "src/components/ui/card";
import thaiqrpayment from "src/img/thai-qr-payment.svg"
import promptpayqr from "src/img/promptpay-qr.png"
import { Button } from "src/components/ui/button";
import { Copy } from "lucide-react";

export default function CheckoutScan(){
  return (
    <section className="w-full">
      <Card className='p-10 shadow-none'>
        <div className="flex gap-x-4 items-center justify-center mb-6">
          <img src={thaiqrpayment} className="w-fit"/>
          <div>
            <h2 className="domain-heading">Zaviago company</h2>
            <Button variant='link' className='btn-with-icon p-0 text-base'>
              215-0-91844-5
              <Copy viewBox="0 0 24 24" width='16' height='16'/>
            </Button>
          </div>
        </div>

        <img src={promptpayqr} />

        <p className="main-desc text-center mt-6">Scan to pay</p>
      </Card>
    </section>
  )
}