import { ChevronRight } from "lucide-react"
import PagesMenus from "src/components/pagesMenus";
import { Link } from "react-router-dom";

export default function SettingsMenus({menus, id}){
  return (
    <>
        {id ? <PagesMenus menus={menus} hiddenOnResponsive={true}/> : (
          <div className="flex flex-col gap-y-4">

            {menus.map(item => (
              <Link to={item.href} className='flex items-center justify-between'>
                {item.title}
                <ChevronRight class="w-4 h-4"/>
              </Link>
            ))}

          </div>
        )}
    </>
  )
}