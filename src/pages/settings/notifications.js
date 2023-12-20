import { Link } from "react-router-dom"
import { Checkbox } from "../../components/ui/checkbox"
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
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="0" name="notification_type"/>
            <label htmlFor="0">All new messages</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mentions" id="1" name="notification_type"/>
            <label htmlFor="1">Direct messages and mentions</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="2" name="notification_type"/>
            <label htmlFor="2">Nothing</label>
          </div>
        </RadioGroup>

        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <div className="border rounded-md p-4 flex items-center justify-between">
              {/* <input type="radio" value="type" name="communication_emails" />  */}
              <div>
                <h2 className='settings-heading'>Communication emails</h2>
                <p className="main-desc">Receive emails about your account activity.</p>
              </div>
              <Switch name="communication_emails"/>
            </div>

            <div className="border rounded-md p-4 flex items-center justify-between">
              {/* <input type="radio" value="type" name="marketing_emails" />  */}
              <div>
                <h2 className='settings-heading'>Marketing emails</h2>
                <p className="main-desc">Receive emails for friend requests, follows, and more.</p>
              </div>
              <Switch name="marketing_emails"/>
            </div>

            <div className="border rounded-md p-4 flex items-center justify-between">
              {/* <input type="radio" value="type" name="social_emails" />  */}
              <div>
                <h2 className='settings-heading'>Social emails</h2>
                <p className="main-desc">Receive emails for friend requests, follows, and more.</p>
              </div>
              <Switch name="social_emails"/>
            </div>
           
            <div className="border rounded-md p-4 flex items-center justify-between">
              {/* <input type="radio" value="type" name="security_emails" /> Security emails */}
              <div>
                <h2 className='settings-heading'>Security emails</h2>
                <p className="main-desc">Receive emails about your account activity and security.</p>
              </div>
              <Switch name="security_emails"/>
            </div>
          </div>
        </div>
        
        <div className="flex gap-x-3">
          <Checkbox value='Paneer' name='mobile'/>
          {/* <input type="checkbox" name="mobile" value="Paneer" /> */}
          <div className="-mt-1">
            <h2 className='settings-heading'>Use different settings for my mobile devices</h2>
            <p className="main-desc">You can manage your mobile notifications in the{" "}<Link href="/examples/forms">mobile settings</Link> page.</p>
          </div>
        </div>
        <button type="submit" className="text-sm bg-primary text-[#FAFAFA] px-4 py-2 rounded-md">Update notifications</button>
        
      </form>
    
  )
}