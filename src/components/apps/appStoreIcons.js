import AppIcon from "src/components/appIcon";
import { site } from "../../client/api";
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { Icons } from "src/components/ui/icons"

export default function AppStoreIcons(){
  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const benchApps = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {enabled: false});
  const installedApps = useQuery('installed_apps', () => site.installed_apps(sites.site_list[0].name), {enabled: false});  

  const appslists = benchApps.data || [];

  return (
    <>{appslists?.map(app => 
      <AppIcon icon={app.image ? <img src={site.backend_url()+app.image} className="w-[72px] h-[72px] min-w-[72px] min-h-[72px]"/> : <Icons.erpApp className='w-[72px] h-[72px]'/>} title={app.title} desc={app.description} link={`/integration/appstore/${app.title}`}/>
    )}</>
  )
}