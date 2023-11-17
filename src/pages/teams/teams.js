import { Link, useParams } from "react-router-dom"
import { Separator } from "../../components/ui/separator";
import { useState, useRef } from "react";
import PagesMenus from "src/components/pagesMenus";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import TeamMembers from "./teammembers";
import AllTeams from "./allteams";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster"

const sidebarNavItems = [
  {
    title: "Team Members",
    href: "/dashboard/teams/team-members",
  },
  {
    title: "Teams",
    href: "/dashboard/teams/teams",
  }
]

export default function Teams(){
  const menuStyle = "group flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
  const { id } = useParams()
  const { toast } = useToast()

  const emailRef = useRef(null)

  const copyLink = () => {
    emailRef.current.select()
    document.execCommand('copy')
    toast({
      title: 'Link copied'
    })
  }
  return (
    <div className="dashboard-container">
      <h1 className="main-heading">Teams</h1>

      <main className="flex gap-x-10 mt-8">
        <PagesMenus menus={sidebarNavItems}/>
        {id === 'team-members' && (
          <section className="w-[672px]">
            <h2 className="settings-heading">Manage Members</h2>
            <p className="main-desc">Anyone with the link can view this document.</p>

            <div className="flex w-full items-center space-x-2 mt-6">
              <Input type="email" placeholder="Email" ref={emailRef}/>
              <Button variant='secondary' onClick={copyLink}>Copy Link</Button>
              <Toaster />
            </div>

            <Separator className='my-6'/>

            <TeamMembers />
          </section>
        )}

        {id === 'teams' && (
          <section className="w-[672px]">
            <h2 className="secondary-heading">All your teams</h2>
            <p className="secondary-desc">You can switch between team work space here.</p>

            <AllTeams />
          </section>
        )}
      </main>
    </div>
  )
}