import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input"
import { user as user_api } from "src/client/api";
import { BillingAddressForm } from "../../components/billingAddressForm"
import { Loader2 } from "lucide-react";
import Loading from "src/components/ui/loading";
import { useTranslation } from "react-i18next";

// This can come from your database or API.
const defaultValues = {
  theme: "light",
}

export default function BillingPlan() {
  const { t } = useTranslation()
  const [billingAddress,setbilligAddress]=useState(null)
  const fetchBilling = async()=> {
    console.log( )
    setbilligAddress( await user_api.getBillingInfo() )
    //setbilligAddress(billingAddress.message)
  }
  useEffect(()=>{
    fetchBilling() 
  },[])

  return (
    <>
      <h1 className="secondary-heading">{t('billing_info')}</h1>

      {billingAddress ? (
        <BillingAddressForm billingAddress={billingAddress.message} submitText={t('update_form')} onSettings={true}/>
      ) : (
        <Loading />
      )}
    </>
  )
}