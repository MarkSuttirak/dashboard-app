import PaymentInfo from "./paymentInfo";
import PaymentForm from "./paymentForm";
import Payment from "src/components/paymentSec";

export default function PaymentPage(){
  return (
    <Payment>
      <PaymentInfo />
      <PaymentForm />
    </Payment>
  )
}