import { Separator } from "src/components/ui/separator";
import { Input } from "src/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Button } from "src/components/ui/button"
import { Calendar } from "src/components/ui/calendar"
import { cn } from "../../lib/utils"
import { Wallet } from "lucide-react";
import { CalendarIcon } from "@radix-ui/react-icons"
import { Card } from "src/components/ui/card";
import { UploadCloud } from "lucide-react";

export default function CheckoutConfirm(){
  return (
    <section>
      <h2 className="secondary-heading">Confirm of payment</h2>
      <p className="main-desc">Update your account settings. Set your preferred language and timezone.</p>

      <Separator className='my-6'/>

      <main className="flex flex-col gap-y-6">
        <div className="flex gap-x-3">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Payment Channel
              </label>
              <Select className='form-input' name="payment-channel" defaultValue="Credit / Debit Card"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='Credit / Debit Card'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Credit / Debit Card">Credit / Debit Card</SelectItem>
                  <SelectItem value="Cash on Delivery">Cash on Delivery</SelectItem>
                  <SelectItem value="Mobile Banking">Mobile Banking</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Total
              </label>
              <Input
                placeholder="฿ 750"
                className="form-input"
                name="total"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "form-input" && "text-muted-foreground"
                    )}
                  >
                    <span>Pick a date</span>
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    // selected={preloadedValues.dob}
                    // onSelect={preloadedValues.dob}
                    // onChange={form.handleChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Time
              </label>
              <Select className='form-input' name="time" defaultValue="12.00"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='12.00'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12.00">12.00</SelectItem>
                  <SelectItem value="13.00">13.00</SelectItem>
                  <SelectItem value="14.00">14.00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <Input
              className="hidden"
              name="upload-slip"
              type='file'
              id='upload-slip'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
            <label htmlFor='upload-slip'>
              <Card className='rounded-md p-8 flex items-center flex-col gap-y-3'>
                <div className="h-10 w-10 flex items-center justify-center bg-[#F4F4F5] rounded-full">
                  <UploadCloud viewBox="0 0 24 24" width='20' height='20'/>
                </div>
                <div className="text-center">
                  <h2 className="subheading font-medium">Click to upload slip</h2>
                  <p className="main-desc">PNG or JPG (max. 800x400px)</p>
                </div>
              </Card>
            </label>
          </div>
        </div>
        <Button type='submit' className='btn-with-icon w-full'>
          <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
          Continue
        </Button>
      </main>
    </section>
  )
}