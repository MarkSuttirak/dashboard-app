import { Separator } from "src/components/ui/separator";
import { Input } from "src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Button } from "src/components/ui/button"
import { Calendar } from "src/components/ui/calendar"
import { cn } from "../../lib/utils"
import { Plus, Wallet, X } from "lucide-react";
import { CalendarIcon } from "@radix-ui/react-icons"
import { Card } from "src/components/ui/card";
import { UploadCloud } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useState } from 'react'
import { format } from "date-fns"
import krungthai from 'src/img/krungthai.svg'
import krungthepBank from 'src/img/krungthep-bank.svg'
import kasikorn from 'src/img/kasikorn.svg'
import krungsri from 'src/img/krungsri.svg'
import scb from 'src/img/scb.svg'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { useParams } from "react-router-dom";

export default function CheckoutConfirm({paymentConfirm, setPaymentConfirm, totalPrice}){
  const { id } = useParams()
  const { app } = useParams()
  const [date, setDate] = useState()
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();

  const banks = [
    { icon:krungthai, text:'Krung Thai Bank'},
    { icon:krungthepBank, text:'Bangkok Bank'},
    { icon:kasikorn, text:'Kasikorn Bank'},
    { icon:krungsri, text:'Bank of Ayudhaya'},
    { icon:scb, text:'Siam Commercial Bank'}
  ]

  const [imagePreview, setImagePreview] = useState(null);
  const [imageName, setImageName] = useState('')
  const [otherBank, setOtherBank] = useState(false)

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageName(file.name)
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.preventDefault();
    setImagePreview(null)
  }

  const displayOtherBank = (val) => {
    if (val === 'Other'){
      setOtherBank(true)
    } else {
      setOtherBank(false)
    }
  }

  const ShowPreview = () => {
    return (
      <Dialog>
        <DialogTrigger>
          <div className="min-w-20 min-h-20 w-20 h-20">
            <img src={imagePreview} className="w-full h-full object-cover" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <img src={imagePreview} className="w-full"/>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <section className="p-4 md:pt-[60px]">
      <div className="flex items-center gap-x-3 mb-6 px-10">
        <button onClick={() => setPaymentConfirm(false)}>
          <ArrowLeft />
        </button>
        <h1 className="main-heading">Payment</h1>
      </div>
      <h2 className="secondary-heading">Verify the payment</h2>
      <p className="main-desc">Please attach the transfer receipt. The image of the transfer receipt should not have anything obstructing the QR code. If your transfer receipt does not have a QR code, we will verify your payment within 6 hours.</p>

      <Separator className='my-6'/>

      <main className="flex flex-col gap-y-6">
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
              <td className="text-right">{totalPrice}</td>
            </tr>
          </tbody>
        </table>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label htmlFor='upload-slip'>
              {imagePreview ? (
                <Card className='rounded-md p-4 flex items-center flex-row gap-x-3 relative'>
                  <ShowPreview />
                  <p className="subheading font-medium">{imageName}</p>

                  <button className="absolute right-4 top-4" onClick={handleRemoveImage}>
                    <X className="h-4 w-4"/>
                  </button>
                </Card>
              ) : (
                <>
                  <Input
                    className="hidden"
                    name="upload-slip"
                    type='file'
                    id='upload-slip'
                    // onChange={form.handleChange}
                    // defaultValue={billingAddress.billing_name}
                    onChange={handleImageChange}
                  />
                  <Card className='rounded-md p-8 flex items-center flex-col gap-y-3 cursor-pointer'>
                    <div className="h-10 w-10 flex items-center justify-center bg-[#F4F4F5] rounded-full">
                      <UploadCloud viewBox="0 0 24 24" width='20' height='20'/>
                    </div>
                    <div className="text-center">
                      <h2 className="subheading font-medium">Click to upload slip</h2>
                      <p className="main-desc">PNG or JPG (max. 800x400px)</p>
                    </div>
                  </Card>
                </>
              )}
            </label>
          </div>
        </div>
        <Button type='submit' className='btn-with-icon w-full' onClick={() => window.location.href=`/checkout-received/${app}/${id}`}>
          <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
          Confirm
        </Button>
      </main>
    </section>
  )
}