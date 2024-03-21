import React, {useState} from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import upgradeProBg from 'src/img/upgrade-pro-bg.png'
import { ServiceBadge } from '../sidebar/serviceBadge'
import ServicePrivileges from '../sidebar/servicePrivileges'
import { Link } from 'react-router-dom'
import { BellIcon, LightningBoltIcon, EyeNoneIcon, LockOpen1Icon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Switch } from '../ui/switch'
import { Badge } from '../ui/badge'
import DrawLine from "../drawLine";
import { ChevronRight, Heart, PartyPopper, ThumbsUp, UserCircle, UserPlus } from 'lucide-react'
import { Icons } from '../ui/icons'
import { useTranslation } from 'react-i18next'

export default function UpgradeProModal({ children, triggerClassName }){
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)
  const [perYear, setPerYear] = useState(false);

  const handleCloseModal = () => {
    if (openModal){
      setOpenModal(false);
      setTimeout(() => {
        setPerYear(false)
      }, 100)
    } else {
      setOpenModal(true);
    }
  }

  const handlePerYear = () => {
    setPerYear(!perYear)
  }

  const privileges = [
    {
      icon:<PartyPopper className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.everything_in_free.title'),
      desc:t('pro_privileges.everything_in_free.desc')
    },
    {
      icon:<LockOpen1Icon className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.unlimited_quota.title'),
      desc:t('pro_privileges.unlimited_quota.desc')
    },
    {
      icon:<ThumbsUp className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.collaborative_workspace.title'),
      desc:t('pro_privileges.collaborative_workspace.desc')
    },
    {
      icon:<UserPlus className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.one_team_member.title'),
      desc:t('pro_privileges.one_team_member.desc')
    },
    {
      icon:<UserCircle className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.super_admin.title'),
      desc:t('pro_privileges.super_admin.desc')
    },
    {
      icon:<Heart className="mt-1 stroke-[1.5] text-primary h-5 w-5"/>,
      title:t('pro_privileges.priority_support.title'),
      desc:t('pro_privileges.priority_support.desc')
    },
  ]

  return (
    <Dialog open={openModal} onOpenChange={handleCloseModal}>
      <DialogTrigger className={triggerClassName}>
        {children}
      </DialogTrigger>
      <DialogContent className='p-0 border-0 max-w-none w-full lg:max-w-4xl h-full lg:h-fit'>
        <DialogHeader className='overflow-auto flex-col lg:flex-row h-full'>
          <DialogTitle className='h-full'>
            <img src={upgradeProBg} className='lg:rounded-l-lg h-full w-full lg:w-[700px] object-cover'/>

            {/* <div className="absolute left-5 bottom-5 flex gap-x-2 items-center">
              <Button variant='link' className='text-white text-xs p-0 h-fit'>Support</Button>
              <DrawLine color='#FFF' width='1px' height='14px'/>
              <Button variant='link' className='text-white text-xs p-0 h-fit' onClick={() => window.location.href = 'https://page.line.me/zaviago'}>{t('contact_us')}</Button>
            </div> */}
          </DialogTitle>
          <DialogDescription className='!m-0 pb-16 lg:pb-10 lg:shadow-lg h-full'>
            <div className="flex flex-col justify-between h-full px-4 lg:px-10 pt-6">
              <section>
                <div className='flex items-center justify-between mb-2'>
                  <h1 className="main-heading tracking-[-0.6px]">{t('professional')}</h1>
                  <ServiceBadge text='Recommended'/>
                </div>
                <p className='text-secondary'>{t('pro_privileges.pro_desc')}</p>

                <div className='mt-6 flex flex-col gap-y-[18px]'>
                  <div className='flex gap-x-3 items-center font-inter'>
                    <Switch onCheckedChange={handlePerYear} />
                    <Badge variant='outline'><span className='font-eventpop'>{t('pro_privileges.yearly_save')}</span> - ฿ 1,500</Badge>
                  </div>
                  <div className='flex gap-x-2'>
                    <h1 className="text-[40px] text-primary font-bold tracking-[-1px] font-inter">{perYear ? '฿ 7,500' : '฿ 750'}</h1>
                    <p className='text-secondary text-base'>{perYear ? t('year_per_user') : t('month_per_user')}</p>
                  </div>
                </div>

                <ul className="mt-8 gap-y-[17px] flex flex-col px-2 mb-10 h-fit lg:h-[260px] overflow-auto">
                  {privileges.map(p => (
                    <ServicePrivileges icon={p.icon} title={p.title} desc={p.desc}/>
                  ))}
                </ul>
              </section>
              <section className='fixed lg:static w-full bg-white p-4 lg:p-0 bottom-0 left-0'>
                {/* <Link to='/payment/plan/pro'>

                </Link> */}
                  <Button className='btn-with-icon w-full mb-[7px]' disabled>
                    <LightningBoltIcon />
                    {t("upgrade_to_pro")}
                  </Button>
                <p className="main-desc">{t("pro_privileges.see_more_details")} <span className="text-[#006AFF]">{t("pro_privileges.compare_plans")}</span></p> {/* link to='/dashboard/compare-plan' */}
              </section>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}