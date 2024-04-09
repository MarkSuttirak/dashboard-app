import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import AccountForm from "./accountForm";
import BillingPlan from "./billingPlan";
import PlanUpgrades from "./planUpgrade";
import DisplayForm from "./display";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Invoices from "./invoices";
import Subscription from "./subscription";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { Button } from "src/components/ui/button";
import SettingsHeading from "src/components/settings/settingsHeading";
import SettingsMenus from "src/components/settings/settingsMenus";

export default function Settings(){
  const { t } = useTranslation()
  const navigate = useNavigate()

  const sidebarNavItems = [
    {
      title: t('settings.account'),
      href: "/dashboard/settings/account",
    },
    {
      title: t('settings.billing_plans'),
      href: "/dashboard/settings/billing-plans",
    },
  ]

  const { id } = useParams()
  return (
    <div className="page-container">
      <SettingsHeading text={t('menus.settings')} link={-1}/>

      <main className={`flex flex-col ${id ? 'md:flex-row' : 'lg:flex-row'} gap-y-8 gap-x-12 xl:gap-x-[72px] mt-12 lg:mt-8`}>
        <SettingsMenus id={id} menus={sidebarNavItems} />

        <section className="md:max-w-[672px] w-full">
          {id === 'plan-upgrade' && (
            <PlanUpgrades />
          )}

          {id === 'account' && (
            <>
              <div className="mb-8">
                <h2 className="settings-heading">{t('settings.account')}</h2>
                <p className="main-desc">{t('settings.account_desc')}</p>
              </div>

              <AccountForm />
            </>
          )}

          {id === 'billing-plans' && (
            <>
              <Tabs defaultValue="overview">
                <div className="overflow-auto py-1">
                  <TabsList className="px-5 md:px-1 inline-flex gap-x-4 md:gap-x-0 lg:inline-block">
                    <TabsTrigger value="overview">{t('settings.overview.title')}</TabsTrigger>
                    <TabsTrigger value="purchase-history">{t('settings.purchase_history.title')}</TabsTrigger>
                    <TabsTrigger value="billing">{t('settings.billing')}</TabsTrigger>
                  </TabsList>
                </div>
                <Separator className='my-4 md:my-6'/>
                <TabsContent value="overview" className="px-5 md:px-0">
                  <Subscription />
                </TabsContent>
                <TabsContent value="purchase-history" className="px-5 md:px-0">
                  <Invoices />
                </TabsContent>
                <TabsContent value="billing" className="px-5 md:px-0">
                  <BillingPlan />
                </TabsContent>
              </Tabs>
            </>
          )}

          {id === 'display' && (
            <>
              <h2 className="settings-heading">Display</h2>
              <p className="main-desc">Turn items on or off to control what's displayed in the app.</p>

              <Separator className='my-6'/>
              <DisplayForm />
            </>
          )}
        </section>
      </main>
    </div>
  )
}