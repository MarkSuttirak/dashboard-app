import { ArrowLeft, Tag, X } from "lucide-react";
import { Link } from "react-router-dom";
import Topbar from "src/components/topbar/topbar";
import { Badge } from "src/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Separator } from "src/components/ui/separator";
import { Switch } from "src/components/ui/switch";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { useState } from 'react'

export default function PaymentPage(){
  const [addPromo, setAddPromo] = useState(false)
  const [promoAdded, setPromoAdded] = useState(false)

  return (
    <>
      <Topbar isSidebarOpen={false} hasNoLeftSidebar={true}/>
      <div className="page-section">
        <div className="dashboard-container">
          <div className="flex items-center gap-x-3">
            <Link to='/'>
              <ArrowLeft />
            </Link>
            <h1 className="main-heading">Payment</h1>
          </div>

          <main className="mt-[44px]">
            <section className="p-10">
              <h2 className="main-desc">Subscribe to Professional together</h2>
              <div className="mt-3 flex gap-x-[10px] items-center">
                <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">฿ 7,900</h1>
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
                      <CardTitle>7500 Baht / Year / User</CardTitle>
                      <CardDescription>Discount 10%</CardDescription>
                    </div>
                  </div>
                  <p className="subheading">฿ 7,900</p>
                </CardHeader>
                <CardFooter className='border-t bg-muted-50 py-4 px-3 bg-zinc-100/50 justify-between'>
                  <div className="flex items-center gap-x-3">
                    <Switch />
                    <Badge variant='destructive'>Yearly save - ฿ 990</Badge>
                    <p className="subheading">Yearly plan</p>
                  </div>
                  <p className="subheading">฿ 7,900/year</p>
                </CardFooter>
              </Card>

              <Separator className='my-6'/>

              <table className="w-[calc(100%_-_74px)] relative left-[74px]">
                <thead>
                  <tr className="text-left subheading">
                    <th className="font-medium">Subtotal</th>
                    <th className="text-right font-medium">฿ 750</th>
                  </tr>
                </thead>
                <tbody>
                  {promoAdded ? (
                    <tr className="main-desc">
                      <td>
                        <div className="flex my-3">
                          <div className="flex gap-x-[10px] items-center text-sm text-[#71717A] p-[10px] bg-zinc-100/80 rounded-sm">
                            <div className="flex gap-x-1 items-center">
                              <Tag color='#71717A' viewBox='0 0 24 24' width='12' height='12'/>
                              SAVE10
                            </div>
                            <X color='#71717A' viewBox='0 0 24 24' width='12' height='12' className='cursor-pointer' onClick={() => {
                              setPromoAdded(false);
                              setAddPromo(false)
                            }}/>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">- ฿ 750</td>
                    </tr>
                  ) : (
                    <tr>
                      <td colSpan='2'>
                        {addPromo ? (
                          <div className="flex items-center relative">
                            <Input className="my-3 w-full" />
                            <Button variant='ghost' className='hover:bg-transparent text-[#006AFF] absolute right-0' onClick={() => setPromoAdded(true)}>Apply</Button>
                          </div>
                        ) : (
                          <Button className="my-3 text-[#006AFF]" variant='secondary' onClick={() => setAddPromo(true)}>Add promotion code</Button>
                        )}
                      </td>
                    </tr>
                  )}
                  <tr className="main-desc">
                    <td>VAT (7%)</td>
                    <td className="text-right">฿ 740</td>
                  </tr>
                </tbody>
              </table>

              <Separator className='my-6'/>

              <table className="w-[calc(100%_-_74px)] relative left-[74px]">
                <tr className="text-left subheading">
                  <th className="font-bold">Total</th>
                  <th className="text-right font-bold">฿ 790</th>
                </tr>
              </table>
            </section>

            <section>

            </section>
          </main>
        </div>
      </div>
    </>
  )
}