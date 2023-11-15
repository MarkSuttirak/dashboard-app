import Topbar from "src/components/topbar/topbar";
import CheckoutScan from "./checkoutScan";
import Payment from "src/components/paymentSec";
import CheckoutInfo from "./checkoutInfo";

export default function CheckoutPage(){
  return (
    <Payment>
      <CheckoutScan />
      <CheckoutInfo />
    </Payment>
  )
}