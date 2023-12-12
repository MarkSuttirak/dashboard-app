import PaymentInfo from "./paymentInfo";
import PaymentForm from "./paymentForm";
import PlanPayment from "./planPayment";
import { useParams } from "react-router";



export default function PaymentPage(){
  const { app } = useParams();
  let paymentComponent;
  if (app === 'plan') {
    paymentComponent = <PlanPayment />;
  } else {
    paymentComponent = <PaymentInfo />;
  }


  return (
    <div className="dashboard-container flex gap-x-10">
      {paymentComponent}
      <PaymentForm />
    </div>
  )
}