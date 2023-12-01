import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button"
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
import { Icons } from "src/components/ui/icons";

export default function Dashboard(){
  const location = useLocation()
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)
  const [websiteSid, setwebsiteSid] = useState(false)

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

  const { data: loadAdmin, refetch } = useQuery('loadAdmin', () => site.loginAsAdmin(sites?.site_list[0].name, 'Admin'), {
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
  
  // const { mutate: loginAsAdmin } = useMutation('loginAsAdmin', ({ name, reason }) => site.loginAsAdmin(name, reason), {
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
    if(sid){
      window.open(`https://${sitetoview}/app/${page}?sid=${sid}`, '_blank');
    }
  }

  const AppIcon = ({icon, title, desc}) => {
    return (
      <div className="w-[141px]">
        <div className="border rounded-xl w-[141px] h-[141px] flex items-center justify-center mb-3">
          {icon}
        </div>

        <h2 className="subheading font-medium mb-[7px]">{title}</h2>
        <p className="main-desc">{desc}</p>
      </div>
    )
  }

  const newOrManageMenus = [
    {
      title:'Add Product',
      image:<ButtonImage01 shadow={false}/>,
      background:"#EFE3F6",
      page:"item/new-item-1",
      color:"#EB67FF"
    },
    {
      title:'Shipping',
      image:<ButtonImage02 shadow={false}/>,
      background:"#DDFEF4",
      page:"item/new-item-1",
      color:"#01545E"
    },
    {
      title:'CRM',
      image:<ButtonImage03 shadow={false}/>,
      background:"#F5F2FE",
      color:"#4C349F"
    },
    {
      title:'Payment',
      image:<ButtonImage04 shadow={false}/>,
      background:"#E5F5FF",
      color:"#419CFF"
    },
    {
      title:'Manage Order',
      image:<ButtonImage05 shadow={false}/>,
      background:"#FFF9E9",
      color:"#FABF20"
    },
    {
      title:'Sales Promotion',
      image:<ButtonImage06 shadow={false}/>,
      background:"#F5FFE5",
      color:"#174F20"
    },
  ]

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px] eventpop">สวัสดีคุณ {user?.first_name}{' '}{user?.last_name}🙏</h1>
      <p className="main-desc">Access exclusive tools to help you build <br/>client sites and scale your business</p>

      <DashboardBanner sitename={sites?.site_list[0].name}/>
      <SetupBusiness />

      <section className="mt-6">
        <h2 className="secondary-heading">Create New or Manage</h2>
        <p className="secondary-desc">What do you want to do today?</p>

        <div className="flex flex-wrap gap-[15px] mt-6">
          {newOrManageMenus.map((n, index) => (
            <div onClick={() => n.page !== undefined && loginNow(n.page)} className="menu-card" key={index} style={{backgroundColor:n.background,color:n.color,boxShadow:isMenuCardHover && menuCardIndex === index ? `0 0 3px ${n.color}` : null}} onMouseEnter={() => handleCardHover(index)} onMouseLeave={handleCardHoverLeave}>
              {n.image}
              <span className="absolute bottom-4">{n.title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="my-[52px]">
        <h2 className="secondary-heading">App Store</h2>
        <p className="secondary-desc">You have got much more than just a website.<br/>Build and expand your digital business with application</p>

        <div className="flex flex-wrap gap-4 mt-6">
          <AppIcon icon={<Icons.reducoedApp width='72px' height='72px'/>} title='Reducoed' desc='Connect your website with Reducoed'/>
          <AppIcon icon={<Icons.rewardfulApp width='72px' height='72px'/>} title='Rewardful' desc='Test app of rewardful'/>
        </div>
      </section>

      <section>
        <h2 className="secondary-heading">Discover what you can do</h2>
        <p className="secondary-desc">Manage posts, track post performance and learn about new ways to improve your blog.</p>

        <div className="mt-6 grid lg:grid-cols-3 gap-[15px]">
          <PostInfo title="Create your blog" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={createYourBlog} />
          <PostInfo title="Selling Online" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={sellingOnline} />
          <PostInfo title="Connect Shopee" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={connectMessage} />
        </div>
      </section>
    </div>
  )
}