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

export default function UpgradeProModal(){
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

  const UpgradeProIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
      <g clip-path="url(#clip0_569_4606)">
        <path d="M5.4621 0.423649L1.55402 2.67055C0.654394 3.18727 0.100098 4.14313 0.100098 5.1771V9.69417C0.100098 10.7281 0.654394 11.684 1.55402 12.2007L5.4818 14.459C6.38143 14.9762 7.4895 14.9762 8.38861 14.459L10.8339 13.0536L5.48491 9.94554C4.59202 9.42675 4.04291 8.47503 4.04291 7.4452V2.92348C4.04291 1.8233 4.63299 0.926924 5.46365 0.435545C5.48595 0.422097 5.48076 0.412786 5.4621 0.423649Z" fill="url(#paint0_linear_569_4606)"/>
        <path d="M13.8056 5.15218L13.8076 9.64235C13.8076 9.66407 13.7962 9.66356 13.7962 9.63769C13.7833 8.67666 11.088 6.93873 10.1303 6.3889C10.1303 6.3889 9.7077 5.96218 9.42822 5.71442C9.14874 5.46614 9.13526 5.45476 8.92681 5.31718C8.74585 5.19821 8.55763 5.10511 8.43681 5.04511L8.42541 5.03942C8.30511 4.97994 7.94422 4.82114 7.94422 4.82114C6.7003 4.38511 6.33941 4.34528 5.61763 4.9008C5.61763 4.9008 4.77504 5.71442 4.45407 6.44838C4.13311 7.18235 4.0517 7.82735 4.19326 8.2339C4.20052 8.25407 4.20518 8.27321 4.20881 8.29132C4.62622 9.34442 4.91659 9.51149 5.64615 9.93097C5.70007 9.96252 5.75711 9.99511 5.81674 10.0298L7.66215 10.9029L11.1119 12.1525L8.28852 14.4589C7.38941 14.9761 6.28081 14.9761 5.3817 14.4589L1.45341 12.2006C0.554296 11.6839 0 10.728 0 9.69407V5.177C0 4.14304 0.554296 3.18718 1.45341 2.67045L5.36148 0.423556C5.38067 0.412694 5.38585 0.422005 5.36356 0.435453C5.31844 0.461832 5.27333 0.499591 5.22822 0.547177L5.5077 0.386832C6.40785 -0.129375 7.51696 -0.128858 8.41711 0.387867L12.3496 2.64666C13.2497 3.16338 13.805 4.11873 13.8056 5.15218Z" fill="url(#paint1_linear_569_4606)"/>
        <path d="M1.63119 12.3134L5.57193 14.5862C6.48038 15.105 7.62786 15.0946 8.53734 14.5748L12.5076 12.3046C13.4171 11.7843 13.9771 10.8243 13.9776 9.78515L13.9797 5.24791C13.9802 4.20929 13.4207 3.24929 12.5123 2.73049L10.0421 1.31946L10.0105 7.51446C10.0053 8.54842 9.44578 9.50273 8.54045 10.02L4.56549 12.2933C3.59793 12.8462 2.51267 12.7857 1.66127 12.3134C1.63793 12.3005 1.61201 12.3026 1.63119 12.3134Z" fill="url(#paint2_linear_569_4606)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_569_4606" x1="5.44032" y1="0.418884" x2="5.5368" y2="14.8466" gradientUnits="userSpaceOnUse">
          <stop stop-color="#AD7EE1"/>
          <stop offset="1" stop-color="#2A64BB"/>
        </linearGradient>
        <linearGradient id="paint1_linear_569_4606" x1="1.01379e-07" y1="2.86441" x2="14.3381" y2="11.0536" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="#B0B0B0"/>
        </linearGradient>
        <linearGradient id="paint2_linear_569_4606" x1="3.57921" y1="14.97" x2="13.2118" y2="2.21582" gradientUnits="userSpaceOnUse">
          <stop stop-color="white"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
        <clipPath id="clip0_569_4606">
          <rect width="14" height="15" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

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
      <DialogTrigger className='w-full md:w-fit px-5 py-3 md:p-0 bg-[#F6EFFF] md:bg-transparent mr-[3px]'>
        <div className='flex gap-x-2'>
          <div className='whitespace-pre text-[13px] flex gap-x-[5px] items-center font-medium bg-accent pl-2 py-1 pr-1 rounded-md h-[34px]'>
            {t('upgrade')}
            <div className='flex bg-black rounded-md text-white cal-sans text-[13px] font-semibold h-full p-[6px] gap-x-[5px]'>
              <UpgradeProIcon />
              {t('pro')}
            </div>
          </div>

          <div className='flex items-center justify-between w-full md:hidden'>
            <p className='text-secondary text-sm'>เพื่อการเติบโตอย่างก้าวกระโดด</p>
            <ChevronRight className='w-4 h-4' color="#8321FF"/>
          </div>
        </div>
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