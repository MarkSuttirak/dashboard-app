import { Separator } from "src/components/ui/separator";
import { Tag } from "lucide-react";
import { Checkbox } from "src/components/ui/checkbox";
import { Button } from "src/components/ui/button";
import { Wallet } from "lucide-react";

export default function CheckoutInfo({paymentConfirm, setPaymentConfirm}){
  return (
    <section>
      <h2 className="secondary-heading">Order detail</h2>
      <p className="main-desc">Update your account settings. Set your preferred language and timezone.</p>

      <Separator className='my-6'/>

      <h2 className="main-desc">Subscribe to Professional together</h2>
      <div className="mt-3 flex gap-x-[10px] items-center">
        <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ 790</h1>
        <div>
          <p className="main-desc">per</p>
          <p className="main-desc">month</p>
        </div>
      </div>

      <Separator className='my-6'/>

      <table className="relative w-full">
        <thead>
          <tr className="text-left subheading">
            <th className="font-medium">Subtotal</th>
            <th className="text-right font-medium">฿ 750</th>
          </tr>
        </thead>
        <tbody>
          <tr className="main-desc">
            <td>
              <div className="flex my-3">
                <div className="flex gap-x-[10px] items-center text-sm text-[#71717A] p-[10px] bg-zinc-100/80 rounded-sm">
                  <div className="flex gap-x-1 items-center">
                    <Tag color='#71717A' viewBox='0 0 24 24' width='12' height='12'/>
                    SAVE10
                  </div>
                </div>
              </div>
            </td>
            <td className="text-right">- ฿ 750</td>
          </tr>
          <tr className="main-desc">
            <td>VAT (7%)</td>
            <td className="text-right">฿ 740</td>
          </tr>
        </tbody>
      </table>

      <Separator className='my-6'/>

      <table className="w-full relative">
        <tr className="text-left subheading">
          <th className="font-bold">Total</th>
          <th className="text-right font-bold">฿ 790</th>
        </tr>
      </table>

      <div className="mt-10">
        <div className="flex gap-x-2 mb-5">
          <Checkbox id='submit-order' className='mt-1'/>
          <label htmlFor='submit-order' className="main-desc">
            After submitting your order, you will be redirected to securely complete your purchase.
          </label>
        </div>
        <Button type='submit' className='btn-with-icon w-full' onClick={() => setPaymentConfirm(true)}>
          <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
          Continue
        </Button>
      </div>
    </section>
  )
}