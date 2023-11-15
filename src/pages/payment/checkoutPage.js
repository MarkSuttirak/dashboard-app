import CheckoutScan from "./checkoutScan";
import Payment from "src/components/paymentSec";
import CheckoutInfo from "./checkoutInfo";
import { useState } from 'react'
import CheckoutConfirm from "./checkoutConfirm";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage(){
  const navigate = useNavigate()
  const [paymentConfirm, setPaymentConfirm] = useState(false)

  return (
    <>
      {paymentConfirm ? (
        <div className="max-w-[500px] mx-auto">
          <Payment linkBack={() => setPaymentConfirm(false)} className="mt-[44px]">
            <CheckoutConfirm />
          </Payment>
        </div>
      ) : (
        <Payment linkBack={() => navigate('/payment')} className="mt-[44px] flex gap-x-[120px]">
          <CheckoutScan />
          <CheckoutInfo paymentConfirm={paymentConfirm} setPaymentConfirm={setPaymentConfirm}/>
        </Payment>
      )}
    </>
  )
}