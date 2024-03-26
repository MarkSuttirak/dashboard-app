import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Separator } from "../../components/ui/separator";
import { ButtonImage01, ButtonImage02, ButtonImage03, ButtonImage04, ButtonImage05, ButtonImage06 } from "../../components/buttonImage";
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
import { Icons } from "src/components/ui/icons";
import DashboardTeam from "./dashboardTeam";
import UpgradeProButton from "src/components/topbar/upgradeProButton";
import { blogAndNews, customerDataSystem, graphicDesign, hrspace, linecrm, mainIcon, manageBusiness, manageWebsite, pos, projectManagement, salesteam, whiteboard } from "src/components/icon-menus/workspace-images";

export default function Dashboard() {
  const { t, i18n } = useTranslation();
  const location = useLocation()
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)
  const [websiteSid, setwebsiteSid] = useState(false)

  const textGradient = (gradient) => {
    const style = {
      background: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }
    return style
  }

  const handleCardHover = (index) => {
    setIsMenuCardHover(true)
    setMenuCardIndex(index)
  }

  const handleCardHoverLeave = () => {
    setIsMenuCardHover(false)
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

  const newOrManageMenus = [
    {
      title: t('dashboard.manage_menus.manage_items'),
      image: <ButtonImage01 shadow={false} />,
      background: "#EFE3F6",
      page: "item/new-item-1",
      color: "#EB67FF"
    },
    {
      title: t('dashboard.manage_menus.edit_shipping_rates'),
      image: <ButtonImage02 shadow={false} />,
      background: "#DDFEF4",
      page: "item/new-item-1",
      color: "#01545E"
    },
    {
      title: t('dashboard.manage_menus.add_new_customers'),
      image: <ButtonImage03 shadow={false} />,
      background: "#F5F2FE",
      color: "#4C349F"
    },
    {
      title: t('dashboard.manage_menus.set_up_payments'),
      image: <ButtonImage04 shadow={false} />,
      background: "#E5F5FF",
      color: "#419CFF"
    },
    {
      title: t('dashboard.manage_menus.view_orders'),
      image: <ButtonImage05 shadow={false} />,
      background: "#FFF9E9",
      color: "#FABF20"
    },
    {
      title: t('dashboard.manage_menus.create_promotions'),
      image: <ButtonImage06 shadow={false} />,
      background: "#F5FFE5",
      color: "#174F20"
    },
  ]

  const workspaceMenus = [
    { title: t('workspace_buttons.manage_business'), icon: manageBusiness, link: 'https://www.zaviago.com/manage' },
    { title: t('workspace_buttons.blog_editor'), icon: blogAndNews, link: '/coming-soon' },
    { title: 'ระบบข้อมูลลูกค้า', icon: customerDataSystem, link: 'https://www.zaviago.com/crm' },
    { title: 'จัดการเว็บไซต์', icon: manageWebsite, link: '/coming-soon' },
    { title: 'ตามงานและดูโปรเจ็ค', icon: projectManagement, link: 'https://www.zaviago.com/marketplace' },
    { title: 'ออกแบบ Graphic', icon: graphicDesign, link: '/coming-soon' },
    { title: 'WhiteBoard', icon:whiteboard, link: '/coming-soon' },
    { title: 'SalesTeam', icon: salesteam, link: '/coming-soon' },
    { title: 'HRSpace', icon: hrspace, link: '/coming-soon' },
    { title: 'เว็บไซต์', icon: manageWebsite, link: '/coming-soon' },
    { title: 'Line CRM', icon: linecrm, link: '/coming-soon' },
    { title: 'แคชเชียร์ - POS', icon: pos, link: '/coming-soon' },
  ]

  return (
    <div className="flex flex-col gap-y-6">
      <div className="mb-6 md:hidden">
        <UpgradeProButton />
      </div>
      <div className="rounded-xl p-12" style={{ background:"linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 0.02%, #DDD5FF 228.01%)"}}>
        <div className="flex flex-col items-center gap-y-3 max-w-5xl m-auto">
          <img src={mainIcon} />

          <div className="flex flex-col items-center gap-y-1">
            {user ? 
              <h1 className="text-xl md:text-3xl text-primary font-bold tracking-[-0.75px] font-eventpop leading-8">
                สวัสดีคุณ 
                <span style={textGradient("linear-gradient(92.12deg, #7900FF -2.04%, #006AFF 89.63%)")} className="text-xl md:text-3xl ml-2">{user?.first_name}</span>🙏
              </h1> : <Skeleton className='h-8 w-[300px]' />
            }
            <p className="text-sm text-secondary">ใช้ประโยชน์ต่างๆ ได้มากขึ้นจาก แอปที่คุณรู้จักและชื่นชอบ</p>
          </div>

          <div className="flex lg:flex-wrap gap-x-3 gap-y-2 overflow-scroll lg:overflow-visible mt-5 justify-center">
            {workspaceMenus.map(menu => (
              <a className="workspace-btn" href={menu.link} target={menu.link === '/coming_soon' ? "_blank" : null}>
                <img src={menu.icon} className="h-4 w-4"/>
                {menu.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section>
        <h2 className="secondary-heading px-5 lg:px-0">{t('what_you_want_to_do')}</h2>

        <div className="flex">
          {newOrManageMenus.map((n, index) => (
            <div>
              {n.image}
              <span>{n.title}</span>
            </div>
          ))}
        </div>
      </section>

      <DashboardVideo />
      {/* <SetupBusiness sitename={(slug) => slug !== undefined && loginNow(slug)}/> */}

      <DashboardTeam />
      {/* <section className="my-[76px]">
        <h2 className="secondary-heading">App Store</h2>
        <p className="main-desc">You have got much more than just a website.<br/>Build and expand your digital business with application</p>

        <div className="flex flex-wrap gap-4 mt-6">
          <AppStoreIcons />
        </div>
      </section> */}

      <section className="px-5 lg:px-0">
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