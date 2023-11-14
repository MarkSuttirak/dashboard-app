import { ERPApp, POSApp, RewardfulApp, UntitleApp, ReducoedApp, InbioApp, BlogAndPagesApp, SidebarApp09, SidebarApp10, LineCRMApp } from "./sidebarApps";
import lineCRMbg from 'src/img/line-crm-bg.png'
import untitleBg from 'src/img/untitle-bg.png'
import inbioBg from 'src/img/inbio-bg.png'
import posBg from 'src/img/pos-bg.png'
import erpBg from 'src/img/erp-bg.png'
import blogAndPagesBg from 'src/img/blog-and-pages-bg.png'
import rewardfulBg from 'src/img/rewardful-bg.png'
import reducoedBg from 'src/img/reducoed-bg.png'
import { BellIcon, EyeNoneIcon } from "@radix-ui/react-icons";

export const serviceMenus = [
  {
    icon:<ERPApp />,
    image:erpBg,
    title:(<>For enterprises, time to upgrade to <span className="text-[#0A5FD9]">Zaviago ERP</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<POSApp />,
    image:posBg,
    title:(<><span className="text-[#013395]">POS in.store</span> : store management</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<RewardfulApp />,
    image:rewardfulBg,
    title:(<>Set your Loyalty Program by <span className="text-[#FF7009]">Rewardful</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<UntitleApp />,
    image:untitleBg,
    title:(<>Building your website creation with <span className="text-[#FBB604]">Untitle</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<ReducoedApp />,
    image:reducoedBg,
    title:(<><span className="text-[#EB4F9F]">REDUCOED</span> : The most advanced campaign</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<InbioApp />,
    image:inbioBg,
    title:(<>Everything you are. In one, simple <span className="text-[#FF4A00]">Inbio</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<BlogAndPagesApp />,
    image:blogAndPagesBg,
    title:(<><span className="text-[#7000FF]">Blog and Pages</span> in your style</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<LineCRMApp />,
    image:lineCRMbg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<SidebarApp09 />,
    image:blogAndPagesBg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  },
  {
    icon:<SidebarApp10 />,
    image:blogAndPagesBg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:'',
    privileges:[
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      },
      {
        icon:<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Super Admin',
        desc:'Can access billing and members'
      },
      {
        icon:<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>,
        title:'Remove',
        desc:'Turn off all notifications'
      }
    ],
  }
]