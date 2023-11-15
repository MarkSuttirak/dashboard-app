import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"

export default function PaymentForm(){
  return (
    <section className="w-full">
      <h2 className="secondary-heading">Billing information</h2>
      <p className="main-desc">Update your account settings. Set your preferred language and timezone.</p>

      <Separator className='my-10'/>

      <form className="flex flex-col gap-y-8 mt-4">
        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Name <span className="required">*</span>
            </label>
            <Input
              placeholder="Your Company Name"
              className="form-input"
              name="name"
              type='text'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Company Name / User Name <span className="required">*</span>
            </label>
            <Input
              placeholder="Your Company Name"
              className="form-input"
              name="company_name"
              type='text'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Country <span className="required">*</span>
              </label>
              <Select className='form-input' name="country" defaultValue="Thailand"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='Thailand'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Select Country">Select Country</SelectItem>
                  <SelectItem value="Thailand">Thailand</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                State / Province / Region <span className="required">*</span>
              </label>
              <Select className='form-input' name="province" defaultValue="Bangkok"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='Bangkok'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Select Province">Select Province</SelectItem>
                  <SelectItem value="Bangkok">Bangkok</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Address <span className="required">*</span>
            </label>
            <Input
              placeholder="Limitd Co 999 99 Rama IX Rd,"
              className="form-input"
              name="address"
              type='text'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                City <span className="required">*</span>
              </label>
              <Input
                placeholder="Limitd Co 999 99 Rama IX Rd,"
                className="form-input"
                name="address"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Postal Code <span className="required">*</span>
              </label>
              <Input
                placeholder="10210"
                className="form-input"
                name="postal_code"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Phone Number <span className="required">*</span>
            </label>
            <Input
              placeholder="012-3456-789"
              className="form-input"
              name="phone-number"
              type='tel'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Email <span className="required">*</span>
            </label>
            <Input
              placeholder="test@mail.com"
              className="form-input"
              name="email"
              type='email'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <Link to='/checkout'>
          <Button type='submit' className='btn-with-icon w-full'>
            <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
            Continue
          </Button>
        </Link>

        <p className="main-desc">By clicking 'Subscribe' you agree to authorise payments pursuant to <Link className="text-[#006AFF]">Privacy Policy</Link>.</p>
      </form>
    </section>
  )
}