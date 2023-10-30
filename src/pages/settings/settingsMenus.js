import { Separator } from "../../components/ui/separator"
import { Link, useParams } from "react-router-dom"
import { cn } from "../../lib/utils"
import { buttonVariants, Button } from "../../components/ui/button"

export const metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Account",
    href: "account",
  },
  {
    title: "Appearance",
    href: "appearance",
  },
  {
    title: "Notifications",
    href: "notifications",
  },
  {
    title: "Display",
    href: "display",
  },
]

export default function SettingsMenus({setMenu}) {
  return (
    <>
      <div className="hidden space-y-6 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="w-[250px]">
            <nav
              className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
              )}
            >
              {sidebarNavItems.map((item) => (
                <Button key={item.href} className='w-full flex justify-start gap-x-2' variant='ghost' onClick={() => setMenu(item.href)}>{item.title}</Button>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </>
  )
}