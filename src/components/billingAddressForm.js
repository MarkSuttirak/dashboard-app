import { user as user_api } from "src/client/api";
import * as yup from "yup"
import { useFormik } from 'formik';
import { Input } from "./ui/input";


export function BillingAddressForm({billingAddress}) {
    const countries = ["Thailand"]

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
        billing_name:billingAddress.billing_name,
        country:billingAddress.country,
        address_line1:billingAddress.address_line1,
        city:billingAddress.city,
        state:billingAddress.state,
        pincode:billingAddress.pincode,
      },
      validateOnChange: true,
      validationSchema: appearanceFormSchema,
      onSubmit: values => {
        console.log('values')
        console.log(values)
        onSubmitFunction( values )
      },
    })
    const onSubmitFunction = async (data) => {
      console.log(data)
      data['address']=data['address_line1']
      data['postal_code']=data['pincode']
      user_api.updateBillingInfo(data).then()
      .then((response)=>{
          if( response.status===200 && response.statusText==="OK" ){
              document.getElementById("call-response").style.display="block"
              document.getElementById("call-response").innerHTML="Address is updated successfully"
          }else{
              document.getElementById("call-response").innerHTML = "Something went wrong"
              document.getElementById("call-response").style.display="block"
          }
      });
       
  };


    return (
      <>
        <form className="w-full" onSubmit={form.handleSubmit}>
          <p id="call-response" style={{display:'none'}}></p>
          <main className="flex flex-col gap-y-8 mt-4">
            <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        Company Name
                      </label>
                      <Input
                        placeholder="Company Name"
                        className="form-input"
                        name="billing_name"
                        type='text'
                        onChange={form.handleChange}
                        defaultValue={billingAddress.billing_name}
                      />
                  </div>
              </div>
              <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        Country
                      </label>
                      <select name="country" className="form-input" defaultValue={billingAddress.country} onChange={form.handleChange}>
                        <option>Select Country</option>
                          {countries.map(country => (
                          <option value={country}>{country}</option>
                        ))}
                      </select>
                  </div>
              </div>
              <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        Address
                      </label>
                      <Input
                        placeholder="Address"
                        className="form-input"
                        name="address_line1"
                        onChange={form.handleChange}
                        type='text'
                        defaultValue ={billingAddress.address_line1}
                      />
                  </div>
              </div>
              <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        City
                      </label>
                      <Input
                        placeholder="City"
                        className="form-input"
                        name="city"
                        type='text'
                        onChange={form.handleChange}
                        defaultValue ={billingAddress.city}
                      />
                  </div>
              </div>
              <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        State / Province / Region
                      </label>
                      <Input
                        placeholder="State"
                        className="form-input"
                        name="state"
                        type='text'
                        onChange={form.handleChange}
                        defaultValue ={billingAddress.state}
                      />
                  </div>
              </div>
              <div className="space-y-6">
                  <div className="anim-up flex flex-col">
                      <label className="subheading mb-2">
                        Postal Code
                      </label>
                      <Input
                        placeholder="Postal Code"
                        className="form-input"
                        name="pincode"
                        type='text'
                        onChange={form.handleChange}
                        defaultValue ={billingAddress.pincode}
                      />
                  </div>
              </div>
              <div >
                <button
                    type='submit'
                    className={'text-sm bg-primary text-[#FAFAFA] px-4 py-2 rounded-md'}>
                      Update Address
                  </button>
            </div>
          </main>
        </form>
      </>
          // <Form {...form}>
          //   <p id="call-response" style={{display:'none'}}></p>
          //   <form onSubmit={form.handleSubmit(onSubmit,onError)} className="space-y-8 mt-4">
          //     <FormField
          //       control={form.control}
          //       name="billing_name"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Company Name</FormLabel>
          //           <FormControl>
          //             <Input placeholder="Your name" {...field} />
          //           </FormControl>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       control={form.control}
          //       name="country"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Country</FormLabel>
          //           <Select onValueChange={field.onChange} defaultValue={field.value}>
          //             <FormControl>
          //               <SelectTrigger>
          //                 <SelectValue placeholder="Select a verified email to display" />
          //               </SelectTrigger>
          //             </FormControl>
          //             <SelectContent>
          //               {countries.map(country => (
          //                 <SelectItem value={country}>{country}</SelectItem>
          //               ))}
          //             </SelectContent>
          //           </Select>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       control={form.control}
          //       name="address_line1"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Address</FormLabel>
          //           <FormControl>
          //             <Input placeholder="Limited Co 999 99 Rama IX Rd," {...field} />
          //           </FormControl>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       control={form.control}
          //       name="city"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>City</FormLabel>
          //           <FormControl>
          //             <Input placeholder="Suan Luang" {...field} />
          //           </FormControl>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       control={form.control}
          //       name="state"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>State / Province / Region</FormLabel>
          //           <FormControl>
          //             <Input placeholder="Bangkok" {...field} />
          //           </FormControl>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <FormField
          //       control={form.control}
          //       name="pincode"
          //       render={({ field }) => (
          //         <FormItem>
          //           <FormLabel>Postal Code</FormLabel>
          //           <FormControl>
          //             <Input placeholder="10210" {...field} />
          //           </FormControl>
          //           <FormMessage />
          //         </FormItem>
          //       )}
          //     />
          //     <Button type="submit">Update account</Button>
          //   </form>
          // </Form>
      )
}