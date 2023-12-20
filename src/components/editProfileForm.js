import React from "react";
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { format } from "date-fns"
import { toast, useToast } from "./ui/use-toast"
import { user } from "src/client/api";
import * as yup from "yup"
import { useFormik } from 'formik';
import { Toaster } from "./ui/toaster";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function EditProfileForm({preloadedValues}) {
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const accountFormSchema = yup.object().shape({
    first_name: yup.string().required('First Name is a required field'),
    last_name: yup.string().required('Last name is a required field'),
    email: yup.string().email().required('Email is a required field'),
    // dob: yup.date().required('DOB is a required field'),
  })
  const onSubmitFunction = async (data) => {
    const isValid = await accountFormSchema.isValid(data)
    setSaving(true);
    if( isValid ){
      user.updateUser(data).then()
      .then((response) => {
        if( response.status===200 && response.statusText==="OK" ){
          toast({
            title: "Profile updated",
            description: "Profile is updated successfully",
          })
          setSaving(false)
          // document.getElementById("success-save").style.display="block"
          // document.getElementById("success-save").innerHTML="Profile is updated successfully"
        }else{
          toast({
            title: "Something went wrong",
            description: "Please refresh the page or contact the support.",
          })
          setSaving(false)
          // document.getElementById("success-save").innerHTML = "Something went wrong"
          // document.getElementById("success-save").style.display="block"
        }
      })
    }else{
      document.getElementById("success-save").innerHTML = "Please fill required fields"
      document.getElementById("success-save").style.display="block"
    }
    return
    // 
  };
  const form = useFormik({
    initialValues: {
      first_name:preloadedValues.first_name,
      last_name:preloadedValues.last_name,
      email:preloadedValues.email,
      username:preloadedValues.username,
      dob:preloadedValues.birth_date,
    },
    validateOnChange: true,
    validationSchema: accountFormSchema,
    onSubmit: values => {
      console.log('values')
      console.log(values)
      onSubmitFunction( values )
    },
  })

function onError(e) {
    console.log('error')
    console.log(e)
  }
  return (
    <>
      <form className="w-full" onSubmit={form.handleSubmit}>
          <p id="success-save" className="tab-desc"></p>
          <main className="flex flex-col gap-y-8">
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  First Name
                </label>
                <Input
                  placeholder="First Name"
                  className="form-input"
                  name="first_name"
                  type='text'
                  onChange={form.handleChange}
                  defaultValue={preloadedValues.first_name}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  Last Name
                </label>
                <Input
                  placeholder="First Name"
                  className="form-input"
                  name="last_name"
                  onChange={form.handleChange}
                  type='text'
                  defaultValue={preloadedValues.last_name}
                />
              </div>
            </div>
            {/* <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2">
                  Username
                </label>
                <Input
                  placeholder="First Name"
                  className="form-input"
                  name="username"
                  type='text'
                  disabled
                  defaultValue ={preloadedValues.username}
                />
              </div>
            </div> */}
            
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  Email
                </label>
                <Input
                  placeholder="Email"
                  className="form-input"
                  name="email"
                  type='text'
                  value={preloadedValues.email}
                />
                {/* <Select className='form-input' name="email" onChange={form.handleChange} defaultValue={preloadedValues.email}>
                  <SelectTrigger className="w-full">
                    <SelectValue defaultValue={preloadedValues.email} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </div>
{/*           
            <div className="space-y-6">
                <div className="anim-up flex flex-col">
                    <label className="subheading mb-2">
                      Date of Birth
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal" && "text-muted-foreground"
                            )}
                          >
                            {preloadedValues.dob ? <span>{preloadedValues.dob}</span> : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={preloadedValues.dob}
                          onSelect={preloadedValues.dob}
                          onChange={form.handleChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                </div>
            </div> */}
            <div>
              <Button
                type='submit'
                disabled={saving ? true : false}
                className={'flex items-center gap-x-2'}
              >
                {saving ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin"/>
                    Updating...
                  </>
                ) : (
                  <>Update Profile</>
                )}
              </Button>
            </div>
          </main>
        </form>

        <Toaster />
    </>
    
    // <Form {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit,onError)} className="space-y-8">
    //     <p id="success-save" style={{display:'none'}}></p>
    //     <FormField
    //       control={form.control}
    //       name="first_name"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>First Name</FormLabel>
    //           <FormControl>
    //             <Input placeholder="Your name" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="last_name"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Last Name</FormLabel>
    //           <FormControl>
    //             <Input placeholder="Your name" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="username"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Username</FormLabel>
    //           <FormControl>
    //             <Input placeholder="shadcn" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="email"
    //       render={({ field }) => (
    //         <FormItem>
    //           <FormLabel>Email</FormLabel>
    //           <Select onValueChange={field.onChange} defaultValue={preloadedValues.email}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Select a verified email to display" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="m@example.com">m@example.com</SelectItem>
    //               <SelectItem value="m@google.com">m@google.com</SelectItem>
    //               <SelectItem value="m@support.com">m@support.com</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormDescription>
    //             You can manage verified email addresses in your{" "}
    //             <Link href="/examples/forms">email settings</Link>.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="dob"
    //       render={({ field }) => (
    //         <FormItem className="flex flex-col">
    //           <FormLabel>Date of birth</FormLabel>
    //           <Popover>
    //             <PopoverTrigger asChild>
    //               <FormControl>
    //                 <Button
    //                   variant={"outline"}
    //                   className={cn(
    //                     "w-[240px] pl-3 text-left font-normal",
    //                     !field.value && "text-muted-foreground"
    //                   )}
    //                 >
    //                   {field.value ? (
    //                     format(field.value, "PPP")
    //                   ) : (
    //                     <span>Pick a date</span>
    //                   )}
    //                   <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    //                 </Button>
    //               </FormControl>
    //             </PopoverTrigger>
    //             <PopoverContent className="w-auto p-0" align="start">
    //               <Calendar
    //                 mode="single"
    //                 selected={field.value}
    //                 onSelect={field.onChange}
    //                 disabled={(date) =>
    //                   date > new Date() || date < new Date("1900-01-01")
    //                 }
    //                 initialFocus
    //               />
    //             </PopoverContent>
    //           </Popover>
    //           <FormDescription>
    //             Your date of birth is used to calculate your age.
    //           </FormDescription>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <Button type="submit">Update account</Button>
    //   </form>
    // </Form>
  )
}