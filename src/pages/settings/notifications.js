import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../../components/ui/button"
import { Checkbox } from "../../components/ui/checkbox"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Switch } from "../../components/ui/switch"
import { toast } from "../../components/ui/use-toast"
import { useFormik } from 'formik';
import * as yup from "yup"

const notificationsFormSchema = yup.object().shape({
  mobile: yup.boolean().default(false).optional(),
  communication_emails: yup.boolean().default(false).optional(),
  social_emails: yup.boolean().default(false).optional(),
  marketing_emails: yup.boolean().default(false).optional(),
  security_emails: yup.boolean(),
})

// This can come from your database or API.
const defaultValues = {
  communication_emails: false,
  marketing_emails: false,
  social_emails: true,
  security_emails: true,
}

export default function NotificationsForm() {
  const form = useFormik({
    validationSchema: notificationsFormSchema,
    initialValues: {
      communication_emails: false,
      marketing_emails: false,
      social_emails: true,
      security_emails: true,
    },
    onSubmit: values => {
      console.log('values')
      console.log(values)
      onSubmitFunction( values )
    },
  })


  function onSubmitFunction(data) {
    console.log("toast"+data)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    
      <form onSubmit={form.handleSubmit} className="space-y-8">
        <div>
          <input type="radio" id="0" checked="checked" value="all" name="notification_type" /> All new messages
          <input type="radio" id="1" value="mentions" name="notification_type" /> Direct messages and mentions
          <input type="radio" id="2" value="none" name="notification_type" /> Nothing
        </div>
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div>
              <input type="radio" value="type" name="communication_emails" /> Communication emails
              Receive emails about your account activity.
            </div>
            
            <div>
              <input type="radio" value="type" name="marketing_emails" /> Marketing emails
              Receive emails about new products, features, and more.
            </div>
            
             <div>
              <input type="radio" value="type" name="social_emails" /> Social emails
              Receive emails for friend requests, follows, and more.
            </div>
           
             <div>
              <input type="radio" value="type" name="security_emails" /> Security emails
              Receive emails about your account activity and security.
            </div>
          </div>
        </div>
        
        <input type="checkbox" name="mobile" value="Paneer" />Use different settings for my mobile devices
        You can manage your mobile notifications in the{" "}
        <Link href="/examples/forms">mobile settings</Link> page.
        <button type="submit">Update notifications</button>
        
      </form>
    
  )
}