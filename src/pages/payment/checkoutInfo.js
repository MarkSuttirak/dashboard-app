import { Separator } from "src/components/ui/separator";
import { Tag } from "lucide-react";
import { Checkbox } from "src/components/ui/checkbox";
import { Button } from "src/components/ui/button";
import { Wallet } from "lucide-react";
import { useState } from 'react'

export default function CheckoutInfo({paymentConfirm, setPaymentConfirm}){
  const [makePayment, setMakePayment] = useState(false)
  const [couponExplanation, setCouponExplanation] = useState('Discount 10%');

  const subtotal = 750;
  const vat = Math.floor(subtotal * 0.07);
  let discount = subtotal * 0.1;

  const total = () => {
    if (discount){
      return ((subtotal - discount) + vat).toLocaleString()
    } else {
      return (subtotal + vat).toLocaleString()
    }
  };

  return (
    <section className="w-full">
      <h2 className="secondary-heading">Purchase detail</h2>
      <p className="main-desc">If you need to edit billing information of tax invoice issurance or modify your order, please press 'Back' button to cancel the current order.</p>

      <Separator className='my-6'/>

      <h2 className="main-desc">Subscribe to Professional together</h2>
      <div className="mt-3 flex gap-x-[10px] items-center">
        <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ {total()}</h1>
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
            <th className="text-right font-medium">฿ {subtotal}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="main-desc">
            <td>
              <div className="flex my-3 flex-col">
                <div className="flex gap-x-[10px] items-center text-sm text-[#71717A] p-[10px] bg-zinc-100/80 rounded-sm w-fit">
                  <div className="flex gap-x-1 items-center">
                    <Tag color='#71717A' viewBox='0 0 24 24' width='12' height='12'/>
                    SAVE10
                  </div>
                </div>
                <p className="text-desc mt-[2px]">{couponExplanation}</p>
              </div>
            </td>
            <td className="text-right">- ฿ {discount}</td>
          </tr>
          <tr className="main-desc">
            <td>VAT (7%)</td>
            <td className="text-right">฿ {vat}</td>
          </tr>
        </tbody>
      </table>

      <Separator className='my-6'/>

      <table className="w-full relative">
        <tr className="text-left subheading">
          <th className="font-bold">Total</th>
          <th className="text-right font-bold">฿ {total()}</th>
        </tr>
      </table>

      <div className="mt-10">
        <div className="flex gap-x-2 mb-5">
          <Checkbox id='submit-order' className='mt-1' onCheckedChange={e => setMakePayment(e)}/>
          <label htmlFor='submit-order' className="main-desc">
            If the payment has been made, please click the 'Continue' button below to proceed.
          </label>
        </div>
        <Button type='submit' className='btn-with-icon w-full' onClick={() => setPaymentConfirm(true)} disabled={!makePayment}>
          <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
          Continue
        </Button>
      </div>
    </section>
  )
}