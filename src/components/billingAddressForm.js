import { user as user_api } from "src/client/api";
import * as yup from "yup"
import { useFormik } from 'formik';
import { Input } from "./ui/input";
import { Separator } from "src/components/ui/separator";
import { Button } from "src/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectGroup, SelectValue } from "src/components/ui/select"
import { useState } from 'react'
import { provinces } from "src/components/form-controls/provinces";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { useTranslation } from "react-i18next";

export function BillingAddressForm({billingAddress, onSubmitForm, submitText, onSettings}) {
  const [isCompany, setIsCompany] = useState(false);
  const [enableTaxID, setEnableTaxID] = useState(onSettings ? true : false)
  const [saving, setSaving] = useState(false)
  const { toast } = useToast()
  const { t } = useTranslation()

  const appearanceFormSchema = yup.object().shape({
    billing_name: yup.string().required('Company Name is a required field'),
    country: yup.string().required('Country is a required field'),
    email: yup.string().email().required('Email is a required field'),
    address_line1: yup.string().required('Address is a required field'),
    city: yup.string().required('The city is required'),
    state: yup.string().required('The state is required'),
    pincode: yup.string().required('The Postal Code is required'),
  })

  const form = useFormik({
    initialValues: {
      // billing_name:billingAddress.billing_name,
      // country:billingAddress.country,
      // address_line1:billingAddress.address_line1,
      // city:billingAddress.city,
      // state:billingAddress.state,
      // pincode:billingAddress.pincode,
      billing_name:'',
      country:'',
      address_line1:'',
      city:'',
      state:'',
      pincode:'',
    },
    validateOnChange: true,
    validationSchema: appearanceFormSchema,
    onSubmit: values => {
      console.log('values')
      console.log(values)
     // onSubmitFunction( values )
    },
  })
  const onSubmitFunction = async (data) => {
    console.log(data)
    data['address']=data['address_line1']
    data['postal_code']=data['pincode']
    user_api.updateBillingInfo(data).then()
    .then((response)=>{
        if( response.status===200 && response.statusText==="OK" ){
          toast({
            title: "Address updated",
            description: "Address is updated successfully",
          })
          setSaving(false)
            // document.getElementById("call-response").style.display="block"
            // document.getElementById("call-response").innerHTML="Address is updated successfully"
        }else{
          toast({
            title: "Something went wrong",
            description: "Please refresh the page or contact the support.",
          })
          setSaving(false)
            // document.getElementById("call-response").innerHTML = "Something went wrong"
            // document.getElementById("call-response").style.display="block"
        }
    });
  };

  return (
    <>
      <form className="flex flex-col gap-y-6 md:gap-y-8 mt-8" onSubmit={onSubmitForm}>
        <div className="space-y-6 w-full">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
              {t('tax_invoice_type')} <span className="required">*</span>
            </label>
            <Select className='form-input' name="tax-invoice-type" defaultValue="Personal" onValueChange={e => e === 'Company' ? setIsCompany(true) : setIsCompany(false)}
              // onChange={form.handleChange} defaultValue={preloadedValues.email}
            >
              <SelectTrigger className="w-full">
                <SelectValue defaultValue='Personal'/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='Personal'>{t('billing_personal')}</SelectItem>
                <SelectItem value='Company'>{t('billing_company')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {isCompany ? (
          <div className="space-y-6">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2 font-medium">
                {t('company_name')}
              </label>
              <Input
                placeholder={t('company_name')}
                className="form-input"
                name="company_name"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-y-6 gap-x-3">
            <div className="space-y-6 w-full">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  {t('first_name')} <span className="required">*</span>
                </label>
                <Input
                  placeholder={t('first_name')}
                  className="form-input"
                  name="firstname"
                  type='text'
                  // onChange={form.handleChange}
                  // defaultValue={billingAddress.billing_name}
                />
              </div>
            </div>
            <div className="space-y-6 w-full">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  {t('last_name')} <span className="required">*</span>
                </label>
                <Input
                  placeholder={t('last_name')}
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
                {t('tax_id')}
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
          <Button variant='link' onClick={() => setEnableTaxID(true)} className='justify-start p-0 h-fit -mt-6 text-secondary font-medium text-xs underline'>{t('enter_tax_id_text')}</Button>
        )}

        <div className="space-y-6">
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
              {t('address')} <span className="required">*</span>
            </label>
            <Input
              placeholder={t('address')}
              className="form-input"
              name="address"
              type='text'
              // onChange={form.handleChange}
              // defaultValue={billingAddress.billing_name}
            />
          </div>
        </div>

        <div className="flex flex-col gap-x-3 md:flex-row gap-y-6">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2 font-medium">
                {t('subdistrict')} <span className="required">*</span>
              </label>
              <Input
                placeholder={t('subdistrict')}
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
                {t('district')} <span className="required">*</span>
              </label>
              <Input
                placeholder={t('district')}
                className="form-input"
                name="district"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-x-3 md:flex-row gap-y-6">
          <div className="space-y-6 w-full">
            <div className="anim-up flex flex-col">
              <label className="subheading mb-2 font-medium">
                {t('province')} <span className="required">*</span>
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
                {t('postal_code')} <span className="required">*</span>
              </label>
              <Input
                placeholder={t('postal_code')}
                className="form-input"
                name="postal_code"
                type='text'
                // onChange={form.handleChange}
                // defaultValue={billingAddress.billing_name}
              />
            </div>
          </div>
        </div>

        <Button type='button' className={`btn-with-icon ${onSettings ? 'w-fit' : 'w-full'}`} onClick={onSubmitForm}>
          {saving ? <Loader2 className="h-4 w-4 animate-spin"/> : null}
          {saving ? t('updating') : submitText}
        </Button>
      </form>
    </>
    )
}