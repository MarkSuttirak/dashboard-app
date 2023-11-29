import { ChevronDownIcon, MagicWandIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { useState, useEffect, useContext } from "react";
import { Badge } from "../components/ui/badge";
import { CreditCard, LogIn, Users, Zap } from "lucide-react";
import { Separator } from "../components/ui/separator";
import { ButtonImage01, ButtonImage02, ButtonImage03, ButtonImage04, ButtonImage05, ButtonImage06 } from "../components/buttonImage";
import phoneBanner from '../img/phone-banner.png'
import sellingOnline from '../img/selling-online.png'
import connectMessage from '../img/connect-message.png'
import createYourBlog from 'src/img/create-your-blog.png'
import { useUser } from "../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../client/api";
import { MemberContext } from "src/components/provider/memberProvider";

export default function Dashboard(){
  const location = useLocation()
  const [numOfAdmin, setNumOfAdmin] = useState(3)
  const [numOfCustomers, setNumOfCustomers] = useState(38)
  const [date, setDate] = useState('April 2023')
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)
  const [websiteSid, setwebsiteSid] = useState(false)
  const memberStatus = useContext(MemberContext)

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

  const PostInfo = ({title, desc, buttonText, onClick, image}) => {
    return (
      <div className="bg-zinc-100 rounded-xl h-[423px] flex flex-col justify-between">
        <div className="p-6">
          <h3 className="secondary-heading">{title}</h3>
          <p className="text-[13px] text-zinc-500 font-medium leading-4 mt-4 mb-6">{desc}</p>
          <Button variant="outline" className='rounded-md flex items-center gap-x-2 text-xs font-medium leading-5 bg-white' onClick={onClick}>
            <PlusCircledIcon />
            {buttonText}
          </Button>
        </div>
        <img src={image} className="w-full"/>
      </div>
    )
  }

  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(max-width:767px)").matches) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }, [])

  return (
    <div className="dashboard-container">
      <section className="flex justify-between">
        <div>
          <h1 className="main-heading tracking-[-0.6px]">Welcome to Zaviago</h1>
          <div className="mt-1 flex items-center gap-x-4">
            <div className="flex items-center gap-x-[10px]">
              <Avatar className='w-[35px] h-[35px]'>
                <AvatarImage src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                <AvatarFallback>{user?.first_name[0]}{user?.last_name[0]}</AvatarFallback>
              </Avatar>
              <h2 className="text-sm font-medium text-zinc-950">{user?.first_name}{' '}{user?.last_name}</h2>
            </div>
            {memberStatus.status === 'pro' ? (
              <Badge>Pro plan</Badge>
            ) : (
              <Badge variant="outline">Free trial</Badge>
            )}
          </div>
        </div>
        <Link to='/dashboard/teams/team-members'>
          <Button variant='outline' className='btn-with-icon leading-5'>
            <PlusCircledIcon />
            Invite team
          </Button>
        </Link>
      </section>

      <section className="mt-6">
        <div className="grid grid-cols-1 lg:flex gap-6 md:gap-x-[15px]">
          <Card className='w-full lg:w-[60%] shadow-none'>
            <CardHeader className='pb-2 flex flex-col lg:flex-row lg:items-center justify-between'>
              <div>
                <CardTitle className='subheading font-medium'>Your WorkSpace</CardTitle>
                <CardDescription className="domain-heading">{sites?.site_list[0].name}</CardDescription>
              </div>
              <Button variant='secondary' className='btn-with-icon leading-5 w-fit' onClick={() => loginNow('home')}>
                <LogIn viewBox="0 0 24 24" width='16' height='16'/>
                Login as Admin
              </Button>
            </CardHeader>
            <CardContent>
              <Button variant='link' className="text-desc p-0">Connect Domain</Button>
              <div className="text-desc flex gap-x-4 items-center mt-5 flex-row">
                <p className="flex items-center gap-x-1 text-sm"><Users viewBox='0 0 24 24' width='12' height='12' /> {numOfAdmin} {numOfAdmin == 1 ? 'admin' : 'admins'} in team</p>
                <p className="flex items-center gap-x-1 text-sm"><StarIcon width='12' height='12'/> {numOfCustomers >= 1000000 ? `${(numOfCustomers / 1000000).toFixed(1)}m` : numOfCustomers >= 1000 ? `${(numOfCustomers / 1000).toFixed(1)}k` : numOfCustomers} {numOfCustomers == 1 ? "customer" : "customers"}</p>
                <p className="flex text-sm">Updated {date}</p>
              </div>
            </CardContent>
          </Card>

          <Card className='w-full lg:w-[40%] flex flex-col justify-between shadow-none'>
            <CardHeader className='pb-2 flex flex-col xl:flex-row xl:items-start justify-between'>
              {memberStatus.status === 'pro' ? (
                <>
                  <div>
                    <CardTitle className='domain-heading'>Pro plan</CardTitle>
                    <CardDescription>You are on Pro plan</CardDescription>
                  </div>
                  <Link to='/dashboard/compare-plan'>
                    <Button variant='secondary' className='btn-with-icon leading-5'>
                      <Zap viewBox="0 0 24 24" width='16' height='16'/>
                      View overview
                    </Button>
                  </Link>
                </>
              ) : memberStatus.status === 'pending' ? (
                <>
                  <div>
                    <CardTitle className='domain-heading'>Free</CardTitle>
                    <CardDescription>Waiting for confirmation</CardDescription>
                  </div>
                  <Link to='/dashboard/settings/billing-plans'>
                    <Button variant='secondary' className='btn-with-icon leading-5'>
                      <Zap viewBox="0 0 24 24" width='16' height='16'/>
                      Manage Plan
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <div>
                    <CardTitle className='domain-heading'>Free trial</CardTitle>
                    <CardDescription>You are on free trial plan</CardDescription>
                  </div>
                  <Link to='/dashboard/settings/billing-plans'>
                    <Button variant='secondary' className='btn-with-icon leading-5'>
                      <Zap viewBox="0 0 24 24" width='16' height='16'/>
                      Compare Plan
                    </Button>
                  </Link>
                </>
              )}
            </CardHeader>
            <CardContent className='text-desc flex items-center gap-x-1'>
              <MagicWandIcon />
              <span className="text-sm">{memberStatus.status === 'pro' ? 'Start to select Apps' : 'Starting at 750/m'}</span>
            </CardContent>
          </Card>
        </div>

        {/* <Card className='w-full mt-6'>
          <CardHeader className='pb-2 flex flex-row items-center justify-between'>
            <div>
              <CardTitle className='subheading font-semibold mb-1'>{sites?.site_list[0].name}</CardTitle>
              <CardDescription>Beautifully designed components built with Radix UI and Tailwind CSS.</CardDescription>
            </div>
            <Button variant='secondary' className='btn-with-icon leading-5' onClick={() => loginAsAdmin({ name: sites?.site_list[0].name, reason: "Login as admin" })}>
              <LogIn viewBox="0 0 24 24" width='16' height='16'/>
              Go to Workspace
            </Button>
          </CardHeader>
          <CardContent className='mt-6'>
            <div className="text-desc flex gap-x-4 items-center">
              <p className="flex items-center gap-x-1 text-sm"><Users viewBox='0 0 24 24' width='16' height='16' /> {numOfAdmin} {numOfAdmin == 1 ? 'admin' : 'admins'} in team</p>
              <p className="flex items-center gap-x-1 text-sm"><StarIcon /> {numOfCustomers >= 1000000 ? `${(numOfCustomers / 1000000).toFixed(1)}m` : numOfCustomers >= 1000 ? `${(numOfCustomers / 1000).toFixed(1)}k` : numOfCustomers} {numOfCustomers == 1 ? "customer" : "customers"}</p>
              <p className="flex text-sm">Updated {date}</p>
            </div>
          </CardContent>
        </Card> */}
      </section>

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

      <Separator className="my-10"/>

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