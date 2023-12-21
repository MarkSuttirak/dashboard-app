import { Link, useLocation, useParams } from "react-router-dom"
import { Separator } from "src/components/ui/separator";
import { useState, useRef } from "react";
import PagesMenus from "src/components/pagesMenus";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import TeamMembers from "./teammembers";
import AllTeams from "./allteams";
import { useToast } from "src/components/ui/use-toast";
import { Toaster } from "src/components/ui/toaster"
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "src/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Skeleton } from "src/components/ui/skeleton";

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

const expireAfter = ['12 hours','1 day','3 days','7 days']
const maximumUses = ['1 use','5 uses','10 uses','20 uses','30 uses','Unlimited']

export default function Teams(){
  const { user, auth } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
    onSuccess: (res) => {
      const { sid, site } = res.data.message;
      if (sid && site) {
        window.open(`https://${site}/app/home?sid=${sid}`, '_blank');
      }
    }
  });

  const { id } = useParams()
  const { toast } = useToast()
  const location = useLocation()

  const emailRef = useRef(null)

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  const copyLink = () => {
    emailRef.current.select()
    document.execCommand('copy')
    toast({
      title: (<div className="flex gap-x-3">
        <CheckCircle2 className="h-4 w-4 mt-1"/>
        <div className="flex flex-col gap-y-1">
          <h3>Link copied</h3>
          <p className="font-normal">You can send the link to new teammates</p>
        </div>
      </div>),
    })
  }

  const generateLink = () => {
    setOpen(false)
    toast({
      title: (<div className="flex gap-x-3">
        <CheckCircle2 className="h-4 w-4 mt-1"/>
        <div className="flex flex-col gap-y-1">
          <h3>Link generated</h3>
          <p className="font-normal">The information has been updated</p>
        </div>
      </div>),
    })
  }

  return (
    <div className="dashboard-container">
      <h1 className="main-heading">Teams</h1>

      <main className="flex gap-x-[72px] mt-8">
        <PagesMenus menus={sidebarNavItems}/>
        {id === 'team-members' && (
          <section className="w-[672px]">
            <h2 className="settings-heading">Manage Members</h2>
            <p className="main-desc">You can invite team members and control their positions.</p>

            {sites ? (
              <div className="flex w-full items-center space-x-2 mt-6 mb-[10px]">
                <Input type="text" placeholder="Email" value={'https://' + sites?.site_list[0].name} ref={emailRef}/>
                <Button variant='secondary' onClick={copyLink}>Copy Link</Button>
              </div>
            ) : <Skeleton className='h-9 w-full mt-6 mb-[10px]'/>}

            <Toaster />

            <p className="main-desc">
              Your invitation link will expire in {expireAfter[selected]}.{" "}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="text-[#006AFF]">Edit invitation link</DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit invitation link</DialogTitle>
                    <DialogDescription className='flex flex-col gap-y-6 py-6'>
                      <div className="anim-up flex flex-col">
                        <label className="subheading mb-2 font-medium">
                          Expire after
                        </label>
                        <Select className='form-input' name="expire-after" defaultValue={expireAfter[0]}>
                          <SelectTrigger className="w-full">
                            <SelectValue defaultValue={expireAfter[0]} />
                          </SelectTrigger>
                          <SelectContent>
                            {expireAfter.map(r => 
                              <SelectItem value={r}>{r}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="anim-up flex flex-col">
                        <label className="subheading mb-2 font-medium">
                          Maximum number of uses
                        </label>
                        <Select className='form-input' name="expire-after" defaultValue={maximumUses[0]}>
                          <SelectTrigger className="w-full">
                            <SelectValue defaultValue={maximumUses[0]} />
                          </SelectTrigger>
                          <SelectContent>
                            {maximumUses.map(m => 
                              <SelectItem value={m}>{m}</SelectItem>
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <div className="flex w-full justify-between">
                      <DialogClose asChild>
                        <Button type="button" variant="ghost">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button type="button" onClick={generateLink}>
                        Generate a new link
                      </Button>
                    </div>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </p>

            <Separator className='my-6'/>

            <TeamMembers />
          </section>
        )}

        {id === 'teams' && (
          <section className="w-[672px]">
            <h2 className="settings-heading">All your teams</h2>
            <p className="main-desc">You can promptly switch to other teams upon receiving an invitation to join there them.</p>

            <AllTeams />
          </section>
        )}
      </main>
    </div>
  )
}