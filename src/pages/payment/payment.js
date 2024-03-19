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
    <div className="dashboard-container flex flex-col md:flex-row md:gap-2.5 lg:gap-10">
      {paymentComponent}
      <PaymentForm />
    </div>
  )
}