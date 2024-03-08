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
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { Button } from "src/components/ui/button";
import { ChevronRight } from "lucide-react";

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
    <div className="dashboard-container">
      <h1 className="main-heading">{t('menus.settings')}</h1>

      <main className="flex flex-col lg:flex-row gap-y-8 gap-x-[72px] mt-8">
        {id ? <PagesMenus menus={sidebarNavItems} hiddenOnResponsive={true}/> : (
          <div className="flex flex-col gap-y-4">
            {sidebarNavItems.map(item => (
              <Link to={item.href} className='flex items-center justify-between'>
                {item.title}
                <ChevronRight class="w-4 h-4"/>
              </Link>
            ))}
          </div>
        )}

        {id === 'plan-upgrade' && (
          <section className="max-w-[672px] w-full">
            <PlanUpgrades />
          </section>
        )}

        {id === 'account' && (
          <section className="max-w-[672px] w-full">
            <div className="mb-8">
              <h2 className="settings-heading">{t('settings.account')}</h2>
              <p className="main-desc">{t('settings.account_desc')}</p>
            </div>

            <AccountForm />
          </section>
        )}

        {id === 'billing-plans' && (
          <section className="max-w-[672px] w-full">
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
          <section className="max-w-[672px] w-full">
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