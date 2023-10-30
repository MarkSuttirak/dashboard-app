import { ChevronDownIcon, PlusCircledIcon, StarIcon, ValueIcon } from "@radix-ui/react-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card"
import { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { CreditCard01 } from "@untitled-ui/icons-react/build/cjs";
import VerticalLine from "../components/verticalLine";
import { Separator } from "../components/ui/separator";
import { ButtonImage01, ButtonImage02, ButtonImage03, ButtonImage04, ButtonImage05 } from "../components/buttonImage";
import phoneBanner from '../img/phone-banner.png'
import sellingOnline from '../img/selling-online.png'
import connectMessage from '../img/connect-message.png'
import { useUser } from "../hooks/useUser";
import { useMutation, useQuery } from "react-query";
import { site } from "../client/api";

export default function DashboardNewVer(){
  const location = useLocation()
  const [firstname, setFirstname] = useState('Olivia')
  const [lastname, setLastname] = useState('Martin')
  const [date, setDate] = useState('April 2023')

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

  const newOrManageMenus = [
    {
      title:'New Products',
      image:<ButtonImage01 shadow={false}/>,
      background:"#E5F5FF",
      color:"#00B2FF"
    },
    {
      title:'Manage Order',
      image:<ButtonImage02 shadow={false}/>,
      background:"#F6F3FF",
      color:"#8866FF"
    },
    {
      title:'CRM',
      image:<ButtonImage03 shadow={false}/>,
      background:"#E5F5FF",
      color:"#00B2FF"
    },
    {
      title:'Form',
      image:<ButtonImage04 shadow={false}/>,
      background:"#F7EBFF",
      color:"#AD00C9"
    },
    {
      title:'Input',
      image:<ButtonImage05 shadow={false}/>,
      background:"#F7E3F1",
      color:"#B90C21"
    },
  ]

  const CardInfo = ({title, value, desc}) => {
    return (
      <Card className='w-full'>
        <CardHeader className='pb-2 flex flex-row items-center justify-between'>
          <CardTitle className='subheading font-medium'>{title}</CardTitle>
          <CreditCard01 viewBox="0 0 24 24" width='16' height='16' color='#71717A'/>
        </CardHeader>
        <CardContent>
          <h1 className="main-heading">{value}</h1> {/* Will use this code soon: sites?.site_list[0].name */}
          <p className="text-desc">{desc}</p>
        </CardContent>
      </Card>
    )
  }

  const PostInfo = ({title, desc, buttonText, onClick, image}) => {
    return (
      <div className="p-6 bg-zinc-100 rounded-xl h-[423px] flex flex-col justify-between">
        <div>
          <h3 className="secondary-heading">{title}</h3>
          <p className="text-[13px] text-zinc-500 font-medium leading-4 mt-4 mb-6">{desc}</p>

          <Button variant="blue" className='rounded-xl flex items-center gap-x-2 text-xs font-medium leading-5' onClick={onClick}>
            <PlusCircledIcon />
            {buttonText}
          </Button>
        </div>
        <img src={image} className="w-fit mx-auto"/>
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
    <div className="page-section">
      <div className="dashboard-container">
        <section className="flex justify-between">
          <div>
            <h1 className="main-heading">Welcome to Zaviago</h1>
            <div className="mt-1 flex items-center gap-x-4">
              <div className="flex items-center gap-x-[10px]">
                <Avatar className='w-[35px] h-[35px]'>
                  <AvatarImage src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                  <AvatarFallback>{firstname[0]}{lastname[0]}</AvatarFallback>
                </Avatar>
                <h2 className="text-sm font-medium text-zinc-950">{firstname}{' '}{lastname}</h2>
              </div>
              <Badge variant="outline">Free trial</Badge>
            </div>
          </div>
          <Button variant='default' className='btn-with-icon leading-5' onClick={() => loginAsAdmin({ name: sites?.site_list[0].name, reason: "Login as admin" })}>
            <PlusCircledIcon />
            Go to WorkSpace
          </Button>
        </section>

        <section className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[15px]">
            <CardInfo title="Your WorkSpace" value={sites?.site_list[0].name} desc="+19% from last month" /> {/* Will use this value soon: sites?.site_list[0].name */}
            <CardInfo title="Your Plan" value="Free trial" desc="+19% from last month" />
          </div>

          <Card className='w-full mt-6'>
            <CardHeader className='pb-2 flex flex-row items-center justify-between'>
              <div>
                <CardTitle className='subheading font-semibold mb-1'>{sites?.site_list[0].name}</CardTitle> {/* sites?.site_list[0].name will be replaced with intergoods.zaviago.com */}
                <CardDescription>Beautifully designed components built with Radix UI and Tailwind CSS.</CardDescription>
              </div>
              <Button variant='secondary' className='btn-with-icon leading-5' onClick={() => window.location.href = `http://${sites?.site_list[0].name}`}>
                <StarIcon />
                Go to App
                <VerticalLine color='#E4E4E7' height="80%" size={1}/>
                <ChevronDownIcon />
              </Button>
            </CardHeader>
            <CardContent className='mt-6'>
              <div className="text-desc flex gap-x-4 items-center">
                <p className="flex items-center gap-x-1 text-sm"><ValueIcon /> TypeScript</p>
                <p className="flex items-center gap-x-1 text-sm"><StarIcon /> 20k</p>
                <p className="flex text-sm">Updated {date}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-10"/>

        <section>
          <h2 className="secondary-heading">Create New or Manage</h2>
          <p className="secondary-desc">What do you want to do today?</p>

          <div className="flex gap-x-[15px] mt-6">
            {newOrManageMenus.map((n) => (
              <div className="py-6 w-[142px] rounded-xl flex flex-col justify-between items-center w-[142px] h-[150px] text-sm font-medium" style={{backgroundColor:n.background,color:n.color}}>
                {n.image}
                {n.title}
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-10"/>

        <section>
          <h2 className="secondary-heading">Discover what you can do</h2>
          <p className="secondary-desc">Manage posts, track post performance and learn about new ways to improve your blog.</p>

          <div className="mt-6 grid grid-cols-3 gap-x-[15px]">
            <PostInfo title="Create your blog" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={phoneBanner} />
            <PostInfo title="Selling Online" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={sellingOnline} />
            <PostInfo title="Connect Shopee" desc="Say hello to the world and let readers know what your blog is all about." buttonText="New post" image={connectMessage} />
          </div>
        </section>
      </div>
    </div>
  )
}