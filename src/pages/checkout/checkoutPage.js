import CheckoutScan from "./checkoutScan";
import CheckoutInfo from "./checkoutInfo";
import { useState, useEffect } from 'react'
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import CheckoutConfirm from "./checkoutConfirm";

export default function CheckoutPage(){
  const { id } = useParams()
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)
  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: false
  });

  const checkout_info = useQuery('checkout_info', () => site.get_web_plans(sites?.site_list[0]?.name), {enabled: false});

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !checkout_info.data) {
      checkout_info.refetch();
    }
  }, [user, sites,checkout_info]);

  const plan_details = checkout_info?.data && checkout_info?.data.find(item => item.name === id);

  if(!subtotal){
    if(plan_details?.price_usd){
      setSubtotal(plan_details?.price_usd)
    }
  }

  // const subtotal = 750;
  const vat = Math.floor(subtotal * 0); // Will be multiplied by 0.07
  // let discount = subtotal * 0.1;

  const total = () => {
    if (discount){
      return ((subtotal - discount) + vat).toLocaleString()
    } else {
      return (subtotal + vat).toLocaleString()
    }
  };

  const [paymentConfirm, setPaymentConfirm] = useState(false)

  return (
    <div className="page-container flex md:gap-x-10 flex-col md:flex-row">
      {paymentConfirm ? (
        <div className="max-w-[500px] mx-auto">
          <CheckoutConfirm paymentConfirm={paymentConfirm} setPaymentConfirm={setPaymentConfirm} totalPrice={`฿ ${total()}`}/>
        </div>
      ) : (
        <CheckoutInfo paymentConfirm={paymentConfirm} setPaymentConfirm={setPaymentConfirm} totalPrice={total()} discount={discount} vat={vat} subtotal={subtotal}/>
      )}
    </div>
  )
}