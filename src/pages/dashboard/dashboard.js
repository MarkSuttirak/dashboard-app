import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Separator } from "../../components/ui/separator";
import sellingOnline from 'src/img/selling-online.png'
import connectMessage from 'src/img/connect-message.png'
import createYourBlog from 'src/img/create-your-blog.png'
import { useUser } from "../../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../../client/api";
import PostInfo from "src/components/postInfo";
import DashboardBanner from "./dashboardBanner";
import SetupBusiness from "./setUpBusiness";
import { Skeleton } from "src/components/ui/skeleton";
import { useTranslation } from "react-i18next";
import DashboardVideo from "./dashboardVideo";
import DashboardTeam from "./dashboardTeam";
import UpgradeProButton from "src/components/topbar/upgradeProButton";
import { workspaceImages } from "src/components/icon-menus/workspace-images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ManageBusinessBanner from "./manageBusinessBanner";
import useChangeMenuActivities from "src/hooks/useChangeMenuActivities";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const location = useLocation()
  const [websiteSid, setwebsiteSid] = useState(false)
  const [menuActivity, setMenuActivity] = useState({
    title: "จัดการธุรกิจ",
    isChanging: false
  })
  const { menuActivities, workspaceMenus, actionMenus } = useChangeMenuActivities(menuActivity.title)

  const handleChangeActivities = (title) => {
    setMenuActivity(act => ({...act, isChanging: true}))
    setTimeout(() => {
      setMenuActivity({title: title, isChanging: false})
    }, 300)
  }

  const textGradient = (gradient) => {
    const style = {
      background: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
    return style
  }

  const { user, auth, logout } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth?.onboarding.site_created === false) {
      navigate('/dashboard/instance-configuration');
    }
  }, [auth?.onboarding.site_created]);

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: loadAdmin, refetch } = useQuery('loadAdmin', () => site.login(sites?.site_list[0].name, 'Admin'), {
    enabled: false,
    onSuccess: (res) => {
      //console.log(res);
    },
  });

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !loadAdmin) {
      refetch();
    }
  }, [user, sites, refetch]);

  // useEffect(() => {
  //   if (sites?.site_list[0].name) {
  //     loginAsAdmin({ name: sites?.site_list[0].name, reason: "Login as admin" })
  //   }
  // }, [sites?.site_list[0].name]);


  // const { data: siteOverview } = useQuery(['site', `${sites?.site_list[0].name}`], () => site.overview(sites?.site_list[0].name), {
  //   enabled: !!sites?.site_list.length,
  //   onSuccess: (res) => {
  //     if(res?.domains[0]?.name){
  //       loginAsAdmin({ name: res?.domains[0]?.name, reason: "Login as admin" })
  //     }
  //   }
  // });

  // const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.login(name, reason), {
  //   onSuccess: (res) => {
  //     const { sid, site } = res.data.message;
  //     if (sid && site) {
  //       setwebsiteSid(sid);
  //     }
  //   }
  // });

  const loginNow = (page) => {
    var sid = loadAdmin?.data?.message.sid;
    var sitetoview = sites?.site_list[0].name;
    if (sid) {
      window.open(`https://${sitetoview}/app/${page}?sid=${sid}`, '_blank');
    }
  }

  const manageMenus = document.getElementById("manage-menus")

  const handleSlideActivities = (side, y) => {
    manageMenus.scrollBy({
      top: 0,
      left: side === "left" ? -y : y,
      behavior: 'smooth'
    })
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div className="mb-6 md:hidden">
        <UpgradeProButton />
      </div>
      <div className="rounded-xl p-12 mx-5" style={{ background:"linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 0.02%, #DDD5FF 228.01%)"}}>
        <div className="flex flex-col items-center gap-y-3 max-w-5xl m-auto">
          <img src={workspaceImages.mainIcon} />

          <div className="flex flex-col items-center gap-y-1">
            {user ? 
              <h1 className="text-xl md:text-3xl text-primary font-bold tracking-[-0.75px] font-eventpop leading-8">
                สวัสดีคุณ 
                <span style={textGradient("linear-gradient(92.12deg, #7900FF -2.04%, #006AFF 89.63%)")} className="text-xl md:text-3xl ml-2">{user?.first_name}</span>🙏
              </h1> : <Skeleton className='h-8 w-[300px]' />
            }
            <p className="text-sm text-secondary">ใช้ประโยชน์ต่างๆ ได้มากขึ้นจาก แอปที่คุณรู้จักและชื่นชอบ</p>
          </div>

          <div className="flex lg:flex-wrap gap-x-3 gap-y-2 mt-5 justify-center">
            {workspaceMenus.map(menu => (
              // <a className="workspace-btn" href={menu.link} target={menu.link === '/coming_soon' ? "_blank" : null}>
              //   <img src={menu.icon} className="h-4 w-4"/>
              //   {menu.title}
              // </a>
              <button className="workspace-btn" onClick={() => handleChangeActivities(menu.title)}>
                <img src={menu.icon} className="h-4 w-4"/>
                {menu.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={`${menuActivity.isChanging ? 'opacity-0' : 'opacity-1'} transition-all duration-300`}>
        {menuActivities.length > 0 && 
          <section>
            <h2 className="secondary-heading px-5">{t('what_you_want_to_do')}</h2>

            <div className="relative">
              <div className="flex gap-x-4 py-6 overflow-auto px-5 relative" id="manage-menus">
                {menuActivities.map((n, index) => (
                  <div className="flex flex-col gap-y-4" key={n.title}>
                    <img src={n.image} className="rounded-lg max-h-[188px] object-cover min-w-[334px] w-[334px]"/>
                    <span className="text-sm">{n.title}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleSlideActivities("left", 500)} 
                className={`rounded-full bg-white h-9 w-9 absolute flex items-center justify-center left-2 top-[37.5%] shadow-md`}
              >
                <ChevronLeft />
              </button>
              <button 
                onClick={() => handleSlideActivities("right", 500)} 
                className={`rounded-full bg-white h-9 w-9 absolute flex items-center justify-center right-2 top-[37.5%] shadow-md`}
              >
                <ChevronRight />
              </button>
            </div>
          </section>
        }

        {actionMenus.length > 0 && 
          <section className="mb-10">
            <div className="grid grid-cols-3 gap-4 mt-6 px-5">
              {actionMenus.map((n, index) => (
                <div className="flex justify-between bg-[#F7F7F8] rounded-xl overflow-hidden">
                  <div className="flex flex-col justify-between p-4 pb-3">
                    <h2 className="text-[15px] font-medium">{n.title}</h2>
                    <p className="text-sm flex items-center gap-x-1">
                      Start designing
                      <ChevronRight className="w-4 h-4"/>
                    </p>
                  </div>
                  <img src={n.image} />
                </div>
              ))}
            </div>
          </section>
        }
      </section>

      <ManageBusinessBanner />
      <DashboardVideo />
      {/* <SetupBusiness sitename={(slug) => slug !== undefined && loginNow(slug)}/> */}
      <DashboardTeam />

      <section className="px-5">
        <h2 className="secondary-heading">{t('discover_what_you_can_do')}</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-x-[15px] gap-y-5">
          <PostInfo title="สร้าง Post และการตลาดออนไลน์" desc="สร้าง Brander หรือ Post ได้ง่าย ๆ พร้อมกับ เทมเพลตสุดปัง" image={createYourBlog} imageStyle="pr-2" comingSoon onClick={() => window.open("/coming-soon", '_blank')} />
          <PostInfo title="วางแผนและจัดการงานของทีม" desc="วางแผนและจัดชีวิตให้ง่ายขึ้นด้วย เทมเพลต Projects Manager" comingSoon image={sellingOnline} imageStyle="px-5" onClick={() => window.open("/coming-soon", '_blank')} />
          <PostInfo title="เชื่อมต่อ Shopee & Lazada" desc="จัดการออเดอร์อย่างมีประสิทธิภาพด้วยการเชื่อมต่อกับช่องทางการขายหลากหลายแพลตฟอร์ม" buttonText="เชื่อมต่อช่องทางการขาย" image={connectMessage} imageStyle='pl-4 pb-4' onClick={() => window.open("/coming-soon", '_blank')} />
        </div>
      </section>
    </div>
  )
}