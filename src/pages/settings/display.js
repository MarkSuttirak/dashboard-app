import { toast } from "../../components/ui/use-toast"
import * as yup from "yup"
import { useFormik } from 'formik';

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
]

const displayFormSchema = yup.object().shape({
  items: yup.array().min(1).of(yup.string().required()).required()
})

// This can come from your database or API.
const defaultValues = ["recents", "home"]

export default function DisplayForm() {
  const form = useFormik({
    validationSchema:displayFormSchema,
    initialValues:{},
    onSubmit: values => {
      console.log('values')
      console.log(values)
    },
  })

  function onSubmit(data) {
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
        <div className="mb-4">
            Select the items you want to display in the sidebar.
        </div>
        {items.map((item) => (
          <div className="Documents">
            <input onChange={form.handleChange} defaultChecked ={defaultValues.includes(item.id) } type="checkbox" id="{item.id}" name="items" value="documents" /> {item.label}
          </div>
        ))}
        <button type="submit">Update display</button>
      </form>
    
  )
}