import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button"
import { useState, useEffect, useContext } from "react";
import { Separator } from "../../components/ui/separator";
import { ButtonImage01, ButtonImage02, ButtonImage03, ButtonImage04, ButtonImage05, ButtonImage06 } from "../../components/buttonImage";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar"
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
import { Edit3 } from "lucide-react";
import { useTranslation } from "react-i18next";
import DashboardVideo from "./dashboardVideo";
import { Icons } from "src/components/ui/icons";
import DashboardTeam from "./dashboardTeam";

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
      title: 'จัดการสินค้า',
      image: <ButtonImage01 shadow={false} />,
      background: "#EFE3F6",
      page: "item/new-item-1",
      color: "#EB67FF"
    },
    {
      title: 'แก้ไขค่าจัดส่ง',
      image: <ButtonImage02 shadow={false} />,
      background: "#DDFEF4",
      page: "item/new-item-1",
      color: "#01545E"
    },
    {
      title: 'จัดการลูกค้า',
      image: <ButtonImage03 shadow={false} />,
      background: "#F5F2FE",
      color: "#4C349F"
    },
    {
      title: 'ตั้งค่าการชำระเงิน',
      image: <ButtonImage04 shadow={false} />,
      background: "#E5F5FF",
      color: "#419CFF"
    },
    {
      title: 'ดูคำสั่งซื้อ',
      image: <ButtonImage05 shadow={false} />,
      background: "#FFF9E9",
      color: "#FABF20"
    },
    {
      title: 'สร้างโปรโมชัน',
      image: <ButtonImage06 shadow={false} />,
      background: "#F5FFE5",
      color: "#174F20"
    },
  ]

  const workspaceMenus = [
    { title: 'จัดการธุรกิจ', icon: <Icons.erpApp className='h-4 w-4' />, link: 'https://www.zaviago.com/manage' },
    { title: 'บล็อกและบทความ', icon: <Icons.blogPostApp className='h-4 w-4' />, link: '/coming-soon' },
    { title: 'CRM', icon: <Icons.posApp className='h-4 w-4' />, link: 'https://www.zaviago.com/crm' },
    { title: 'เว็บไซต์', icon: <Icons.websiteApp fill='white' className='h-4 w-4' />, link: '/coming-soon' },
    { title: 'MarketConnect', icon: <Icons.inbioApp className='h-4 w-4' />, link: 'https://www.zaviago.com/marketplace' },
    { title: 'Canvas', icon: <Icons.blogAndPagesApp className='h-4 w-4' />, link: '/coming-soon' }
  ]

  return (
    <div className="dashboard-container">
      <div className="flex items-center justify-between gap-y-4 px-5 lg:px-0">
        <div className="flex gap-x-[10px] items-center mb-6 md:mb-0">
          <Avatar className='w-[49px] h-[49px] text-sm'>
            <AvatarImage src="" />
            <AvatarFallback>{user?.first_name[0]}</AvatarFallback>
          </Avatar>
          <div>
            {user ? <h1 className="text-xl md:text-3xl text-primary font-bold tracking-[-0.75px] font-eventpop leading-8">สวัสดีคุณ <span style={textGradient("linear-gradient(92.12deg, #7900FF -2.04%, #006AFF 89.63%)")} className="text-xl md:text-3xl">{user?.first_name}</span>🙏</h1> : <Skeleton className='h-8 w-[300px]' />}
            <p className="text-sm text-secondary">จัดการและขยายธุรกิจด้วย Zaviago WorkSpace</p>
          </div>
        </div>
        <Link to='/coming-soon' target='_blank' className="hidden lg:block">
          <Button className='btn-with-icon'>
            <Edit3 className="w-4 h-4" />
            ออกแบบเว็บไซต์
          </Button>
        </Link>
      </div>

      <DashboardBanner sitename={sites?.site_list[0].name} />
      {/* <DashboardVideo /> */}
      {/* <SetupBusiness sitename={(slug) => slug !== undefined && loginNow(slug)}/> */}

      <section className="pt-6 pb-4 lg:py-[72px]">
        <h2 className="secondary-heading px-5 lg:px-0">{t('what_you_want_to_do')}</h2>

        <div className="flex lg:flex-wrap gap-[15px] pt-6 pb-3 overflow-scroll lg:overflow-visible px-5 lg:px-0">
          {workspaceMenus.map(menu => (
            <a className="workspace-btn" href={menu.link} target={menu.link === '/coming_soon' ? "_blank" : null}>
              {menu.icon}
              {menu.title}
            </a>
          ))}
        </div>

        <div className="flex lg:flex-wrap gap-[15px] pt-3 pb-6 overflow-scroll lg:overflow-visible px-5 lg:px-0">
          {newOrManageMenus.map((n, index) => (
            <div onClick={() => n.page !== undefined && loginNow(n.page)} className="menu-card" key={index} style={{ backgroundColor: n.background, color: n.color, boxShadow: isMenuCardHover && menuCardIndex === index ? `0 0 3px ${n.color}` : null }} onMouseEnter={() => handleCardHover(index)} onMouseLeave={handleCardHoverLeave}>
              {n.image}
              <span className="absolute bottom-4">{n.title}</span>
            </div>
          ))}
        </div>
      </section>

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