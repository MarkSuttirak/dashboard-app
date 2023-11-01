import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import AccountForm from "./accountForm";
import { useState } from "react";
import BillingPlan from "./billingPlan";
import NotificationsForm from "./notifications";
import DisplayForm from "./display";
import PagesMenus from "src/components/pagesMenus";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import Invoices from "./invoices";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/dashboard/settings/account",
  },
  {
    title: "Billing & Plans",
    href: "/dashboard/settings/billing-plans",
  },
  {
    title: "Notifications",
    href: "/dashboard/settings/notifications",
  },
]

export default function Settings(){
  const { id } = useParams()
  return (
    <div className="dashboard-container">
      <h1 className="main-heading">Settings</h1>

      <main className="flex gap-x-10 mt-8">
        <PagesMenus menus={sidebarNavItems} />
        {id === 'account' && (
          <section className="w-[672px]">
            <h2 className="tertiary-heading">Account</h2>
            <p className="secondary-desc">Update your account settings. Set your preferred language and timezone.</p>

            <Separator className='my-6'/>
            <AccountForm />
          </section>
        )}

        {id === 'billing-plans' && (
          <section className="w-[672px]">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
              </TabsList>
              <Separator className='my-6'/>
              <TabsContent value="overview">
                <BillingPlan />
              </TabsContent>
              <TabsContent value="invoices">
                <Invoices />
              </TabsContent>
            </Tabs>
          </section>
        )}

        {id === 'notifications' && (
          <section className="w-[672px]">
            <h2 className="tertiary-heading">Notifications</h2>
            <p className="secondary-desc">Configure how you receive notifications.</p>

            <Separator className='my-6'/>
            <NotificationsForm />
          </section>
        )}

        {id === 'display' && (
          <section className="w-[672px]">
            <h2 className="tertiary-heading">Display</h2>
            <p className="secondary-desc">Turn items on or off to control what's displayed in the app.</p>

            <Separator className='my-6'/>
            <DisplayForm />
          </section>
        )}
      </main>
    </div>
  )
}