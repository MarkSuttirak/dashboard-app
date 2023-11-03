import { zodResolver } from "@hookform/resolvers/zod"
import { ChevronDownIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons"
import { Users, Zap } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Separator } from "./ui/separator";
import VerticalLine from "src/components/verticalLine";
import { cn } from "../lib/utils"
import { Button, buttonVariants } from "./ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Input } from "./ui/input"
import { user as user_api } from "src/client/api";


export function BillingAddressForm({billingAddress}) {
   
    const countries = ["China","France","Germany","Pakistan","Thailand","United Kingdom","United States"]

   
    
      const appearanceFormSchema = z.object({
        billing_name: z.string({
          required_error: "Company name is required.", // Der Geschäftsname ist erforderlich.
        }),
        country: z.enum(countries, {
          invalid_type_error: "Select a country",
          required_error: "Please select a country.", // Bitte wählen Sie ein Land aus.
        }),
        address_line1: z.string({
          required_error: "The address is required.", // Die Adresse ist erforderlich
        }),
        city: z.string({
          required_error: "The city is required.", // Die Stadt ist erforderlich
        }),
        state: z.string({
          required_error: "The state/province is required.", // Der Staat/Die Provinz ist erforderlich
        }),
        pincode: z.string({
          required_error: "The postal code is required.", // Die Postleitzahl ist erforderlich
        }),
      })
    const form = useForm({
        resolver: zodResolver(appearanceFormSchema),
        defaultValues: billingAddress
      })
      
    const onSubmit = async data => {
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
    function onError(e) {
        console.log('error')
        console.log(e)
      }

    return (
          <Form {...form}>
            <p id="call-response" style={{display:'none'}}></p>
            <form onSubmit={form.handleSubmit(onSubmit,onError)} className="space-y-8 mt-4">
              <FormField
                control={form.control}
                name="billing_name"
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
                name="address_line1"
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
                name="pincode"
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
      )
}