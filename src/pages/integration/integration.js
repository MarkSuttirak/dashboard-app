import { useParams } from "react-router-dom"
import ManageOrUpgradeApps from "./manageOrUpgradeApps"
import { useTranslation } from "react-i18next"
import SettingsHeading from "src/components/settings/settingsHeading"
import SettingsMenus from "src/components/settings/settingsMenus"

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
      <SettingsHeading text={t('menus.integration')} link={-1} />

      <main className={`flex flex-col ${id ? 'md:flex-row' : 'lg:flex-row'} gap-y-8 gap-x-12 lg:gap-x-[72px] mt-8`}>
        <SettingsMenus id={id} menus={sidebarNavItems} />

        <section className="w-full md:max-w-[672px]">
          {(id === 'manage-apps' || id === 'upgrade-apps') && (
            <ManageOrUpgradeApps />
          )}
        </section>
      </main>
    </div>
  )
}