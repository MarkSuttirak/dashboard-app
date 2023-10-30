import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "../../components/ui/navigation-menu"
import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import AccountForm from "./accountForm";
import { useState } from "react";
import SettingsMenus from "./settingsMenus";
import { AppearanceForm } from "./appearance";

export default function Settings(){
  const [settingsPage, setSettingsPage] = useState('account')
  const menuStyle = "group flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  const { id } = useParams(settingsPage)
  return (
    <div className="dashboard-container">
      <h1 className="main-heading">Settings</h1>

      <main className="flex gap-x-10 mt-8">
        <section>
          <SettingsMenus setMenu={setSettingsPage}/>
        </section>
          {id === 'account' && (
            <section>
              <h2 className="secondary-heading">Account</h2>
              <p className="secondary-desc">Update your account settings. Set your preferred language and timezone.</p>

              <Separator className='my-6'/>
              <AccountForm />
            </section>
          )}

          {id === 'appearance' && (
            <section>
              <h2 className="secondary-heading">Appearance</h2>
              <p className="secondary-desc">Customize the appearance of the app. Automatically switch between day and night themes.</p>

              <Separator className='my-6'/>
              <AppearanceForm />
            </section>
          )}
      </main>
    </div>
  )
}