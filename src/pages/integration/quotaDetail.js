import { Link, useParams } from "react-router-dom";
import { totalAppsQuota } from "./appQuota";
import { Progress } from "src/components/ui/progress";
import { Button } from "src/components/ui/button";
import { ArrowUpRight, Zap } from "lucide-react";
import SettingsMenus from "src/components/settings/settingsMenus";
import { SidebarNavItems } from "./integration";
import SettingsHeading from "src/components/settings/settingsHeading";

export function QuotaAppName(){
  const { app } = useParams()
  return app
}

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

  return (
    <div className="dashboard-container">
      <SettingsHeading text="Integration" link={-1} />

      <main className="flex gap-x-12 mt-8">
        <SettingsMenus id={`quota-detail/${QuotaAppName()}`} menus={SidebarNavItems()} />
        <section className="w-[672px]">
          <div className="md:ml-6">
            <h2 className="settings-heading">Quota detail</h2>
            <p className="main-desc">Control upgrades and review limits for each apps on your site</p>
          </div>

          {totalAppsQuota.filter(item => item.id == QuotaAppName()).map(i => (
            <>
              <div className='mt-6 bg-[#F7F7F8] border-none p-6 rounded-lg'>
                <header className="flex items-center gap-x-4">
                  {i.icon}
                  <h2 className="subheading font-medium">{i.title}</h2>
                </header>

                <main className="mt-8 flex flex-col gap-y-4">
                  <h2 className="text-desc">Updated April 2023</h2>
                  {quotaData.map(q => (
                    <>
                      <div className="hidden md:flex items-center gap-x-4">
                        <h2 className="subheading font-medium w-1/4">{q.type}</h2>

                        <div className="w-full flex gap-x-[11px] items-center">
                          <Progress value={q.progress} />
                          <span className="text-xs inline-block w-[40px]">({q.progress}%)</span>
                        </div>

                        <p className="main-desc w-1/4 text-right">{q.totalText}</p>
                      </div>

                      <div className="md:hidden flex flex-col items-center gap-x-4 gap-y-1">
                        <div className="flex items-center w-full justify-between">
                          <h2 className="subheading font-medium">{q.type}</h2>

                          <div className="w-fit flex items-center gap-x-2">
                            <span className="text-xs inline-block w-[40px]">({q.progress}%)</span>
                            <p className="main-desc">{q.totalText}</p>
                          </div>
                        </div>

                        <Progress value={q.progress} />
                      </div>
                    </>
                  ))}
                </main>
              </div>

              <footer className="flex justify-between md:justify-end mt-[19px] gap-x-[5px] items-center">
                <Link to={`/integration/appstore/${i.id}`}>
                  <Button className='btn-with-icon' variant='ghost'>
                    <ArrowUpRight viewBox="0 0 24 24" width='16' height='16'/>
                    view app
                  </Button>
                </Link>
                <Link to={`/integration/appstore/${i.id}`}>
                  <Button className='btn-with-icon'>
                    <Zap viewBox="0 0 24 24" width='16' height='16'/>
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