import { Separator } from "src/components/ui/separator";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { BillingAddressForm } from "src/components/billingAddressForm";
import { useNavigate } from "react-router-dom";

export default function PaymentForm(){
  const navigate = useNavigate()
  return (
    <section className="w-full h-screen p-[60px]" style={{boxShadow:"-20px 0px 30px -4px rgba(0, 0, 0, 0.04)"}}>
      <h2 className="secondary-heading">Billing information</h2>
      <p className="main-desc">Please ensure that the entered information is correct. Once the system is in progress, you will not be able to edit any information on the tax invoice.</p>

      <Separator className='my-6'/>

      <BillingAddressForm onSubmitForm={() => navigate('/checkout')} submitText={(<>
        <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
        Continue
      </>)}/>

      <p className="main-desc mt-6">By clicking 'Continue' you agree to authorize payments pursuant to <Link className="text-[#006AFF]">Privacy Policy</Link>.</p>
    </section>
  )
}