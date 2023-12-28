import { Badge } from "src/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card";
import { Tag, X } from "lucide-react";
import { Separator } from "src/components/ui/separator";
import { Switch } from "src/components/ui/switch";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { useState,useEffect } from 'react'
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useParams } from "react-router"
import { Skeleton } from "src/components/ui/skeleton";
import { useTranslation } from "react-i18next";

export default function PlanPayment(){
  const { t } = useTranslation()
  const { id } = useParams()
  const { app } = useParams()
  const [addPromo, setAddPromo] = useState(false)
  const [promoAdded, setPromoAdded] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [couponExplanation, setCouponExplanation] = useState('');
  const [subtotal, setSubtotal] = useState(0)
  const [perYear, setPerYear] = useState(true);
  const [discount, setDiscount] = useState(0)

  const { user, auth, logout } = useUser();
  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const checkout_info = useQuery('checkout_info', () => site.get_web_plans(sites?.site_list[0]?.name), {enabled: false});

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !checkout_info.data) {
      checkout_info.refetch();
    }
  }, [user, sites,checkout_info]);

  const plan_details = checkout_info?.data && checkout_info?.data.find(item => item.name === id);

  if(!subtotal){
    if(plan_details?.price_usd){
      setSubtotal(plan_details?.price_usd)
    }
  }

  const vat = Math.floor(subtotal * 0)

  const setCoupon = (coupon) => {
    setPromoAdded(true);
    switch (coupon){
      case 'SAVE10':
        setDiscount(subtotal * 0.1);
        setCouponCode(coupon)
        setCouponExplanation('Discount 10 %')
        break
      case 'REMOVE50':
        setDiscount(50);
        break
      default:
        setDiscount(0)
        setCouponExplanation(t('payment.invalid_code'))
    }
  }

  const total = () => {
    if (discount){
      return ((subtotal - discount) + vat).toLocaleString()
    } else {
      return (subtotal + vat).toLocaleString()
    }
  };

  const removeCouponCode = () => {
    setPromoAdded(false);
    setAddPromo(false);
    setCouponCode('')
    setDiscount(0)
  }
  return (
    <section className="w-full pt-[60px]">
      <div className="flex items-center gap-x-3">
        <Link to='/'>
          <ArrowLeft />
        </Link>
        <h1 className="main-heading">{t('payment.title')}</h1>
      </div>
      <section className="py-10 px-5">
        <h2 className="main-desc font-medium">{t('payment.subscribe_website')}</h2>
        <div className="mt-3 mb-10 flex gap-x-[10px] items-center">
          {subtotal ? (
            <>
              <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px] inter">฿ {total()}</h1>
              <div>
                <p className="main-desc">{t('payment.per')}</p>
                <p className="main-desc">{t('payment.month')}</p>
              </div>
            </>
          ) : (
            <Skeleton className='h-9 w-1/2 my-3'/>
          )}
        </div>
        <Card className='p-0 shadow-none'>
          <CardHeader className='flex flex-row justify-between px-3 py-6 items-center'>
            <div className="flex gap-x-3 items-center">
              <div className="bg-[#27272A] w-[50px] h-[50px] rounded-md"/>
              <div>
                <CardTitle>{plan_details?.plan}</CardTitle>
                <CardDescription>Discount 10%</CardDescription>
              </div>
            </div>
            {subtotal ? <p className="subheading inter">฿ {subtotal.toLocaleString()}</p> : <Skeleton className='h-3 w-[100px]'/>}
          </CardHeader>
        </Card>

        <Separator className='my-6'/>

        {subtotal ? (
          <table className="w-[calc(100%_-_74px)] relative left-[74px]">
          <thead>
            <tr className="text-left subheading">
              <th className="font-medium">{t('payment.subtotal')}</th>
              <th className="text-right font-medium inter">฿ {subtotal.toLocaleString()}</th>
            </tr>
          </thead>
          <tbody>
            {promoAdded ? (
              <tr className="main-desc">
                <td>
                  <div className="flex my-3 flex-col">
                    <div className="flex gap-x-[10px] items-center text-sm text-[#71717A] p-[10px] bg-zinc-100/80 rounded-sm w-fit">
                      <div className="flex gap-x-1 items-center">
                        <Tag color='#71717A' viewBox='0 0 24 24' width='12' height='12'/>
                        {couponCode}
                      </div>
                      <X color='#71717A' viewBox='0 0 24 24' width='12' height='12' className='cursor-pointer' onClick={removeCouponCode}/>
                    </div>
                    <p className="text-desc mt-[2px]">{couponExplanation}</p>
                  </div>
                </td>
                <td className="text-right inter">- ฿ {discount.toLocaleString()}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan='2'>
                  {addPromo ? (
                    <div className="flex items-center relative">
                      <Input className="my-3 w-full" placeholder={t('payment.enter_coupon')} onChange={e => setCouponCode(e.target.value)} onKeyDown={e => {e.key === 'Escape' && setAddPromo(false)}} onBlur={(e) => {e.target.value == '' && setAddPromo(false)}}/>
                      <Button variant='ghost' className={`hover:bg-transparent text-[#006AFF] absolute right-0 ${couponCode !== '' ? 'visible opacity-1 transition-all duration-200' : 'invisible opacity-0 transition-all duration-200'}`} onClick={() => setCoupon(couponCode)}>{t('payment.apply')}</Button>
                    </div>
                  ) : (
                    <Button className="my-3" variant='secondary' onClick={() => setAddPromo(true)}>{t('payment.add_promo')}</Button>
                  )}
                </td>
              </tr>
            )}
            <tr className="main-desc">
              <td>VAT (7%)</td>
              <td className="text-right inter">฿ {vat}</td>
            </tr>
          </tbody>
        </table>
        ) : (
          <div  className="w-[calc(100%_-_74px)] relative left-[74px] flex flex-col gap-y-3">
            <Skeleton className='h-4 w-full'/>
            <Skeleton className='h-4 w-full'/>
            <Skeleton className='h-4 w-full'/>
          </div>
        )}

        <Separator className='my-6'/>

        {subtotal ? (
          <table className="w-[calc(100%_-_74px)] relative left-[74px]">
            <tr className="text-left subheading">
              <th className="font-bold">{t('payment.total')}</th>
              <th className="text-right font-bold inter">฿ {total()}</th>
            </tr>
          </table>
        ) : (
          <div className="w-[calc(100%_-_74px)] relative left-[74px] flex flex-col gap-y-3">
            <Skeleton className='h-4 w-full'/>
          </div>
        )}
      </section>
    </section>
  )
}