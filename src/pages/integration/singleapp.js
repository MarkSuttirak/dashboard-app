import { useParams } from "react-router"
import { recommendedApps } from "./recommendedApps"
import { Button } from "src/components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Globe, Key, MessageSquare, Smile } from "lucide-react"
import { Separator } from "src/components/ui/separator"

export default function SingleApp(){
  const { id } = useParams()

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
              <Button className='btn-with-icon'>
                <PlusCircledIcon />
                Add to site
              </Button>
            </section>

            <section className="flex gap-x-6 mt-[55px]">
              <img src={item.images[0]} className="rounded-md h-fit"/>
              <div>
                {item.images.map(image => (
                  <img src={image} className="img-apps"/>
                ), {start: 1})}
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
    </div>
  )
}