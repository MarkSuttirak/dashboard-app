import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import AccountForm from "./accountForm";
import BillingPlan from "./billingPlan";
import PlanUpgrades from "./planUpgrade";
import DisplayForm from "./display";
import PagesMenus from "src/components/pagesMenus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Invoices from "./invoices";
import Subscription from "./subscription";
import { useTranslation } from "react-i18next";

export default function Settings(){
  const { t } = useTranslation()

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
    <div className="dashboard-container">
      <h1 className="main-heading">{t('menus.settings')}</h1>

      <main className="flex gap-x-[72px] mt-8">
        <PagesMenus menus={sidebarNavItems} />

        {id === 'plan-upgrade' && (
          <section className="w-[672px]">
            <PlanUpgrades />
          </section>
        )}

        {id === 'account' && (
          <section className="w-[672px]">
            <div className="mb-8">
              <h2 className="settings-heading">{t('settings.account')}</h2>
              <p className="main-desc">{t('settings.account_desc')}</p>
            </div>

            <AccountForm />
          </section>
        )}

        {id === 'billing-plans' && (
          <section className="w-[672px]">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">{t('settings.overview.title')}</TabsTrigger>
                <TabsTrigger value="purchase-history">{t('settings.purchase_history.title')}</TabsTrigger>
                <TabsTrigger value="billing">{t('settings.billing')}</TabsTrigger>
              </TabsList>
              <Separator className='my-6'/>
              <TabsContent value="overview">
                <Subscription />
              </TabsContent>
              <TabsContent value="purchase-history">
                <Invoices />
              </TabsContent>
              <TabsContent value="billing">
                <BillingPlan />
              </TabsContent>
            </Tabs>
          </section>
        )}

        {id === 'display' && (
          <section className="w-[672px]">
            <h2 className="settings-heading">Display</h2>
            <p className="main-desc">Turn items on or off to control what's displayed in the app.</p>

            <Separator className='my-6'/>
            <DisplayForm />
          </section>
        )}
      </main>
    </div>
  )
}