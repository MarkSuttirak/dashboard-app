import { useParams } from "react-router"
import { recommendedApps } from "./recommendedApps"
import { Button } from "src/components/ui/button"
import { OpenInNewWindowIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { Globe, Key, MessageSquare, Smile } from "lucide-react"
import { Separator } from "src/components/ui/separator"
import connectMarketingBg from "src/img/socialapp-bg.png"
import installAppBg from "src/img/install-app-bg.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { useState } from "react"
import { Icons } from "src/components/ui/icons"

export default function SingleApp(){
  const { id } = useParams()
  const [isInstalled, setIsInstalled] = useState(false)
  const [installHeading, setInstallHeading] = useState('Install addons app to your workspace')

  const CardData = ({data}) => {
    return (
      <>
        {data.filter(item => item.id === id).map((item, index) => (
          <>
            <section className="flex justify-between">
              <div className="flex items-start gap-x-5">
                <div className="w-[72px]">
                  {item.icon}
                </div>
                <div>
                  <h1 className="main-heading">{item.title}</h1>
                  <p className="text-sm font-medium text-[#09090B]">{item.desc}</p>
                  <p className="text-sm mt-1">{item.status}</p>
                </div>
              </div>
              {isInstalled ? (
                <Button className='btn-with-icon'>
                  <OpenInNewWindowIcon />Open
                </Button>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='btn-with-icon'>
                      <PlusCircledIcon />Add to site
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='p-0 max-w-[368px] border-0 gap-0'>
                    <DialogHeader>
                      <div className='rounded-t-lg' style={{background:`url(${installAppBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <DialogTitle className='flex justify-center gap-x-[55px] py-[50px]'>
                          <div className="p-3 rounded-lg bg-white inline-block shadow-lg">
                            <Icons.appStoreApp02 />
                          </div>
                          <div className="p-3 rounded-lg bg-white inline-block shadow-lg">
                            <Icons.posApp width='52' height='52'/>
                          </div>
                        </DialogTitle>
                      </div>
                    </DialogHeader>
                    <DialogDescription className='p-6 mt-[0!important]'>
                      <h1 className="secondary-heading tracking-[-0.4px] mb-3">{installHeading}</h1>
                      <p>The app will be able to read the email address you use to log in with Zaviago.</p>

                      <Button className='btn-with-icon text-[#006AFF] font-normal w-full mt-6 justify-start' variant='secondary'>
                        <Key viewBox="0 0 24 24" width='16' height='16' color='#006AFF'/>
                        Privacy Policy and Terms of Service.
                      </Button>

                      <div className="flex items-center justify-between mt-6">
                        <DialogClose>
                          <Button variant='outline'>Cancel</Button>
                        </DialogClose>
                        <Button onClick={() => {
                          setInstallHeading('Installing app')
                        }}>Install apps</Button>
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              )}
            </section>

            <section className="flex gap-x-6 mt-[55px]">
              <img src={item.images[0]} className="rounded-md h-fit w-full"/>
              <div className="flex flex-col gap-y-6">
                {item.images.map((image, index) => (
                  <img key={index} src={image} className="img-apps" width='330'/>
                )).slice(1, 4)}
              </div>
            </section>

            <section className="flex gap-x-9 mt-20">
              <aside className="border rounded-md p-6 w-1/3">
                <div className="mb-3">
                  <h1 className='font-bold text-[#181818] text-base mb-3'>Highlights</h1>
                  {item.highlights}
                </div>

                <div className="flex flex-col gap-y-3">
                  <h1 className='font-bold text-[#181818] text-base'>Information</h1>
                  <div>
                    <h2 className='subheading font-medium'>Launched</h2>
                    <p className="main-desc mt-1">{item.launched}</p>
                  </div>

                  <div>
                    <h2 className='subheading font-medium'>Categories</h2>
                    <p className="main-desc mt-1">{item.categories}</p>
                  </div>

                  <div>
                    <h2 className='subheading font-medium'>Integrates with</h2>
                    <p className="main-desc mt-1">{item.integrate_with.join(', ')}</p>
                  </div>
                </div>

                <div className="mt-[72px]">
                  <p className="main-desc">App developed by</p>
                  <h2 className='font-bold text-[#09090B]'>Zaviago.com</h2>

                  <div className="mt-3">
                    <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                      <Globe viewBox="0 0 24 24" width='16' height='16'/>
                      Visit our Website
                    </Button>
                    <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                      <Smile viewBox="0 0 24 24" width='16' height='16'/>
                      Check App Demo
                    </Button>
                    <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                      <MessageSquare viewBox="0 0 24 24" width='16' height='16'/>
                      Contact our support
                    </Button>
                    <Button className='btn-with-icon w-full justify-start' variant='ghost'>
                      <Key viewBox="0 0 24 24" width='16' height='16'/>
                      Privacy policy
                    </Button>
                  </div>
                </div>
              </aside>
              <article className="w-2/3">
                {item.long_desc}
              </article>
            </section>
          </>
        ))}
      </>
    )
  }

  return (
    <div className="dashboard-container">
      <CardData data={recommendedApps}/>

      <Separator className='my-10'/>

      <section style={{background:`url(${connectMarketingBg})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className="rounded-xl p-6 flex gap-x-8">
        <div className="flex flex-col justify-between">
          <article className="mt-4">
            <h1 className="secondary-heading mb-4">Connect Marketing place</h1>
            <p className="text-[13px] font-medium text-[#71717A] mt-4 mb-6">Say hello to the world and let readers know what your blog is all about.</p>
          </article>

          <Button className='btn-with-icon w-fit bg-white' variant='outline'>
            <PlusCircledIcon />
            See more Apps
          </Button>
        </div>

        <div className="flex gap-x-6">
          {recommendedApps.map((app, index) => (
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
    </div>
  )
}