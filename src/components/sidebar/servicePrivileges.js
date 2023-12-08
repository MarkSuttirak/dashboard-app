import { ArrowUpRightSquare, BellRing, CalendarDays, UserSquare2, Users2 } from "lucide-react";
import { BellIcon, EyeNoneIcon, CountdownTimerIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import LineIcon from "../icon-menus/Line";

export default function ServicePrivileges({icon, title, desc}){
  return (
    <li className="flex gap-x-4">
      <div className="h-5 w-5">
        {icon}
      </div>
      <div>
        <h2 className="subheading">{title}</h2>
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
      desc:'You can have a sophisticated CRM system similar to those used by big brands.'
    },
    {
      icon:<UserSquare2 className="h-5 w-5 text-[#09090B] stroke-1"/>,
      title:'Membership System',
      desc:'Make customers feel like a part of the business with a membership.'
    },
  ]
}