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
import ServicePrivileges from "./servicePrivileges";
import { ServiceBadge } from "./serviceBadge";
import ServiceFooter from "./serviceFooter";

export const serviceMenus = [
  {
    icon:<ERPApp />,
    image:erpBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">For enterprises, time to upgrade to <span className="text-[#0A5FD9]">Zaviago ERP</span></h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<POSApp />,
    image:posBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2"><span className="text-[#013395]">POS in.store</span> : store management</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<RewardfulApp />,
    image:rewardfulBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Set your Loyalty Program by <span className="text-[#FF7009]">Rewardful</span></h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<UntitleApp />,
    image:untitleBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Building your website creation with <span className="text-[#FBB604]">Untitle</span></h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<ReducoedApp />,
    image:reducoedBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Coming soon'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2"><span className="text-[#EB4F9F]">REDUCOED</span> : The most advanced campaign</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<InbioApp />,
    image:inbioBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Coming soon'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Everything you are. In one, simple <span className="text-[#FF4A00]">Inbio</span></h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<BlogAndPagesApp />,
    image:blogAndPagesBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2"><span className="text-[#7000FF]">Blog and Pages</span> in your style</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<LineCRMApp />,
    image:lineCRMbg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<SidebarApp09 />,
    image:blogAndPagesBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Building your website creation with Untitle</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  },
  {
    icon:<SidebarApp10 />,
    image:blogAndPagesBg,
    children:(
      <>
        <div className="flex flex-col justify-between h-full">
          <section>
            <ServiceBadge text='Upgrade pro plan to use this feature'/>
            <h1 className="main-heading tracking-[-0.6px] mt-3 mb-2">Building your website creation with Untitle</h1>
            <p>Access exclusive tools to help you build client sites and scale your business</p>
            <ul className="mt-6 gap-y-[17px] flex flex-col px-2">
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
              <ServicePrivileges icon={<BellIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Super Admin' desc='Can access billing and members'/>
              <ServicePrivileges icon={<EyeNoneIcon className="mt-1" color='#09090B' width='20' height='20'/>} title='Remove' desc='Turn off all notifications'/>
            </ul>
          </section>
          <ServiceFooter />
        </div>
      </>
    )
  }
]