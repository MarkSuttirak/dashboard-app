import PricingTable from "src/components/pricing/pricingTable"

export default function PricingTablePage(){
    const pricingList = [
        {
          title:'Users',
          free:'1 user',
          starter:'2 users',
          lineoa:'2 users',
          enterprise:'10 users'
        },
        {
          title:'Marketing starter',
          free:'Free tools',
          starter:'Includes 1,000 marketing contacts',
          lineoa:'Includes 1,000 marketing contacts',
          enterprise:'Includes 5,000 marketing contacts'
        },
        {
          title:'Dashboards',
          free:'Up to 1 dashboard, each with 1 report per dashboard',
          starter:'Up to 3 dashboards, each with 10 reports per dashboard',
          lineoa:'Up to 3 dashboards, each with 10 reports per dashboard',
          enterprise:'Up to 3 dashboards, each with 10 reports per dashboard',
        },
        {
          title:'Loyalty program',
          free:'-',
          starter:'-',
          lineoa:'1 standard condition',
          enterprise:'1 standard condition'
        },
        {
          title:'Tier level',
          free:'-',
          starter:'-',
          lineoa:'5 levels',
          enterprise:'5 levels'
        },
        {
          title:'Sales starter',
          free:'Free tools',
          starter:'Includes 2 paid users',
          lineoa:'Includes 2 paid users',
          enterprise:'Includes 10 paid users'
        },
        {
          title:'Service starter',
          free:'Free tools',
          starter:'Includes 2 paid users',
          lineoa:'Includes 2 paid users',
          enterprise:'Includes 10 paid users'
        },
        {
          title:'CMS starter',
          free:'100 products',
          starter:'100 products',
          lineoa:'100 products',
          enterprise:'1,000 products'
        },
        {
          title:'Blogs',
          free:'1 blog, including Zaviago branding',
          starter:'1 blog, excluding Zaviago branding',
          lineoa:'1 blog, excluding Zaviago branding',
          enterprise:'100 blogs'
        },
        {
          title:'Operations starter',
          free:'Free tools',
          starter:'-',
          lineoa:'-',
          enterprise:'-'
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
    <div className="max-w-[1280px] px-6 py-[60px] mx-auto">
        <h1 className="text-center text-4xl font-extrabold tracking-[-0.9px] mb-6">Pricing Table</h1>
        <PricingTable data={pricingList}/>
  </div>
  )
}