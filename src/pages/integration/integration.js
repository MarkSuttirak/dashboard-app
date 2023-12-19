import { useParams } from "react-router-dom"
import PagesMenus from "src/components/pagesMenus"
import ManageOrUpgradeApps from "./manageOrUpgradeApps"
import AppsQuota from "./appQuota"

export const sidebarNavItems = [
  {
    title: "Manage Apps",
    href: "/integration/manage-apps",
  },
  {
    title: "Upgrade Apps",
    href: "/integration/upgrade-apps",
  },
  {
    title: "Apps Quota",
    href: "/integration/apps-quota",
  },
]

export default function Integration(){
  const { id } = useParams()

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">Integration</h1>

      <main className="flex gap-x-[72px] mt-8">
        <PagesMenus menus={sidebarNavItems} />

        {(id === 'manage-apps' || id === 'upgrade-apps') && (
          <ManageOrUpgradeApps />
        )}

        {id === 'apps-quota' && (
          <section className="w-[672px]">
            <h2 className="settings-heading">Apps Quota</h2>
            <p className="main-desc">Control upgrades and review limits for each apps on your site</p>
            <AppsQuota />
          </section>
        )}
      </main>
    </div>
  )
}