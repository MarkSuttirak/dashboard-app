import { Link, useNavigate, useParams } from "react-router-dom"
import { Separator } from "src/components/ui/separator";
import { useState, useRef } from "react";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import TeamMembers from "./teammembers";
import AllTeams from "./allteams";
import { useToast } from "src/components/ui/use-toast";
import { Toaster } from "src/components/ui/toaster"
import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "src/components/ui/dialog"
import { useMutation, useQuery } from "react-query";
import { site, team } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { Skeleton } from "src/components/ui/skeleton";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import SettingsHeading from "src/components/settings/settingsHeading";
import SettingsMenus from "src/components/settings/settingsMenus";
import Bannerteam from "./bannerteam";

export default function Teams() {
  const { t } = useTranslation()
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
  console.log("id", id);
  const inviteLinkRef = useRef(null)

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)

  const sidebarNavItems = [
    {
      title: t('teams.teammembers'),
      href: "/dashboard/teams/members",
    },
    {
      title: t('teams.my_teams'),
      href: "/dashboard/teams/my-teams",
    }
  ]

  const copyLink = () => {
    inviteLinkRef.current.select()
    document.execCommand('copy')
    toast({
      title: (<div className="flex gap-x-3">
        <CheckCircle2 className="h-4 w-4 mt-1" />
        <div className="flex flex-col gap-y-1">
          <h3>{t('teams.link_copied.title')}</h3>
          <p className="font-normal">{t('teams.link_copied.desc')}</p>
        </div>
      </div>),
    })
  }

  return (
    <div className="dashboard-container">
      <SettingsHeading text={t('menus.teams')} link={-1}/>

      <main className={`flex flex-col ${id ? 'md:flex-row' : 'lg:flex-row'} gap-y-8 gap-x-12 lg:gap-x-[72px] mt-12 lg:mt-8`}>
        <SettingsMenus id={id} menus={sidebarNavItems} />

        <section className="max-w-[672px] w-full">
          {id === "members" && (
            <>
              <h2 className="settings-heading">{t('teams.manage_members.title')}</h2>
              <p className="main-desc">{t('teams.manage_members.desc')}</p>

              {auth?.team?.invite_code ? (
                <div className="flex w-full items-center space-x-2 mt-6 mb-[10px]">
                  <Input type="link" value={`https://${window.location.host}/invite/${auth.team.invite_code}`} ref={inviteLinkRef} />
                  <Button onClick={copyLink}>{t('teams.copy_link')}</Button>
                </div>
              ) : <Skeleton className='h-9 w-full mt-6 mb-[10px]' />}

              <Toaster />

              <p className="main-desc">
                {t('teams.invitation_desc')} {t(`teams.${auth?.team?.invite_code_rotation_interval}`)}.{" "}
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger className="text-[#006AFF]">{t('teams.edit_invitation')}</DialogTrigger>
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
              <Bannerteam />
            </>
          )}

          {id === 'my-teams' && (
            <>
              <h2 className="settings-heading">{t('teams.all_teams.title')}</h2>
              <p className="main-desc">{t('teams.all_teams.desc')}</p>

              <AllTeams />
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export const SettingsDialogContent = ({ ...props }) => {
  const { getUser } = useUser()
  const { toast } = useToast()

  const { t } = useTranslation()

  const expireAfter = [t('teams.12 Hours'), t('teams.1 Day'), t('teams.3 Days'), t('teams.7 Days')]
  const maximumUses = [t('teams.1 use'), t('teams.5 uses'), t('teams.10 uses'), t('teams.20 uses'), t('teams.30 uses'), t('teams.No Limit')]

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
          <h3>{t('teams.link_generated.title')}</h3>
          <p className="font-normal">{t('teams.link_generated.desc')}</p>
        </div>
      </div>),
    })
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{t('teams.edit_invitation')}</DialogTitle>
        <DialogDescription className='flex flex-col gap-y-6 py-6'>
          <div className="anim-up flex flex-col">
            <label className="subheading mb-2">
              {t('teams.expire_after')}
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
            <label className="subheading mb-2">
              {t('teams.maximum_uses')}
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
              {t('cancel')}
            </Button>
          </DialogClose>
          <Button type="button" onClick={formik.handleSubmit}>
            {t('teams.generate_link')}
          </Button>
        </div>
      </DialogFooter>
    </DialogContent>
  )
}