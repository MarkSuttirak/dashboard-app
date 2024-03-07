import { BellIcon } from '@radix-ui/react-icons'
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'

export default function NotificationsTopbar(){
  const { t } = useTranslation()

  const [isMobileNotiOpen, setIsMobileNotiOpen] = useState(false)
  const notices = [
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    },
  ]

  const Noti = () => {
    return (
      <>
        <div className="grid grid-cols-3 md:block items-center mb-6 md:mb-0">
          <ArrowLeft onClick={() => setIsMobileNotiOpen(false)} className='md:hidden'/>
          <h2 className='!m-0 settings-heading text-center md:text-left'>{t('topbar.notifications')}</h2>
        </div>

        {notices.length > 0 ? (
          <ul className='flex flex-col gap-y-[14px] mt-4'>
            {notices.map(notice => (
              <li className='flex gap-x-4' key={notice.text}>
                <Avatar>
                  <AvatarImage src={notice.avatar} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                  <h3 className='subheading'>{notice.text}</h3>
                  <p className='text-desc mt-2'>{notice.date}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='flex flex-col items-center my-4 h-full md:justify-center'>
            <h2 className='subheading'>{t('topbar.no_notification_title')}</h2>
            <p className='text-desc mt-2'>{t('topbar.no_notification_desc')}</p>
          </div>
        )}
      </>
    )
  }
  return (
    <>
      <div className='hidden md:block'>
        <Popover>
          <PopoverTrigger className='relative'>
            <BellIcon color='#7D7D7D' width='17' height='17'/>
          </PopoverTrigger>
          <PopoverContent className='w-[400px] absolute -right-2'>
            <Noti />
          </PopoverContent>
        </Popover>
      </div>

      <div class="md:hidden z-[99]">
        <BellIcon color='#7D7D7D' width='17' height='17' onClick={() => setIsMobileNotiOpen(true)}/>

        <div className={`fixed bg-white h-screen w-full top-0 px-4 py-6 ${isMobileNotiOpen ? 'left-0' : 'left-full'}`}>
          <Noti />
        </div>
      </div>
    </>
  )
}