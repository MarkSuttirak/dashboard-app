import PaymentInfo from "./paymentInfo";
import PaymentForm from "./paymentForm";
import Payment from "src/components/paymentSec";
import { useNavigate } from "react-router-dom";

export default function PaymentPage(){
  const navigate = useNavigate()
  return (
    <Payment linkBack={() => navigate('/')} className="mt-[44px] flex gap-x-10">
      <PaymentInfo />
      <PaymentForm />
    </Payment>
  )
}