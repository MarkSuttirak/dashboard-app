import { Badge } from "src/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card";
import { Tag, X } from "lucide-react";
import { Separator } from "src/components/ui/separator";
import { Switch } from "src/components/ui/switch";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { useState } from 'react'
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PaymentInfo(){
  const [addPromo, setAddPromo] = useState(false)
  const [promoAdded, setPromoAdded] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [couponExplanation, setCouponExplanation] = useState('');
  const [subtotal, setSubtotal] = useState(750)
  const [perYear, setPerYear] = useState(false);
  const [discount, setDiscount] = useState(0)

  const vat = Math.floor(subtotal * 0.07)

  const handlePerYear = () => {
    setPerYear(!perYear)
    if (perYear){
      setSubtotal(750)
    } else {
      setSubtotal(7500)
    }
  }

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
        setCouponExplanation('This coupon is invalid.')
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
        <h1 className="main-heading">Payment</h1>
      </div>
      <section className="py-10 px-5">
        <h2 className="main-desc font-medium">Subscribe to Zaviago</h2>
        <div className="mt-3 mb-10 flex gap-x-[10px] items-center">
          <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ {total()}</h1>
          <div>
            <p className="main-desc">per</p>
            <p className="main-desc">year</p>
          </div>
        </div>
        <Card className='p-0 shadow-none'>
          <CardHeader className='flex flex-row justify-between px-3 py-6'>
            <div className="flex gap-x-3 items-center">
              <div className="bg-[#27272A] w-[50px] h-[50px] rounded-md"/>
              <div>
                <CardTitle>{subtotal.toLocaleString()} Baht / Year / User</CardTitle>
                <CardDescription>Discount 10%</CardDescription>
              </div>
            </div>
            <p className="subheading">฿ {subtotal.toLocaleString()}</p>
          </CardHeader>
          <CardFooter className='border-t bg-muted-50 py-4 px-3 bg-zinc-100/50 justify-between'>
            <div className="flex items-center gap-x-3">
              <Switch onCheckedChange={handlePerYear} />
              <Badge variant='outline' className='bg-white'>Yearly save - ฿ 1,500</Badge>
              <p className="subheading">Yearly plan</p>
            </div>
            <p className="subheading">฿ {subtotal.toLocaleString()}/year</p>
          </CardFooter>
        </Card>

        <Separator className='my-6'/>

        <table className="w-[calc(100%_-_74px)] relative left-[74px]">
          <thead>
            <tr className="text-left subheading">
              <th className="font-medium">Subtotal</th>
              <th className="text-right font-medium">฿ {subtotal.toLocaleString()}</th>
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
                <td className="text-right">- ฿ {discount.toLocaleString()}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan='2'>
                  {addPromo ? (
                    <div className="flex items-center relative">
                      <Input className="my-3 w-full" placeholder='Enter your coupon code' onChange={e => setCouponCode(e.target.value)} onKeyDown={e => {e.key === 'Escape' && setAddPromo(false)}} onBlur={(e) => {e.target.value == '' && setAddPromo(false)}}/>
                      <Button variant='ghost' className={`hover:bg-transparent text-[#006AFF] absolute right-0 ${couponCode !== '' ? 'visible opacity-1 transition-all duration-200' : 'invisible opacity-0 transition-all duration-200'}`} onClick={() => setCoupon(couponCode)}>Apply</Button>
                    </div>
                  ) : (
                    <Button className="my-3" variant='secondary' onClick={() => setAddPromo(true)}>Add promotion code</Button>
                  )}
                </td>
              </tr>
            )}
            <tr className="main-desc">
              <td>VAT (7%)</td>
              <td className="text-right">฿ {vat}</td>
            </tr>
          </tbody>
        </table>

        <Separator className='my-6'/>

        <table className="w-[calc(100%_-_74px)] relative left-[74px]">
          <tr className="text-left subheading">
            <th className="font-bold">Total</th>
            <th className="text-right font-bold">฿ {total()}</th>
          </tr>
        </table>
      </section>
    </section>
  )
}