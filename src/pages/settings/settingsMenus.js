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
    href: "/dashboard/settings/account",
  },
  {
    title: "Appearance",
    href: "/dashboard/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/dashboard/settings/notifications",
  },
  {
    title: "Display",
    href: "/dashboard/settings/display",
  },
]

export default function SettingsMenus({active}) {
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
                <Link to={item.href}>
                  <Button key={item.href} className={`w-full flex justify-start gap-x-2 ${item.href === active ? 'bg-accent' : ''}`} variant='ghost'>{item.title}</Button>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </>
  )
}