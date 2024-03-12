import { Link, useParams } from "react-router-dom"
import { cn } from "../lib/utils"
import { buttonVariants, Button } from "../components/ui/button"
import { useLocation } from "react-router-dom"

export default function PagesMenus({menus, hiddenOnResponsive}) {
  const location = useLocation()
  const active = location.pathname

  return (
    <>
      <div className={`space-y-6 ${hiddenOnResponsive ? 'hidden md:block' : ''}`}>
        <div className="flex flex-col space-y-8 md:flex-row md:space-x-12 md:space-y-0">
          <aside className="w-[250px]">
            <nav
              className={cn(
                "flex space-x-2 md:flex-col md:space-x-0 md:space-y-1",
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