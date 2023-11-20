import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input"
import { user as user_api } from "src/client/api";
import { BillingAddressForm } from "../../components/billingAddressForm"

// This can come from your database or API.
const defaultValues = {
  theme: "light",
}

export default function BillingPlan() {
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
      <h1 className="secondary-heading">Team billing information</h1>

      {billingAddress ? (
        <BillingAddressForm billingAddress={billingAddress.message}/>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}