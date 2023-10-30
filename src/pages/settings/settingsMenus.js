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
    title: "Profile",
    href: "/examples/forms",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
  {
    title: "Notifications",
    href: "/examples/forms/notifications",
  },
  {
    title: "Display",
    href: "/examples/forms/display",
  },
]

export default function SettingsMenus() {
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
                <Link
                  key={item.href}
                  href={item.href}
                >
                  <Button className='w-full flex justify-start gap-x-2' variant='ghost'>{item.title}</Button>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      </div>
    </>
  )
}