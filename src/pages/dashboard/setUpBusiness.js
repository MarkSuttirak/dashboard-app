import { Progress } from "src/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "src/components/ui/card"
import unlockMultiplayer from 'src/img/unlock-multiplayer.png'
import { Button } from "src/components/ui/button";
import { BadgeCheck, ClipboardCheck, ImagePlus, PenSquare, ShoppingBag, UserPlus, VoteIcon, Zap } from "lucide-react";
import { ChatBubbleIcon, CheckboxIcon, LightningBoltIcon, Pencil2Icon } from "@radix-ui/react-icons";

export default function SetupBusiness(){
  const textGradient = (gradient, fontSize) => {
    const style = {
      background:gradient,
      fontSize:fontSize,
      webkitBackgroundClip:"text",
      webkitTextFillColor:"transparent"
    }
    return style
  }

  const GuideButton = ({icon, title, buttonText, buttonIcon, link}) => {
    return (
      <button className="guide-btn">
        <div className="flex items-center gap-4">
          {icon}
          <h2 className="subheading font-medium">{title}</h2>
        </div>
        <button className='inner-guide-btn subheading font-medium'>
          {buttonIcon}
          {buttonText}
        </button>
      </button>
    )
  }
  return (
    <section className="my-[72px]">
      <div className="flex justify-between items-center">
        <h2 className="secondary-heading">Let's set up your business</h2>
        <div className="flex items-center gap-x-[18px]">
          <p className="main-desc">0/5 completed</p>
          <Progress value={50} className='w-[200px]'/>
        </div>
      </div>

      <div className="flex gap-[15px] mt-6">
        <Card className='p-0 shadow-none overflow-hidden w-[40%]'>
          <img src={unlockMultiplayer} className="w-full"/>
          <div className="p-6">
            <h3 style={textGradient("linear-gradient(92deg, #5200FF 14.1%, #FF6DDD 60.81%, #FF5D1D 107.53%)", "13px")}>New premium feature (coming soon).</h3>
            <h1 className="text-[48px] tracking-[-3px] text-[#000000D9] leading-[44.5px] font-semibold mt-4">Unlock multiplayer work together</h1>

            <Button variant='outline' className='btn-with-icon mt-[60px]'>
              <BadgeCheck className="h-4 w-4"/>
              Start invite team
            </Button>
          </div>
        </Card>
        <Card className='shadow-none w-[60%]'>
          <section>
            <div className="p-6">
              <h2 className="secondary-heading">eCommerce guides</h2>
              <p className="main-desc">Choose what you want to be notified about.</p>
            </div>
            
            <div className="flex flex-col gap-y-3 px-8 pb-6">
              <GuideButton icon={<UserPlus className="w-4 h-4"/>} title='Create new customer' buttonIcon={<LightningBoltIcon />} buttonText='Add Customer'/>
              <GuideButton icon={<ShoppingBag className="w-4 h-4"/>} title='Add your first product' buttonIcon={<CheckboxIcon />} buttonText='Add Product'/>
              <GuideButton icon={<ClipboardCheck className="w-4 h-4"/>} title='Create your first draft order' buttonIcon={<VoteIcon className="w-4 h-4" />} buttonText='Add Draft Order'/>
            </div>
          </section>

          <section>
            <div className="p-6">
              <h2 className="secondary-heading">Web Store and Sites</h2>
              <p className="main-desc">Choose what you want to be notified about.</p>
            </div>
            
            <div className="flex flex-col gap-y-3 px-8 pb-6">
              <GuideButton icon={<ImagePlus className="w-4 h-4"/>} title='Add first page' buttonIcon={<LightningBoltIcon />} buttonText='Add New Page'/>
              <GuideButton icon={<Pencil2Icon />} title='Write your first blog' buttonIcon={<CheckboxIcon />} buttonText='Add Blog'/>
              <GuideButton icon={<ChatBubbleIcon />} title='Connect LineOA' buttonIcon={<VoteIcon className="w-4 h-4" />} buttonText='Connect LineOA'/>
            </div>
          </section>
        </Card>
      </div>
    </section>
  )
}