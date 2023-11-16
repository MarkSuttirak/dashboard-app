import { ButtonAppStoreImage01, ButtonAppStoreImage02, ButtonAppStoreImage03, ButtonAppStoreImage04, ButtonAppStoreImage05, ButtonAppStoreImage06 } from "src/components/buttonImage"
import { useState } from 'react'
import appstoreBg from 'src/img/appstore-detail-bg.png'
import frappePreview from 'src/img/frappe-preview.png'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Separator } from "src/components/ui/separator"
import { Button } from "src/components/ui/button"
import { Link } from "react-router-dom"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import startSellingOnline from 'src/img/how-to-start-selling-online.png'
import { recommendedApps } from "./recommendedApps"
import { Icons } from "src/components/ui/icons"

export default function AppStore(){
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)

  const handleCardHover = (index) => {
    setIsMenuCardHover(true)
    setMenuCardIndex(index)
  }

  const handleCardHoverLeave = () => {
    setIsMenuCardHover(false)
  }

  const appstoreMenus = [
    {
      title:'Social Media',
      image:<ButtonAppStoreImage01 shadow={false}/>,
      background:"#E4F4FE",
      color:"#5099FF"
    },
    {
      title:'Manage',
      image:<ButtonAppStoreImage02 shadow={false}/>,
      background:"#DDFDF3",
      color:"#0DA7BA"
    },
    {
      title:'Marketing',
      image:<ButtonAppStoreImage03 shadow={false}/>,
      background:"#F6F3FF",
      color:"#EB67FF"
    },
    {
      title:'Sell Online',
      image:<ButtonAppStoreImage04 shadow={false}/>,
      background:"#E5F5FF",
      color:"#419CFF"
    },
    {
      title:'Media & Content',
      image:<ButtonAppStoreImage05 shadow={false}/>,
      background:"#FFF9E9",
      color:"#FABF20"
    },
    {
      title:'Communication',
      image:<ButtonAppStoreImage06 shadow={false}/>,
      background:"#DEFFEA",
      color:"#19D85C"
    },
  ]

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">App Store</h1>

      <div className="flex justify-between mt-6">
        {appstoreMenus.map((n, index) => (
          <div className="menu-card-app-store" key={index} style={{backgroundColor:n.background,color:n.color,boxShadow:isMenuCardHover && menuCardIndex === index ? `0 0 3px ${n.color}` : null}} onMouseEnter={() => handleCardHover(index)} onMouseLeave={handleCardHoverLeave}>
            {n.image}
            <span className="absolute bottom-4">{n.title}</span>
          </div>
        ))}
      </div>

      <section style={{background:`url(${appstoreBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="mt-6 p-6 rounded-xl flex justify-between">
        <section className="flex flex-col justify-between">
          <div className='mt-4'>
            <h1 className="main-heading">Create project deploy your <br/>new project in one-click</h1>
            <p className="main-desc font-medium mt-4">Say hello to the world and let readers know <br/>what your blog is all about</p>
          </div>
          <Button variant='outline' className='btn-with-icon bg-white w-fit'>
            <PlusCircledIcon />
            See more
          </Button>
        </section>
        <aside className="flex gap-x-6">
          <div className="bg-white rounded-lg">
            <img src={frappePreview} className="inline-block pt-[34px] pl-[34px]"/>

            <article className="p-6">
              <Icons.erpApp />
              <h2 className="text-sm font-semibold tracking-[-0.35px] my-[11px]">Create project</h2>
              <p className="text-[#71717A] text-sm">Deploy your new project in one-click.</p>
            </article>
          </div>
          <div className="bg-white rounded-lg">
            <img src={frappePreview} className="inline-block pt-[34px] pl-[34px]"/>

            <article className="p-6">
              <Icons.erpApp />
              <h2 className="text-sm font-semibold tracking-[-0.35px] my-[11px]">Create project</h2>
              <p className="text-[#71717A] text-sm">Deploy your new project in one-click.</p>
            </article>
          </div>
        </aside>
      </section>

      <Separator className="my-10"/>

      <div className="flex justify-between items-center">
        <h2 className="secondary-heading">Recommended for You</h2>
        <Link className="text-[#006AFF] text-sm font-medium">See more apps</Link>
      </div>

      <div className="flex gap-x-6 mt-6">
        <section className="grid grid-cols-2 gap-6 w-[70%]">
          {recommendedApps.map((app, index) => (
            <Card key={index} className='shadow-none flex flex-col justify-between'>
              <CardHeader className='flex flex-row gap-x-6'>
                <div className="w-[90px]">
                  {app.icon}
                </div>
                <div className="m-[0!important]">
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription className='mt-[6px]'>{app.desc}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className='flex items-center justify-between'>
                <div className="text-sm">
                  {app.status}
                </div>
                <Link to={`/integration/appstore/${app.id}`}>
                  <Button variant='outline'>See more</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </section>
        <section className="border rounded-xl bg-[#F7F7F8] w-[30%]">
          <div className="p-6">
            <h1 className="secondary-heading">How to Start Selling Online</h1>
            <p className="text-[13px] font-medium text-[#71717A] mt-4 mb-6">Say hello to the world and let readers know what your blog is all about.</p>
            <Button variant='outline' className='btn-with-icon bg-white'>
              <PlusCircledIcon />
              View Blog
            </Button>
          </div>
          <img src={startSellingOnline} width='100%' className="rounded-b-xl"/>
        </section>
      </div>
    </div>
  )
}