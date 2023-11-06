import { ChevronDownIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons"
import { Users, Zap } from "lucide-react"
import { useForm } from "react-hook-form"
import { Separator } from "../../components/ui/separator";
import VerticalLine from "src/components/verticalLine";
import { cn } from "../../lib/utils"
import { Button, buttonVariants } from "../../components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { toast } from "../../components/ui/use-toast"
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/ui/input"

const countries = ["China","France","Germany","Pakistan","Thailand","United Kingdom","United States"]

// const appearanceFormSchema = z.object({
//   company_name: z.string({
//     required_error: "The company name is required.",
//   }),
//   country: z.enum(countries, {
//     invalid_type_error: "Select a country",
//     required_error: "Please select a country.",
//   }),
//   address: z.string({
//     required_error: "The address is required.",
//   }),
//   city: z.string({
//     required_error: "The city is required.",
//   }),
//   state: z.string({
//     required_error: "The state/province is required.",
//   }),
//   postal_code: z.string({
//     required_error: "The postal code is required.",
//   }),
// })

// This can come from your database or API.
const defaultValues = {
  theme: "light",
}

export default function BillingPlan() {
  const { user, auth, logout } = useUser();

  const navigate = useNavigate();

  const [numOfAdmin, setNumOfAdmin] = useState(14)
  const [numOfCustomers, setNumOfCustomers] = useState(2544)

  useEffect(() => {
    if (auth?.onboarding.site_created === false) {
      navigate('/dashboard/instance-configuration');
    }
  }, [auth?.onboarding.site_created]);

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });

  const form = useForm({
    // resolver: zodResolver(appearanceFormSchema),
    // defaultValues,
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
    <>
      <h2 className="tertiary-heading">Subscription for your team</h2>
      <div className="free-trial">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[39px] font-semibold text-[#151515]">Free trial</h1>
            <p className="secondary-heading">{sites?.site_list[0].name}</p>
          </div>

          <Button variant='secondary' className='btn-with-icon leading-5' onClick={() => window.location.href = `http://${sites?.site_list[0].name}`}>
            <Zap viewBox='0 0 24 24' width='16' height='16'/>
            Upgrade to Pro
            <VerticalLine color='#E4E4E7' height="80%" size={1}/>
            <ChevronDownIcon />
          </Button>
        </div>

        <div className="text-desc flex gap-x-4 items-center mt-10">
          <p className="flex items-center gap-x-1 text-sm"><Users viewBox='0 0 24 24' width='16' height='16' /> {numOfAdmin} admin {numOfAdmin == 1 ? 'user' : 'users'}</p>
          <p className="flex items-center gap-x-1 text-sm"><StarIcon /> {numOfCustomers >= 1000000 ? `${(numOfCustomers / 1000000).toFixed(1)}m` : numOfCustomers >= 1000 ? `${(numOfCustomers / 1000).toFixed(1)}k` : numOfCustomers} {numOfCustomers == 1 ? "customer" : "customers"}</p>
        </div>
      </div>

      <Separator className='my-6'/>

      <h1 className="secondary-heading">Team billing information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4">
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Limited Co 999 99 Rama IX Rd," {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Suan Luang" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State / Province / Region</FormLabel>
                <FormControl>
                  <Input placeholder="Bangkok" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postal_code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="10210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Update account</Button>
        </form>
      </Form>
    </>
  )
}