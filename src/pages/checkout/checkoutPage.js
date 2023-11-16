import CheckoutScan from "./checkoutScan";
import CheckoutInfo from "./checkoutInfo";
import { useState } from 'react'
import CheckoutConfirm from "./checkoutConfirm";

export default function CheckoutPage(){
  const [paymentConfirm, setPaymentConfirm] = useState(false)

  return (
    <div className="dashboard-container flex gap-x-10">
      {paymentConfirm ? (
        <div className="max-w-[500px] mx-auto">
          <CheckoutConfirm paymentConfirm={paymentConfirm} setPaymentConfirm={setPaymentConfirm}/>
        </div>
      ) : (
        <>
          <CheckoutScan />
          <CheckoutInfo paymentConfirm={paymentConfirm} setPaymentConfirm={setPaymentConfirm}/>
        </>
      )}
    </div>
  )
}