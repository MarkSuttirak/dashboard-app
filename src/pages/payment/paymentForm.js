import { Separator } from "src/components/ui/separator";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { BillingAddressForm } from "src/components/billingAddressForm";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router"
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useTranslation } from "react-i18next";

export default function PaymentForm(){
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { id } = useParams()
  const { app } = useParams()

  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const onPaymentSubmit = async () => {
    try {
      if(app == 'plan'){
        await site.change_plan(sites.site_list[0].name,id);
        navigate(`/checkout/${app}/${id}`)
      }
      else{
        await site.create_app_subscription(app,sites.site_list[0].name,id);
        navigate(`/checkout/${app}/${id}`)
      }
    } catch (error) {
      // Handle error here
    }
  }

  return (
    <section className="w-full h-screen p-[60px] overflow-auto" style={{boxShadow:"-20px 0px 30px -4px rgba(0, 0, 0, 0.04)"}}>
      <h2 className="secondary-heading">{t('billing_info')}</h2>
      <p className="main-desc">{t('billing_info_desc')}</p>

      <Separator className='my-6'/>

      <BillingAddressForm onSubmitForm={() => onPaymentSubmit()} submitText={(<>
        <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
        {t('pro_privileges.continue')}
      </>)}/>

      <p className="main-desc mt-6">By clicking 'Continue' you agree to authorize payments pursuant to <Link className="text-[#006AFF]">Privacy Policy</Link>.</p>
    </section>
  )
}