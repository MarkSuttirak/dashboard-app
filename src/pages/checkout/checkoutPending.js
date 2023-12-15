import { Card, CardContent, CardFooter, CardHeader } from "src/components/ui/card";
import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { MemberContext } from "src/components/provider/memberProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";

export default function CheckoutPending(){
  const { id } = useParams()
  const memberStatus = useContext(MemberContext)
  const navigate = useNavigate()
  const [subtotal, setSubtotal] = useState(0)
  const [discount, setDiscount] = useState(0)

  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const confirm = () => {
    navigate('/');
    memberStatus.change('pending')
  }

  const checkout_info = useQuery('checkout_info', () => site.get_web_plans(sites?.site_list[0]?.name), {enabled: false});
  const plan_details = checkout_info?.data && checkout_info?.data.find(item => item.name === id);

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !checkout_info.data) {
      checkout_info.refetch();
    }
  }, [user, sites,checkout_info]);

  if(!subtotal){
    if(plan_details?.price_usd){
      setSubtotal(plan_details?.price_usd)
    }
  }

  const vat = Math.floor(subtotal * 0);

  const total = () => {
    if (discount){
      return ((subtotal - discount) + vat).toLocaleString()
    } else {
      return (subtotal + vat).toLocaleString()
    }
  };

  return (
    <div className="page-section max-w-[580px] mx-auto">
      <Card className='justify-center p-0'>
        <CardHeader className='p-10'>
          <h1 className="text-[36px] font-extrabold tracking-[-0.9px] leading-[40px] text-center text-[#09090B]">We have sent a link for the payment verification to your LINE account.</h1>
          <p className="main-desc mt-[24px!important] text-center">
            You can go to "Zaviago Line OA" to verify the payment. If the status is not updated, please <a className="text-[#006AFF]" href='https://page.line.me/zaviago'>contact us</a>
          </p>
        </CardHeader>

        <Separator />

        <CardContent className='p-10'>
          <h2 className="domain-heading mb-4">Invoice detail</h2>
          <table className="w-full table-invoice-detail">
            <tbody>
              <tr className="main-desc my-4">
                <td className="text-[#424242]">Invoice No.</td>
                <td className="text-right">INV001</td>
              </tr>
              <tr className="main-desc">
                <td className="text-[#424242]">Date</td>
                <td className="text-right">24-07-23</td>
              </tr>
              <tr className="main-desc">
                <td className="text-[#424242]">Status</td>
                <td className="text-right">In progress</td>
              </tr>
              <tr className="main-desc">
                <td className="text-[#424242]">Amount</td>
                <td className="text-right">฿{total()}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>

        <CardFooter className='pb-10 px-10'>
          <Button className='btn-with-icon w-full' onClick={confirm}>
            <BadgeCheck viewBox="0 0 24 24" width='16' height='16'/>
            Back to Workspace
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}