import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import { useState } from 'react'

export default function PaymentForm(){
  const provinces = ['Amnat Charoen', 'Bangkok', 'Chiang Mai', 'Chiang Rai', 'Chon Buri', 'Nakhon Pathom', 'Nonthaburi', 'Samut Prakan', 'Samut Sakhon', 'Samut Songkram', 'Tak', 'Trat', 'Ubon Ratchathani']
  const [isCompany, setIsCompany] = useState(false);
  return (
    <section className="w-full h-screen p-[60px]" style={{boxShadow:"-20px 0px 30px -4px rgba(0, 0, 0, 0.04)"}}>
      <h2 className="secondary-heading">Billing information</h2>
      <p className="main-desc">Please ensure that the entered information is correct. Once the system is in progress, you will not be able to edit any information on the tax invoice.</p>

      <Separator className='my-6'/>

      <form className="flex flex-col gap-y-8 mt-4">
        <div className="space-y-6 w-full">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              Tax invoice type <span className="required">*</span>
            </label>
            <Select className='form-input' name="tax-invoice-type" defaultValue="Personal" onValueChange={e => e === 'Company' ? setIsCompany(true) : setIsCompany(false)}
              // onChange={form.handleChange} defaultValue={preloadedValues.email}
            >
              <SelectTrigger className="w-full">
                <SelectValue defaultValue='Personal'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Personal'>Personal</SelectItem>
                <SelectItem value='Company'>Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isCompany ? (
          <div className="space-y-6">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                Company Name
              </label>
              <Input
                placeholder="Company name"
                className="form-input"
                name="company_name"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-x-3">
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2">
                  First name <span className="required">*</span>
                </label>
                <Input
                  placeholder="Your name"
                  className="form-input"
                  name="firstname"
                  type='text'
                  // onChange={form.handleChange}
                  // defaultValue={billingAddress.billing_name}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2">
                  Last name <span className="required">*</span>
                </label>
                <Input
                  placeholder="Your name"
                  className="form-input"
                  name="lastname"
                  type='text'
                  // onChange={form.handleChange}
                  // defaultValue={billingAddress.billing_name}
                />
              </div>
            </div>
          </div>
        )}

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              TAX ID.
            </label>
            <Input
              placeholder="012-3456-789"
              className="form-input"
              name="tax-id"
              type='tel'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
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
                Sub-district <span className="required">*</span>
              </label>
              <Input
                placeholder="Pattanakarn"
                className="form-input"
                name="subdistrict"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2">
                District <span className="required">*</span>
              </label>
              <Input
                placeholder="Suan Luang"
                className="form-input"
                name="district"
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
                Province <span className="required">*</span>
              </label>
              <Select className='form-input' name="province" defaultValue="Bangkok"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='Bangkok'/>
                </SelectTrigger>
                <SelectContent>
                  {provinces.map(province => <SelectItem value={province}>{province}</SelectItem>)}
                </SelectContent>
              </Select>
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

        <Link to='/checkout'>
          <Button type='submit' className='btn-with-icon w-full'>
            <Wallet color='#FFF' viewBox='0 0 24 24' height='16' width='16'/>
            Continue
          </Button>
        </Link>

        <p className="main-desc">By clicking 'Continue' you agree to authorise payments pursuant to <Link className="text-[#006AFF]">Privacy Policy</Link>.</p>
      </form>
    </section>
  )
}