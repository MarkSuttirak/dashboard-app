import { useParams } from "react-router-dom"
import PagesMenus from "src/components/pagesMenus"
import ManageOrUpgradeApps from "./manageOrUpgradeApps"

export const sidebarNavItems = [
  {
    title: "Manage Apps",
    href: "/integration/manage-apps",
  },
  {
    title: "Upgrade Apps",
    href: "/integration/upgrade-apps",
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
      </main>
    </div>
  )
}