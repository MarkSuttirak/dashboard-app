import { Icons } from "src/components/ui/icons"
import { CheckCircle2, Crown } from "lucide-react"
import mockapp1 from 'src/img/mockapp1.png'
import mockapp2 from 'src/img/mockapp2.png'
import mockapp3 from 'src/img/mockapp3.png'
import mockapp4 from 'src/img/mockapp4.png'

export const appStatus = {
  installed: (<>
    <div className="flex text-[#2CB216] items-center gap-x-2">
      <CheckCircle2 color='#2CB216' viewBox="0 0 24 24" width='16' height='16'/>
      Installed
    </div>
  </>),
  pro_plan: (<div className="flex text-[#71717A] items-center gap-x-2">
    <Crown color='#71717A' viewBox="0 0 24 24" width='16' height='16'/>
    Pro plan
  </div>),
  free_trial: (<div className="text-[#71717A]">
    14 days free trial
  </div>),
  free_plan: (<div className="text-[#71717A]">
    Free plan available
  </div>),
  need_upgrade: (<div className="text-[#71717A]">
    Upgrade available
  </div>)
}

export const appList = [
  {
    id:'reducoed',
    icon:<Icons.reducoedApp />,
    title:'Reducoed',
    desc:'Facilitate payments and pay out sellers or service providers.',
    version:'Version 2.2',
    developed_by:'Zaviago',
    status:(appStatus.installed),
    images:[mockapp1, mockapp2, mockapp3, mockapp4],
    highlights:(
      <>
        <h2 className='subheading font-medium'>Built for your business</h2>
        <p className="main-desc mt-1">Use directly in Shopify admin</p>
      </>
    ),
    launched:'March 25, 2021',
    categories:'Marketing and conversion',
    integrate_with:['Facebook Advertising', 'Recharge', 'Zendesk'],
    long_desc:(<>
      <h1 className="domain-heading">Get The Latest Status Of Your Online & In-Person Sales</h1>
      <p className="text-[#71717A] mb-6">Selldone allows you to manage multiple stores per account and sell various product types. Connect to Selldone by clicking the login or sign-up. This will allow you to view your shops' performance and access them directly and receive notifications about new orders in your Stripe Dashboard.</p>
      <p className="text-[#71717A] mb-6">Selldone allows you to manage multiple stores per account and sell various product types. Connect to Selldone by clicking the login or sign-up. This will allow you to view your shops' performance and access them directly and receive notifications about new orders in your Stripe Dashboard.</p>
      <ul className="text-[#71717A] mb-6 list-disc ml-4">
        <li>Beautiful Skins: The app comes with a beautiful selection of premade skins that you can choose from and start using.</li>
        <li>Search & Sort Options: The app comes with search and sorting options that will provide a great user experience.</li>
        <li>Floating Elements: With the app, you can create floating elements to keep the position of column and row headers fixed.</li>
        <li>Easy CSV-to-Table Conversion: You can easily convert any CSV file into an interactive table.</li>
      </ul>
    </>)
  },
  {
    id:'line-crm',
    icon:<Icons.lineCRMApp />,
    title:'Line CRM',
    desc:'Facilitate payments and pay out sellers or service providers.',
    version:'Version 2.2',
    developed_by:'Zaviago',
    status:(appStatus.pro_plan),
    images:[],
    highlights:(
      <>
        <h2 className='subheading font-medium'>Built for your business</h2>
        <p className="main-desc mt-1">Use directly in Shopify admin</p>
      </>
    ),
    launched:'April 28, 2021',
    categories:'Marketing and conversion',
    integrate_with:['Facebook Advertising', 'Recharge', 'Zendesk'],
    long_desc:''
  },
  {
    id:'inbio',
    icon:<Icons.inbioApp />,
    title:'InBio',
    desc:'Facilitate payments and pay out sellers or service providers.',
    version:'Version 2.2',
    developed_by:'Zaviago',
    status:(appStatus.need_upgrade),
    images:[],
    highlights:(
      <>
        <h2 className='subheading font-medium'>Built for your business</h2>
        <p className="main-desc mt-1">Use directly in Shopify admin</p>
      </>
    ),
    launched:'April 28, 2021',
    categories:'Marketing and conversion',
    integrate_with:['Facebook Advertising', 'Recharge', 'Zendesk'],
    long_desc:''
  },
]