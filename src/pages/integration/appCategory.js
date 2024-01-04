import { useParams, Link } from "react-router-dom"
import { site } from "../../client/api";
import { useMutation, useQuery } from "react-query";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";
import { Button } from "src/components/ui/button";
import { appList } from "src/components/apps/appList"
import connectMarketingBg from "src/img/socialapp-bg.png"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import blogCateOne from 'src/img/blog-appcate-1.png'
import blogCateTwo from 'src/img/blog-appcate-2.png'

export default function AppCategory(){
  const { cate } = useParams()

  const { user, auth, logout } = useUser();

  const { data: sites } = useQuery('sites', site.list, {
    enabled: !!user,
  });

  const { data: benchApps, refetch } = useQuery('benchApps', () => site.appslist(sites.site_list[0].name), {
    enabled: false,
    onSuccess: (res) => {
      //console.log(res);
    },
  });
  
  const appslists = benchApps || [];

  useEffect(() => {
    if (user && sites?.site_list[0]?.name && !benchApps) {
      refetch();
    }
  }, [user, sites, refetch]);

  const PostInfo = ({title, desc, buttonText, onClick, image}) => {
    return (
      <div className="p-6 pb-0 bg-zinc-100 rounded-xl h-auto flex flex-col justify-between w-full">
        <div>
          <h3 className="secondary-heading">{title}</h3>
          <p className="text-[13px] text-zinc-500 font-medium leading-4 mt-4 mb-6">{desc}</p>
          <Button variant="outline" className='rounded-md flex items-center gap-x-2 text-xs font-medium leading-5 bg-white' onClick={onClick}>
            <PlusCircledIcon />
            {buttonText}
          </Button>
        </div>
        <img src={image} className="w-fit mx-auto mt-4"/>
      </div>
    )
  }

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">Social Media</h1>
      <p>Choose Professional Solutions to Power Your Website</p>

      <section className="w-full flex gap-6 grid grid-cols-3 mt-6">
        {appslists?.map((app, index) => (
          <Card key={index} className='shadow-none flex flex-col justify-between'>
            
            <CardHeader className='flex flex-row gap-x-6'>
              <div className="w-[90px]">
                {console.log(app)}
              </div>
              <div className="m-[0!important]">
                <CardTitle>{app.app}</CardTitle>
                <CardDescription className='mt-[6px]'>{app.repository_url}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className='flex items-center justify-between'>
              <div className="text-sm">
                Free trial
              </div>
              <Link>
                <Button variant='outline'>See more</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </section>

      <div className="flex justify-between items-center my-6">
        <h2 className="secondary-heading">Recommended for You</h2>
        {/* <Link className="text-[#006AFF] text-sm font-medium">See more apps</Link> */}
      </div>

      <section style={{background:`url(${connectMarketingBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="rounded-xl p-6 flex gap-x-8">
        <div className="flex flex-col justify-between">
          <article className="mt-4">
            <h1 className="secondary-heading mb-4">Connect Marketing place</h1>
            <p className="text-[13px] font-medium text-secondary mt-4 mb-6">Say hello to the world and let readers know what your blog is all about.</p>
          </article>

          <Button className='btn-with-icon w-fit bg-white' variant='outline'>
            <PlusCircledIcon />
            See more Apps
          </Button>
        </div>

        <div className="flex gap-x-6">
          {appList.map((app, index) => (
            <Card key={index} className='shadow-none flex flex-col justify-between'>
              <CardHeader className='flex flex-col gap-x-6'>
                <div className="w-[52px]">
                  {app.icon}
                </div>
                <div className="mt-[12px!important]">
                  <CardTitle>{app.title}</CardTitle>
                  <CardDescription className='mt-[6px]'>{app.desc}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          )).slice(0, 3)}
        </div>
      </section>

      <div className="flex justify-between items-center my-6">
        <h2 className="secondary-heading">Blog & News</h2>
        {/* <Link className="text-[#006AFF] text-sm font-medium">See more apps</Link> */}
      </div>

      <div className="flex gap-[15px] w-full">
        <PostInfo title="Create your Check out the App store Guideblog" desc="Say hello to the world and let readers know what your blog is all about." buttonText="Read the guide" image={blogCateOne}/>
        <PostInfo title="We’re here for you" desc="Get help with the ins and outs of your blog, or ask our experts in the community forum." buttonText="Read the guide" image={blogCateTwo}/>
      </div>
    </div>
  )
}