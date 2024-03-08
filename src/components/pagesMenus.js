import { Link, useParams } from "react-router-dom"
import { cn } from "../lib/utils"
import { buttonVariants, Button } from "../components/ui/button"
import { useLocation } from "react-router-dom"

export default function PagesMenus({menus}) {
  const location = useLocation()
  const active = location.pathname

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="w-[250px]">
            <nav
              className={cn(
                "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
              )}
            >
              {menus.map((item) => (
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