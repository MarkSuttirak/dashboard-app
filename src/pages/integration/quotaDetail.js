import { Link, useParams } from "react-router-dom";
import { totalAppsQuota } from "./appQuota";
import { sidebarNavItems } from "./integration";
import PagesMenus from "src/components/pagesMenus"
import { Progress } from "src/components/ui/progress";
import { Button } from "src/components/ui/button";
import { LogOut } from "lucide-react";

export default function QuotaDetail(){
  const quotaData = [
    {
      type:'Blog page',
      progress:50,
      totalText:'5 / 10 pages'
    },
    {
      type:'Database',
      progress:50,
      totalText:'174 / 500 MB'
    },
    {
      type:'Post',
      progress:50,
      totalText:'5 / 10 posts'
    },
    {
      type:'Storage',
      progress:50,
      totalText:'2 MB / 1 GB'
    }
  ]
  const { app } = useParams()

  // document.title = `Quota detail - ${totalAppsQuota.filter(item => item.id == app)[0].title}`

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">Integration</h1>

      <main className="flex gap-x-12 mt-8">
        <PagesMenus menus={sidebarNavItems} />

        <section className="w-[672px]">
          <div className="ml-6">
            <h2 className="settings-heading">Quota detail</h2>
            <p className="main-desc">Manage the apps on your site or go to update to more quota</p>
          </div>

          {totalAppsQuota.filter(item => item.id == app).map(i => (
            <>
              <div className='mt-6 bg-[#F7F7F8] border-none p-6 rounded-lg'>
                <header className="flex items-center gap-x-4">
                  {i.icon}
                  <h2 className="subheading font-medium">{i.title}</h2>
                </header>

                <main className="mt-8 flex flex-col gap-y-4">
                  <h2 className="text-desc">Updated April 2023</h2>
                  {quotaData.map(q => (
                    <div className="flex items-center gap-x-4">
                      <h2 className="subheading font-medium w-1/4">{q.type}</h2>
                      <Progress value={q.progress}/>
                      <p className="main-desc w-1/4 text-right">{q.totalText}</p>
                    </div>
                  ))}
                </main>
              </div>

              <footer className="flex justify-end mt-[19px] gap-x-[5px] items-center">
                <Link to={`/integration/appstore/${i.id}`}>
                  <Button className='btn-with-icon' variant='ghost'>
                    <LogOut viewBox="0 0 24 24" width='16' height='16'/>
                    view app
                  </Button>
                </Link>
                <Link to={`/integration/appstore/${i.id}`}>
                  <Button className='btn-with-icon'>
                    <LogOut viewBox="0 0 24 24" width='16' height='16'/>
                    Upgrade app
                  </Button>
                </Link>
              </footer>
            </>
          ))}
        </section>
      </main>
    </div>
  )
}