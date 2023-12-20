import { Badge } from "src/components/ui/badge";
import CompareCards from "./compareCards";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import pickThePlanBanner from 'src/img/pick-the-plan-banner.png'
import { Button } from "src/components/ui/button";
import { MessageSquare, Rocket } from "lucide-react";
import Features from "./features";
import { blogFeatures, featureLists, lineCRMFeatures, supportFeatures } from "./featureLists";
import { Separator } from "src/components/ui/separator";
import { Link } from "react-router-dom";
import QuestionsAnswers from "./questions-answers";
import ZaviagoIcon from "src/components/icon-menus/ZaviagoIcon";

export default function ComparePlan(){
  return (
    <div className="dashboard-container">
      <div className="text-center">
        <h1 className="text-4xl text-[#09090B] font-extrabold tracking-[-0.9px] mb-3">Pricing built for businesses of all sizes</h1>
        <p className="secondary-desc">Zaviago offers more than 10 functions and management applications so that you can</p>
      </div>

      <CompareCards />

      <section className="bg-[#FFF4F2] rounded-xl border-2 border-[#ECECEC] my-[120px] flex justify-between gap-x-6">
        <div className="px-[60px] py-[34px] w-1/2">
          <Badge className="bg-[#FF6D53] hover:bg-[#FF6D53] rounded-full shadow-none gap-x-2">
            <LightningBoltIcon />
            Recommended
          </Badge>

          <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px] mb-3">Pick the plan that works best for you</h1>
          <p className="secondary-desc">You can compare between a 'Professional' and 'General (Free)' plan in the table below to find the best package that suits you. But if you are still unsure, feel free to contact us!</p>

          <Button className='btn-with-icon mt-[60px]' onClick={() => window.location.href = 'https://page.line.me/zaviago'}>
            <MessageSquare viewBox="0 0 24 24" width='16' height='16'/>
            Contact Us
          </Button>
        </div>
        <div className="flex w-1/2 items-end">
          <img src={pickThePlanBanner} width='100%'/>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-y-20">
        <div>
          <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px] mb-3">Compare plans & features</h1>
          <p className="secondary-desc">Our Zaviago offers more than 10 functions and management applications so that you can<br/> manage and develop businesses along with your own domain as well as many other systems</p>
        </div>

        <Features data={featureLists} type='Feature'/>
        <Features data={blogFeatures} type='Blog : Feature' color='#7000FF'/>
        <Features data={lineCRMFeatures} type='Line CRM : Feature' color='#3BCD76'/>
        <Features data={supportFeatures} type='Support'/>
      </section>

      <Separator className='my-[11px]'/>

      <section className="flex py-6 items-center">
        <div className="w-1/3">
          <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px] mb-3">Custom</h1>
          <p className="main-desc">Design a custom package <br/>available for businesses or</p>
          <a href='https://page.line.me/zaviago' className="text-sm text-[#006AFF]">Contact Sales</a>
        </div>
        <div className="w-1/3">
          <div className='flex gap-x-2 items-center'>
            <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px]">Free</h1>
            <div>
              <p className="main-desc">per</p>
              <p className="main-desc">month</p>
            </div>
          </div>
          <p className="main-desc w-3/4">Package for small businesses or personal use.</p>
          <Link to='/'>
            <Button className='btn-with-icon w-3/4 mt-6' variant='secondary'>
              <Rocket viewBox="0 0 24 24" width='16' height='16'/>
              Get started
            </Button>
          </Link>
        </div>
        <div className="w-1/3">
          <div className='flex gap-x-2 items-center'>
            <h1 className="text-[40px] text-[#09090B] font-bold tracking-[-1px] inter">฿ 750</h1>
            <div>
              <p className="main-desc">per</p>
              <p className="main-desc">month</p>
            </div>
          </div>
          <p className="main-desc w-3/4">Upgrade package to Pro to enjoy unrestricted access to everything </p>
          <Link to='/payment'>
            <Button className='btn-with-icon w-3/4 mt-6'>
              <LightningBoltIcon />
              Upgrade to Pro
            </Button>
          </Link>
        </div>
      </section>

      <section className="mt-[120px] px-[60px] py-[34px] bg-[#F2F5FF] rounded-lg">
        <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px] mb-3 text-center">Questions & Answers</h1>
        <QuestionsAnswers />
      </section>

      <section className="mt-[120px] flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-[18px] items-center">
          <ZaviagoIcon width='72' height='72'/>
          <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold">Start your journey today</h1>
          <p className="main-desc">Our Zaviago offers more than 10 functions and management applications so that you can</p>
        </div>
        <div className="flex flex-col items-center gap-y-3">
          <Link to='/payment'>
            <Button className='btn-with-icon'>
              <LightningBoltIcon />
              Upgrade to Pro
            </Button>
          </Link>
          <p className="main-desc">Try demo ? or <a href='https://page.line.me/zaviago' className="text-[#006AFF]">Contact sales</a></p>
        </div>
      </section>
    </div>
  )
}