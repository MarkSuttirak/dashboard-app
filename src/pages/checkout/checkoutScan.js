import thaiqrpayment from "src/img/thai-qr-payment.svg"
import promptpayqr from "src/img/promptpay-qr.png"
import { Button } from "src/components/ui/button";
import { Copy } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster"

export default function CheckoutScan(){
  const { toast } = useToast()

  const accNum = '215-0-91844-5'
  const copyAcc = () => {
    navigator.clipboard.writeText(accNum);
    toast({
      title: 'Copied account number'
    })
  }

  return (
    <section className="w-full pt-[60px]">
      <div className="flex items-center gap-x-3">
        <Link to={-1}>
          <ArrowLeft />
        </Link>
        <h1 className="main-heading">Payment</h1>
      </div>
      <div className="p-10 mt-10">
        <div className="flex gap-x-4 items-center justify-center mb-6">
          <img src={thaiqrpayment} className="w-fit"/>
          <div>
            <h2 className="domain-heading">Zaviago company</h2>
            <Button variant='link' className='btn-with-icon p-0 text-base' onClick={copyAcc}>
              {accNum}
              <Copy viewBox="0 0 24 24" width='16' height='16'/>
            </Button>

            <Toaster />
          </div>
        </div>

        <img src={promptpayqr} />

        <p className="main-desc text-center mt-6">Scan to pay</p>
      </div>
    </section>
  )
}