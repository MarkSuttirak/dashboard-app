import { ArrowDown } from "lucide-react";
import FreePricing from "src/components/pricing/freePricing";
import LineCRMPricing from "src/components/pricing/lineCRMPricing";
import PricingTable from "src/components/pricing/pricingTable";
import StarterPricing from "src/components/pricing/starterPricing";
import QuestionsAnswers from "./compare-plan/questions-answers";
import CustomPricing from "src/components/pricing/customPricing";

export default function Pricing(){
  const pricingList = [
    {
      title:'Users',
      free:'1 user',
      starter:'2 users',
      lineoa:'2 users'
    },
    {
      title:'Marketing starter',
      free:'Free tools',
      starter:'Includes 1,000 marketing contacts',
      lineoa:'Includes 1,000 marketing contacts'
    },
    {
      title:'Dashboards',
      free:'Up to 1 dashboard, each with 1 report per dashboard',
      starter:'Up to 3 dashboards, each with 10 reports per dashboard',
      lineoa:'Up to 3 dashboards, each with 10 reports per dashboard'
    },
    {
      title:'Loyalty program',
      free:'-',
      starter:'-',
      lineoa:'1 standard condition'
    },
    {
      title:'Tier level',
      free:'-',
      starter:'-',
      lineoa:'5 levels'
    },
    {
      title:'Sales starter',
      free:'Free tools',
      starter:'Includes 2 paid users',
      lineoa:'Includes 2 paid users'
    },
    {
      title:'Service starter',
      free:'Free tools',
      starter:'Includes 2 paid users',
      lineoa:'Includes 2 paid users'
    },
    {
      title:'CMS starter',
      free:'100 products',
      starter:'100 products',
      lineoa:'100 products'
    },
    {
      title:'Blogs',
      free:'1 blog, including Zaviago branding',
      starter:'1 blog, excluding Zaviago branding',
      lineoa:'1 blog, excluding Zaviago branding'
    },
    {
      title:'Operations starter',
      free:'Free tools',
      starter:'-',
      lineoa:'-'
    },
    {
      title:'Commerce hub',
      free:'Available to customers with an integrated UOB/GB Prime Pay account',
      starter:'Available to customers with an integrated UOB/GB Prime Pay account',
      lineoa:'Available to customers with an integrated UOB/GB Prime Pay account'
    },
    {
      title:'Setting-up service (One-time cost)',
      free:'-',
      starter:'฿20,000',
      lineoa:'-'
    }
  ]
  return (
    <div className="max-w-[1200px] px-6 py-[60px] mx-auto">
      <h1 className="text-center text-4xl font-extrabold tracking-[-0.9px]">Compare Plans & Features</h1>
      <div className="flex gap-x-8 justify-center h-auto mt-12">
        <FreePricing />
        <StarterPricing />
        <LineCRMPricing />
      </div>

      <div className="py-20 flex justify-center">
        <a href="#all-features" className="flex flex-col items-center transition-all duration-300 text-sm gap-y-4">
          See all features and compare plans
          <ArrowDown className='animate-bounce'/>
        </a>
      </div>

      <div id='all-features'>
        <PricingTable data={pricingList}/>
      </div>

      <CustomPricing />

      <section className="mt-[120px] px-[60px] py-[34px] bg-[#F2F5FF] rounded-lg">
        <h1 className="text-3xl tracking-[-0.75px] text-[#18181B] font-semibold mt-[6px] mb-3 text-center">Questions & Answers</h1>
        <QuestionsAnswers />
      </section>
    </div>
  )
}