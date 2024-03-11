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
import { useTranslation } from "react-i18next";

export function EditProfileForm({preloadedValues}) {
  const { t } = useTranslation();
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
        }else{
          toast({
            title: "Something went wrong",
            description: "Please refresh the page or contact the support.",
          })
          setSaving(false)
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
          <main className="flex flex-col gap-y-6 lg:gap-y-8">
            <div className="space-y-6">
              <div className="anim-up flex flex-col">
                <label className="subheading mb-2 font-medium">
                  {t("first_name")}
                </label>
                <Input
                  placeholder={t("first_name")}
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
                  {t("last_name")}
                </label>
                <Input
                  placeholder={t("last_name")}
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
                  {t("email")}
                </label>
                <Input
                  placeholder={t("email")}
                  className="form-input"
                  name="email"
                  type='text'
                  value={preloadedValues.email}
                />
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
                    {t("updating")}
                  </>
                ) : (
                  <>{t("update_profile")}</>
                )}
              </Button>
            </div>
          </main>
        </form>

        <Toaster />
    </>
  )
}