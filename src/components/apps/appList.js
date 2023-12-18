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
    app:'LineOA CRM',
    name:'LineOA CRM',
    id:'line-crm',
    custom_integrates:'Facebook',
    category:'Marketing and conversion',
    description_title:(<div className="text-[#18181B] text-xl font-semibold mb-2">Unlock your bizs to the next level with <span className="text-[#2CB216] font-bold">Line CRM</span></div>),
    image:<Icons.lineCRMApp />,
    custom_launch_date:'25 Mar 2021',
    long_description:(
      <div className="text-base flex flex-col gap-y-6 text-[#71717A]">
        <p>The 'Customer Data Management Program via LINE CRM' is an innovation that transforms the way customer management is conducted in the digital age, making the process more efficient and secure. This program focuses on standardizing communication between customers and businesses through the LINE platform to ensure effective interactions.</p>
        <p>By enabling registration through phone numbers and OTP verification, customer data is safeguarded rigorously, enhancing the security of personal information. Working in conjunction with LINE not only streamlines communication but also improves customer service.</p>
        <p>There are many more benefits that our application can deliver to further propel your business to greater heights. Details are as follows:</p>
        <ul className="list-disc ml-4">
          <li>Phone Number and OTP Registration: A fast and secure registration experience allows customers instant access to services.</li>
          <li>Comprehensive Data Storage System: Records all customer information in the CRM system for convenient tracking and management.</li>
          <li>LINE Integration: Instant communication with customers through the app they use daily ensures smooth interaction.</li>
          <li>Notification System: Customizable alerts keep customers informed of crucial information, enhancing business efficiency.</li>
          <li>Customer Data Analysis: Utilizes stored data to analyze and predict customer behavior, enabling businesses to adapt to market needs.</li>
          <li>Flexibility and Upgradability: The program offers high flexibility, making it easy to upgrade and adapt to changes in the business environment.</li>
          <li>Enable the blog to keep you informed, allowing you to announce promotions to customers through the rich menu.</li>
          <li>more than 10 beautifully designed templates, suitable for users of all ages.</li>
        </ul>
      </div>
    ),
    highlights:'Developing features for every type of business in Thailand exclusively',
    status:'Installed',
    screenshots:[mockapp1, mockapp2],
    title:"LineOA CRM"
  },
  {
    app:'Rewardful',
    name:'Rewardful',
    id:'rewardful',
    custom_integrates:'Facebook',
    category:'Marketing and conversion',
    description_title:(<div className="text-[#18181B] text-xl font-semibold mb-2">Unlock your bizs to the next level with <span className="text-[#2CB216] font-bold">Line CRM</span></div>),
    image:<Icons.rewardfulApp />,
    custom_launch_date:'25 Mar 2021',
    long_description:(
      <div className="text-base flex flex-col gap-y-6 text-[#71717A]">
        <p>The 'Customer Data Management Program via LINE CRM' is an innovation that transforms the way customer management is conducted in the digital age, making the process more efficient and secure. This program focuses on standardizing communication between customers and businesses through the LINE platform to ensure effective interactions.</p>
        <p>By enabling registration through phone numbers and OTP verification, customer data is safeguarded rigorously, enhancing the security of personal information. Working in conjunction with LINE not only streamlines communication but also improves customer service.</p>
        <p>There are many more benefits that our application can deliver to further propel your business to greater heights. Details are as follows:</p>
        <ul className="list-disc ml-4">
          <li>Phone Number and OTP Registration: A fast and secure registration experience allows customers instant access to services.</li>
          <li>Comprehensive Data Storage System: Records all customer information in the CRM system for convenient tracking and management.</li>
          <li>LINE Integration: Instant communication with customers through the app they use daily ensures smooth interaction.</li>
          <li>Notification System: Customizable alerts keep customers informed of crucial information, enhancing business efficiency.</li>
          <li>Customer Data Analysis: Utilizes stored data to analyze and predict customer behavior, enabling businesses to adapt to market needs.</li>
          <li>Flexibility and Upgradability: The program offers high flexibility, making it easy to upgrade and adapt to changes in the business environment.</li>
          <li>Enable the blog to keep you informed, allowing you to announce promotions to customers through the rich menu.</li>
          <li>more than 10 beautifully designed templates, suitable for users of all ages.</li>
        </ul>
      </div>
    ),
    highlights:'Developing features for every type of business in Thailand exclusively',
    status:'Installed',
    screenshots:[mockapp1, mockapp2],
    title:"LineOA CRM"
  }
]