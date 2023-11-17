import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectValue } from "src/components/ui/select"
import { useState } from 'react'
import { provinces } from "src/components/form-controls/provinces";

export default function PaymentForm(){
  const [isCompany, setIsCompany] = useState(false);
  const [enableTaxID, setEnableTaxID] = useState(false)
  return (
    <section className="w-full h-screen p-[60px]" style={{boxShadow:"-20px 0px 30px -4px rgba(0, 0, 0, 0.04)"}}>
      <h2 className="secondary-heading">Billing information</h2>
      <p className="main-desc">Please ensure that the entered information is correct. Once the system is in progress, you will not be able to edit any information on the tax invoice.</p>

      <Separator className='my-6'/>

      <form className="flex flex-col gap-y-8 mt-4">
        <div className="space-y-6 w-full">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
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
              <label className="subheading mb-2 font-medium">
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
                <label className="subheading mb-2 font-medium">
                  First name <span className="required">*</span>
                </label>
                <Input
                  placeholder="First name"
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
                <label className="subheading mb-2 font-medium">
                  Last name <span className="required">*</span>
                </label>
                <Input
                  placeholder="Last name"
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

        {enableTaxID ? (
          <div className="space-y-6">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2 font-medium">
                TAX ID.
              </label>
              <Input
                placeholder={isCompany ? "3-0000-9999-9" : "1-1009-99999-09-9"}
                className="form-input"
                name="tax-id"
                type='tel'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        ) : (
          <Button variant='link' onClick={() => setEnableTaxID(true)} className='justify-start p-0 h-fit -mt-6 text-[#71717A] font-medium'>Enter TAX ID. for the tax invoice</Button>
        )}

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
              Address <span className="required">*</span>
            </label>
            <Input
              placeholder="Limited Co 999 99 Rama IX Rd,"
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
              <label className="subheading mb-2 font-medium">
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
              <label className="subheading mb-2 font-medium">
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
              <label className="subheading mb-2 font-medium">
                Province <span className="required">*</span>
              </label>
              <Select className='form-input' name="province" defaultValue="Bangkok"
                // onChange={form.handleChange} defaultValue={preloadedValues.email}
              >
                <SelectTrigger className="w-full">
                  <SelectValue defaultValue='Bangkok'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className="max-h-[400px]">
                    {provinces.map(province => <SelectItem value={province}>{province}</SelectItem>)}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2 font-medium">
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

        <p className="main-desc">By clicking 'Continue' you agree to authorize payments pursuant to <Link className="text-[#006AFF]">Privacy Policy</Link>.</p>
      </form>
    </section>
  )
}