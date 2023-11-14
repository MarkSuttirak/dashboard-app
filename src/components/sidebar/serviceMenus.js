import { ERPApp, POSApp, RewardfulApp, UntitleApp, ReducoedApp, InbioApp, BlogAndPagesApp, SidebarApp09, SidebarApp10, LineCRMApp } from "./sidebarApps";
import lineCRMbg from 'src/img/line-crm-bg.png'
import untitleBg from 'src/img/untitle-bg.png'
import inbioBg from 'src/img/inbio-bg.png'
import posBg from 'src/img/pos-bg.png'
import erpBg from 'src/img/erp-bg.png'
import blogAndPagesBg from 'src/img/blog-and-pages-bg.png'
import rewardfulBg from 'src/img/rewardful-bg.png'
import reducoedBg from 'src/img/reducoed-bg.png'

export const serviceMenus = [
  {
    id:'erp-app',
    icon:<ERPApp />,
    image:erpBg,
    title:(<>For enterprises, time to upgrade to <span className="text-[#0A5FD9]">Zaviago ERP</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:''
  },
  {
    id:'pos-app',
    icon:<POSApp />,
    image:posBg,
    title:(<><span className="text-[#013395]">POS in.store</span> : store management</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:''
  },
  {
    id:'rewardful-app',
    icon:<RewardfulApp />,
    image:rewardfulBg,
    title:(<>Set your Loyalty Program by <span className="text-[#FF7009]">Rewardful</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:''
  },
  {
    icon:<UntitleApp />,
    image:untitleBg,
    title:(<>Building your website creation with <span className="text-[#FBB604]">Untitle</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:''
  },
  {
    id:'reducoed-app',
    icon:<ReducoedApp />,
    image:reducoedBg,
    title:(<><span className="text-[#EB4F9F]">REDUCOED</span> : The most advanced campaign</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Upgrade pro plan to use this feature',
    link:''
  },
  {
    id:'inbio-app',
    icon:<InbioApp />,
    image:inbioBg,
    title:(<>Everything you are. In one, simple <span className="text-[#FF4A00]">Inbio</span></>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:''
  },
  {
    id:'blogandpages-app',
    icon:<BlogAndPagesApp />,
    image:blogAndPagesBg,
    title:(<><span className="text-[#7000FF]">Blog and Pages</span> in your style</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:''
  },
  {
    id:'linecrm-app',
    icon:<LineCRMApp />,
    image:lineCRMbg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:''
  },
  {
    id:'sidebar-app09',
    icon:<SidebarApp09 />,
    image:blogAndPagesBg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:''
  },
  {
    id:'sidebar-app10',
    icon:<SidebarApp10 />,
    image:blogAndPagesBg,
    title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>),
    desc:'Access exclusive tools to help you build client sites and scale your business',
    require_pro_text:'Coming soon',
    link:''
  }
]