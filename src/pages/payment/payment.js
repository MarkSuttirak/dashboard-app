import PaymentInfo from "./paymentInfo";
import PaymentForm from "./paymentForm";

export default function PaymentPage(){
  return (
    <div className="dashboard-container flex gap-x-10">
      <PaymentInfo />
      <PaymentForm />
    </div>
  )
}