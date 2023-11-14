import { ChevronDownIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons"
import { Users, Zap } from "lucide-react"
import { Separator } from "../../components/ui/separator";
import VerticalLine from "src/components/drawLine";
import { Button, buttonVariants } from "../../components/ui/button"

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
  const { user, auth, logout } = useUser();

  const navigate = useNavigate();

  const [numOfAdmin, setNumOfAdmin] = useState(14)
  const [numOfCustomers, setNumOfCustomers] = useState(2544)

  useEffect(() => {
    if (auth?.onboarding.site_created === false) {
      navigate('/dashboard/instance-configuration');
    }
  }, [auth?.onboarding.site_created]);

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });


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
      <h2 className="secondary-heading">Subscription for your team</h2>
      <div className="free-trial">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[39px] font-semibold text-[#151515]">Free trial</h1>
            <p className="secondary-heading">{sites?.site_list[0].name}</p>
          </div>

          <Button variant='secondary' className='btn-with-icon leading-5' onClick={() => window.location.href = `/dashboard/settings/plan-upgrade`}>
            <Zap viewBox='0 0 24 24' width='16' height='16'/>
            Upgrade to Pro
            <VerticalLine color='#E4E4E7' height="80%" size={1}/>
            <ChevronDownIcon />
          </Button>
        </div>

        <div className="text-desc flex gap-x-4 items-center mt-10">
          <p className="flex items-center gap-x-1 text-sm"><Users viewBox='0 0 24 24' width='16' height='16' /> {numOfAdmin} admin {numOfAdmin == 1 ? 'user' : 'users'}</p>
          <p className="flex items-center gap-x-1 text-sm"><StarIcon /> {numOfCustomers >= 1000000 ? `${(numOfCustomers / 1000000).toFixed(1)}m` : numOfCustomers >= 1000 ? `${(numOfCustomers / 1000).toFixed(1)}k` : numOfCustomers} {numOfCustomers == 1 ? "customer" : "customers"}</p>
        </div>
      </div>

      <Separator className='my-6'/>

      <h1 className="secondary-heading">Team billing information</h1>
     
      {billingAddress ? (
        <BillingAddressForm billingAddress={billingAddress.message}/>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}