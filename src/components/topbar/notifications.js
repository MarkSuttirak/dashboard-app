import { BellIcon } from '@radix-ui/react-icons'
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"

export default function NotificationsTopbar(){
  const notices = [
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    },
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    },
    {
      avatar:'https://github.com/shadcn.png',
      text:'The React Framework - created and maintained by Mark',
      date:'December 2021'
    }
  ]
  return (
    <Popover>
      <PopoverTrigger>
        <BellIcon color='#7D7D7D' width='17' height='17'/>
      </PopoverTrigger>
      <PopoverContent className='w-[400px]'>
        <h2 className='settings-heading'>Notifications</h2>
        <p className='main-desc mb-6'>Choose what you want to be notified about</p>

        <ul className='flex flex-col gap-y-[14px]'>
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
      </PopoverContent>
    </Popover>
  )
}