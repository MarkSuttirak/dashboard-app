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
import { site, team } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Skeleton } from "src/components/ui/skeleton";
import { useFormik } from "formik";

const sidebarNavItems = [
  {
    title: "Team Members",
    href: "/dashboard/teams",
  },
  {
    title: "Teams",
    href: "/dashboard/teams/teams",
  }
]

const expireAfter = ['12 Hours', '1 Day', '3 Days', '7 Days']
const maximumUses = ['1 use', '5 uses', '10 uses', '20 uses', '30 uses', 'No Limit']

export default function Teams() {
  const { user, auth, getUser } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
    enabled: !!sites?.site_list.length
  });

  const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.login(name, reason), {
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
  console.log("id", id);
  const inviteLinkRef = useRef(null)

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)



  const copyLink = () => {
    inviteLinkRef.current.select()
    document.execCommand('copy')
    toast({
      title: (<div className="flex gap-x-3">
        <CheckCircle2 className="h-4 w-4 mt-1" />
        <div className="flex flex-col gap-y-1">
          <h3>Link copied</h3>
          <p className="font-normal">You can send the link to new teammates</p>
        </div>
      </div>),
    })
  }

  return (
    <div className="dashboard-container">
      <h1 className="main-heading">Teams</h1>

      <main className="flex gap-x-[72px] mt-8">
        <PagesMenus menus={sidebarNavItems} />
        {!id && (
          <section className="w-[672px]">
            <h2 className="settings-heading">Manage Members</h2>
            <p className="main-desc">You can invite team members and control their positions.</p>

            {auth?.team?.invite_code ? (
              <div className="flex w-full items-center space-x-2 mt-6 mb-[10px]">
                <Input type="link" value={`https://${window.location.host}/invite/${auth.team.invite_code}`} ref={inviteLinkRef} />
                <Button variant='secondary' onClick={copyLink}>Copy Link</Button>
              </div>
            ) : <Skeleton className='h-9 w-full mt-6 mb-[10px]' />}

            <Toaster />

            <p className="main-desc">
              Your invitation link will expire after every {auth?.team?.invite_code_rotation_interval}.{" "}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="text-[#006AFF]">Edit invitation link</DialogTrigger>
                {
                  auth?.team && (
                    <SettingsDialogContent
                      setOpen={setOpen}
                      open={open}
                      initialValues={{
                        invite_code_rotation_interval: auth.team.invite_code_rotation_interval,
                        invite_code_usage_limit: auth.team.invite_code_usage_limit
                      }} />
                  )
                }
              </Dialog>
            </p>

            <Separator className='my-6' />

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

export const SettingsDialogContent = ({ ...props }) => {
  const { getUser } = useUser()
  const { toast } = useToast()

  const formik = useFormik({
    initialValues: props.initialValues,
    onSubmit: (values) => team.change_team_settings(values).then(() => {
      getUser()
      generateLink()
    })
  });

  const generateLink = () => {
    props.setOpen(false)
    toast({
      title: (<div className="flex gap-x-3">
        <CheckCircle2 className="h-4 w-4 mt-1" />
        <div className="flex flex-col gap-y-1">
          <h3>Link generated</h3>
          <p className="font-normal">The information has been updated</p>
        </div>
      </div>),
    })
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit invitation link</DialogTitle>
        <DialogDescription className='flex flex-col gap-y-6 py-6'>
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
              Expire after
            </label>
            <select className='form-input'
              name="invite_code_rotation_interval"
              value={formik.values.invite_code_rotation_interval}
              onChange={formik.handleChange}
            >
              {expireAfter.map(r =>
                <option value={r} key={r}>{r}</option>
              )}
            </select>
          </div>

          <div className="anim-up flex flex-col">
            <label className="subheading mb-2 font-medium">
              Maximum number of uses
            </label>
            <select
              className='form-input'
              name="invite_code_usage_limit"
              value={formik.values.invite_code_usage_limit}
              onChange={formik.handleChange}
            >
              {maximumUses.map(m =>
                <option value={m} key={m}>{m}</option>
              )}
            </select>
          </div>

          {/* <div className="anim-up flex flex-col"> 
          {/* <label className="subheading mb-2 font-medium">
            Expire after
          </label>
          <Select className='form-input'
            name="invite_code_rotation_interval"
            defaultValue={expireAfter[0]}
            value={formik.values.invite_code_rotation_interval}
            onchange={opt => formik.setFieldValue('invite_code_rotation_interval', opt)}
          >
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
          <Select
            className='form-input'
            name="invite_code_usage_limit"
            value={formik.values.invite_code_usage_limit}
            onchange={opt => console.log(opt)}
          >
            <SelectTrigger className="w-full">
              <SelectValue defaultValue={maximumUses[0]} />
            </SelectTrigger>
            <SelectContent>
              {maximumUses.map(m =>
                <SelectItem value={m}>{m}</SelectItem>
              )}
            </SelectContent>
          </Select>
        </div> */}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <div className="flex w-full justify-between">
          <DialogClose asChild>
            <Button type="button" variant="ghost">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={formik.handleSubmit}>
            Generate a new link
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>

  )
}
