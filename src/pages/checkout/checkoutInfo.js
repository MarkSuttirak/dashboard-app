import { Separator } from "src/components/ui/separator";
import { Tag } from "lucide-react";
import { Checkbox } from "src/components/ui/checkbox";
import { Button } from "src/components/ui/button";
import { Wallet } from "lucide-react";
import { useState, useEffect } from 'react'
import { useQuery } from "react-query";
import { site } from "../../client/api";
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { useTranslation } from "react-i18next";
import CheckoutScan from "./checkoutScan";

export default function CheckoutInfo({paymentConfirm, setPaymentConfirm, totalPrice, discount, vat, subtotal}){
  const { t } = useTranslation()
  const { id } = useParams()
  const { app } = useParams()
  const [makePayment, setMakePayment] = useState(false)
  const [couponExplanation, setCouponExplanation] = useState('Discount 10%');
  const [verifiedPayment, setVerifiedPayment] = useState(true)

  return (
    <>
      <CheckoutScan verifiedPayment={verifiedPayment}/>
      <section className="w-full h-screen p-6 md:p-[60px]" style={{boxShadow:"-20px 0px 30px -4px rgba(0, 0, 0, 0.04)"}}>
        <h2 className="secondary-heading">{t('purchase_detail')}</h2>
        <p className="main-desc">{t('purchase_detail_desc')}</p>

        <Separator className='my-6'/>

        {verifiedPayment && (
          <div className="flex items-center justify-between mb-3">
            <h2 className="subheading font-medium">{t("payment.payment_notifications.invoice_number")}</h2>
            <p className="subheading font-medium font-inter">INV001</p>
          </div>
        )}
        <h2 className="main-desc font-medium">{t('payment.subscribe_website')}</h2>
        <div className="mt-3 flex gap-x-[10px] items-center">
          <h1 className="text-[40px] text-primary font-bold tracking-[-1px] font-inter">฿ {totalPrice}</h1>
          <div>
            <p className="main-desc">{t('payment.per')}</p>
            <p className="main-desc">{t('payment.month')}</p>
          </div>
        </div>

        <Separator className='my-6'/>

        <table className="relative w-full">
          <thead>
            <tr className="text-left subheading">
              <th className="font-medium">{t('payment.subtotal')}</th>
              <th className="text-right font-medium font-inter">฿ {subtotal}</th>
            </tr>
          </thead>
          <tbody>
            {discount !== 0 && (
              <tr className="main-desc">
                <td className="py-2">
                  <div className="flex my-3 flex-col">
                    <div className="flex gap-x-[10px] items-center text-sm text-secondary p-[10px] bg-zinc-100/80 rounded-sm w-fit">
                      <div className="flex gap-x-1 items-center">
                        <Tag color='#71717A' viewBox='0 0 24 24' width='12' height='12'/>
                        SAVE10
                      </div>
                    </div>
                    <p className="text-desc mt-[2px]">{couponExplanation}</p>
                  </div>
                </td>
                <td className="text-right font-inter">- ฿ {discount}</td>
              </tr>
            )}
            <tr className="main-desc">
              <td className="py-2">VAT (7%)</td>
              <td className="py-2 text-right font-inter">฿ {vat}</td>
            </tr>
          </tbody>
        </table>

        <Separator className='my-6'/>

        <table className="w-full relative">
          <tr className="text-left subheading">
            <th className="font-bold">{t('payment.total')}</th>
            <th className="text-right font-bold font-inter text-base">฿ {totalPrice}</th>
          </tr>
        </table>

        <div className="mt-10">
          <div className="flex gap-x-2 mb-5">
            <Checkbox id='submit-order' className='mt-1' onCheckedChange={e => setMakePayment(e)}/>
            <label htmlFor='submit-order' className="main-desc">
              {t('payment.payment_made_text')}
            </label>
          </div>
          <Button type='submit' className='btn-with-icon w-full' onClick={() => {verifiedPayment ? setPaymentConfirm(true) : window.location.href = `/checkout-pending/${app}/${id}`}} disabled={!makePayment}>
            <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
            {t('pro_privileges.continue')}
          </Button>
        </div>
      </section>
    </>
  )
}