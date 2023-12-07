import { Checkbox } from "src/components/ui/checkbox";

export const bundleSelectList = {
  crm: [
    {title:'Starter',price:750},
    {title:'Professional',price:28000},
    {title:'Enterprise',price:89000}
  ],
  marketConnect: [
    {title:'Starter',price:750},
    {title:'Professional',price:15900},
    {title:'Enterprise',price:39000}
  ],
  lineCRM: [
    {title:'Starter',price:2850},
    {title:'Professional',price:3100},
    {title:'Enterprise',price:3500}
  ],
  rewardful: [
    {title:'Starter',price:1500},
    {title:'Professional',price:3500},
    {title:'Enterprise',price:6500}
  ],
  onlineStore: [
    {title:'Starter',price:750},
    {title:'Professional',price:14400},
    {title:'Enterprise',price:42000}
  ],
}

export const marketLists = {
  marketplaces: [
    {
      value:'shopee',
      label:'Shopee'
    },
    {
      value:'lazada',
      label:'Lazada'
    }
  ],
  socialMedia: [
    {
      value:'facebook',
      label:'Facebook'
    },
    {
      value:'instagram',
      label:'Instagram'
    },
    {
      value:'tiktok',
      label:'TikTok'
    }
  ]
}

export function MarketCheckbox({title, list}){
  return (
    <>
      <h3 className="main-desc mt-4 mb-[6px]">{title}</h3>
      <div className="flex flex-col gap-y-[6px]">
        {list.map(market => (
          <div className="flex items-center gap-x-3">
            <Checkbox id={market.value}/>
            <label htmlFor={market.value} className="text-sm">{market.label}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export const addonLists = [
  {
    title:'API Limit Increase',
    price:'฿10,000/month',
    desc:'Service to connect Marketplace, Social Media and other service API.',
  },
  {
    title:'Technical Consulting',
    price:'Standard offering starting at ฿60,000',
    desc:'Five (5) hours of total support may include phone conversations, email-based support, prep work, and any other activities related to the service. Unused hours expire at the end of each month and will not carry over.'
  },
  {
    title:'Monthly Inbound Consulting',
    price:'฿45,000/month',
    desc:'Access to your Inbound Consultant for up to one hour per month.'
  },
  {
    title:'Ongoing Inbound Consulting',
    price:'฿95,000/month',
    desc:'Access to your Inbound Consultant for up to five hours per month.'
  },
  {
    title:'Premium Consulting',
    price:'฿120,000/month',
    desc:'Access to both an Inbound Consultant and a Technical Consultant for up to 5 hours per month with each. The Inbound Consultant and Technical Consultant will work together to find customized solutions for your strategic and technical needs.'
  },
  {
    title:'Business Consulting',
    price:'Standard offering starting at ฿60,000',
    desc:'Five (5) hours of total support per month may include phone conversations, email-based support, prep work, and any other activities related to the service. Unused hours expire at the end of each month and will not carry over.'
  },
  {
    title:'Migration Services',
    price:'฿8,500/month',
    desc:'Template setup service provides a defined set of templates that will resemble your website and branding. These templates use drag-and-drop functionality so you can easily start creating pages and blog posts without coding knowledge.'
  }
]

export const addonPrices = {
  'API Limit Increase': 10000,
  'Technical Consulting': 60000,
  'Monthly Inbound Consulting': 45000,
  'Ongoing Inbound Consulting': 95000,
  'Premium Consulting': 120000,
  'Business Consulting': 60000,
  'Migration Services': 8500,
};