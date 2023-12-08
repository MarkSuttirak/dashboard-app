import { AppWindow, ArrowUpRightSquare, Award, Bell, BellRing, CalendarDays, Coins, Eye, FilePieChart, Heart, Import, Lightbulb, Palette, Phone, Signal, TimerReset, Trash2, UserSquare2, Users, Users2 } from "lucide-react";
import { CountdownTimerIcon, PersonIcon, LinkNone2Icon, Pencil2Icon } from "@radix-ui/react-icons";
import LineIcon from "../icon-menus/Line";

export default function ServicePrivileges({icon, title, desc}){
  return (
    <li className="flex gap-x-4">
      <div className="h-5 w-5">
        {icon}
      </div>
      <div>
        <h2 className="subheading font-medium">{title}</h2>
        <p className="main-desc">{desc}</p>
      </div>
    </li>
  )
}

export const appPrivileges = {
  crmApp: [
    {
      icon:<CountdownTimerIcon className="h-5 w-5 text-[#09090B]"/>,
      title:'Real-time customer data management',
      desc:'Store comprehensive customer information in real-time through the Connections system'
    },
    {
      icon:<ArrowUpRightSquare className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Store, analyze, and report on all sales',
      desc:'Summarize sales data over time for a comprehensive business overview'
    },
    {
      icon:<CalendarDays className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Manage deal and sales pipeline',
      desc:'Analyze and check sales figures by branch separately.'
    },
    {
      icon:<BellRing className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Expand customer base',
      desc:'Track leads and customers. And Record every won/missed deal for customers'
    },
    {
      icon:<Users2 className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Collaborate seamlessly with your team',
      desc:'Comment, chat, and work together with your team at every point in the system'
    }
  ],
  lineCRMApp: [
    {
      icon:<LineIcon className="h-5 w-5 text-[#09090B]"/>,
      title:'Enhance the regular rich menu to make it more special',
      desc:'You can have a sophisticated CRM system similar to those used by big brands'
    },
    {
      icon:<UserSquare2 className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Membership System',
      desc:'Make customers feel like a part of the business with a membership'
    },
    {
      icon:<Heart className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Get to know customers better',
      desc:'Collect customer data that LINE cannot provide through registration form'
    },
    {
      icon:<Award className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Point & Reward',
      desc:'You can integrate it with \'Rewardful\' to utilize a point & reward program'
    },
    {
      icon:<AppWindow className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Blog Feature',
      desc:'Enable the blog to keep you informed, allowing you to announce promotions to customers through the rich menu'
    },
    {
      icon:<Palette className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Well-designed',
      desc:'More than 10 beautifully designed templates, suitable for users of all ages'
    },
  ],
  rewardfulApp: [
    {
      icon:<Import className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Supports in-store & online sales',
      desc:'Supports every channel, whether the same customers buy from stores or online channel'
    },
    {
      icon:<LineIcon className="h-5 w-5 text-[#09090B]"/>,
      title:'Connect with Zaviago LINE CRM',
      desc:'Check remaining points, receive notifications for new points or nearing expiration via LINE'
    },
    {
      icon:<Users className="h-5 w-5 text-[#09090B]"/>,
      title:'Customer Tiering',
      desc:'Elevate customer tiers with increased spending, providing greater benefits according to membership levels'
    },
    {
      icon:<AppWindow className="h-5 w-5 text-[#09090B]"/>,
      title:'Ease of use',
      desc:'Customers can easily access the interface through a browser or LINE without any application downloads'
    },
  ],
  reducoedApp: [
    {
      icon:<TimerReset className="h-5 w-5 text-[#09090B]"/>,
      title:'Stimulate Purchases to Double',
      desc:'Increase repeat purchases and stimulate new customer acquisitions'
    },
    {
      icon:<Coins className="h-5 w-5 text-[#09090B]"/>,
      title:'Diverse Coupons for Added Excitement',
      desc:'Automatically discount coupons, deals and running a variety of campaigns'
    },
    {
      icon:<PersonIcon className="h-5 w-5 text-[#09090B]"/>,
      title:'Segment Customers for Tailored Deals',
      desc:'Setting conditions and distributing discounts based on customer levels'
    },
    {
      icon:<Heart className="h-5 w-5 text-[#09090B]"/>,
      title:'Elevate Impressions with Automatic Discounts',
      desc:'Impress customers by automatically applying discounts'
    },
  ],
  marketConnectApp: [
    {
      icon:<Eye className="h-5 w-5 text-[#09090B]"/>,
      title:'Real-time order checking',
      desc:'Automatically receive orders from all marketplaces'
    },
    {
      icon:<LinkNone2Icon className="h-5 w-5 text-[#09090B]"/>,
      title:'Sync all product data',
      desc:'Update information automatically with a single edit'
    },
    {
      icon:<ArrowUpRightSquare className="h-5 w-5 text-[#09090B]"/>,
      title:'View reports from every platform',
      desc:'Analyze and check sales figures by branch separately'
    },
    {
      icon:<Users2 className="h-5 w-5 text-[#09090B]"/>,
      title:'Expand customer base',
      desc:'Revise the sales strategy by expanding the customer base and enhancing sales opportunities without limitations'
    },
  ],
  untitleApp: [
    {
      icon:<Bell className="h-5 w-5 text-[#09090B]"/>,
      title:'All in one seamless page',
      desc:'Accelerate your product sales by creating a Sale page'
    },
    {
      icon:<Pencil2Icon className="h-5 w-5 text-[#09090B]"/>,
      title:'User-friendly Drag & Drop function',
      desc:'Over 380+ design tools to suit your brand'
    },
    {
      icon:<Lightbulb className="h-5 w-5 text-[#09090B]"/>,
      title:'Unleash boundless creativity',
      desc:'Tailor your sale pages and modify perfectly align with your brand'
    },
    {
      icon:<Phone className="h-5 w-5 text-[#09090B]"/>,
      title:'Ensure compatibility with every screen',
      desc:'Automated layout management system for user-friendly navigation'
    },
    {
      icon:<LineIcon className="h-5 w-5 text-[#09090B]"/>,
      title:'Integrating LINE CRM',
      desc:'Elevate sales and easy accessibility through LINE OA'
    },
  ],
  posApp: [
    {
      icon:<FilePieChart className="h-5 w-5 text-[#09090B]"/>,
      title:'Accurate orders',
      desc:'Elevate sales and easy accessibility through LINE OA'
    },
    {
      icon:<Trash2 className="h-5 w-5 text-[#09090B]"/>,
      title:'Solve stock leftovers',
      desc:'Efficiently manage your products with automatic stock-management features'
    },
    {
      icon:<Bell className="h-5 w-5 text-[#09090B]"/>,
      title:'Real-time sales reports',
      desc:'Realtime sales dashboard order from all sales channels in mili-second'
    },
    {
      icon:<Signal className="h-5 w-5 text-[#09090B]"/>,
      title:'Boost sales with strong features',
      desc:'Expand customer, generate profits and enhance customer with special deals'
    },
    {
      icon:<Coins className="h-5 w-5 text-[#09090B]"/>,
      title:'E-Payment support',
      desc:'Make payments more convenient and faster with various payment options'
    },
  ]
}