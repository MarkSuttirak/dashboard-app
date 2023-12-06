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