import { useParams } from "react-router-dom"
import PagesMenus from "src/components/pagesMenus"
import ManageOrUpgradeApps from "./manageOrUpgradeApps"
import { useTranslation } from "react-i18next"

export default function Integration(){
  const { t } = useTranslation()
  const { id } = useParams()

  const sidebarNavItems = [
    {
      title: t('integration.manage_apps'),
      href: "/integration/manage-apps",
    },
    {
      title: t('integration.upgrade_apps'),
      href: "/integration/upgrade-apps",
    },
  ]

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">{t('menus.integration')}</h1>

      <main className="flex flex-col lg:flex-row gap-y-8 gap-x-[72px] mt-8">
        <PagesMenus menus={sidebarNavItems} />

        {(id === 'manage-apps' || id === 'upgrade-apps') && (
          <ManageOrUpgradeApps />
        )}
      </main>
    </div>
  )
}