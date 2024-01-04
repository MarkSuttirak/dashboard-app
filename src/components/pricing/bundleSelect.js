import { Checkbox } from "src/components/ui/checkbox";
import { useState } from 'react'
import { ChevronDown, ChevronUp } from "lucide-react";

export default function BundleSelect({id, title, price, checked, onCheckedChange, width, desc, size}){
  const [showFullDesc, setShowFullDesc] = useState(false)
  const numOfTextLength = 120;
  return (
    <div className={`border rounded-lg ${checked === true ? 'border-primary' : 'border-tertiary'}`} style={{width:width}}>
      <label htmlFor={id} name={id} className={`flex justify-between p-4`}>
        <div className="pr-4">
          <h2 className={`${size === 'large' ? 'text-xl font-semibold text-primary' : 'text-base font-medium'}`}>{title}</h2>
          <p className="subheading mt-1 font-medium">{price}</p>
          {desc && <p className="main-desc mt-2">{!showFullDesc ? `${desc?.length > numOfTextLength ? desc?.slice(0, numOfTextLength) + '...' : desc || ''}` : desc}</p>}
        </div>
        <Checkbox id={id} className='mt-1' checked={checked} onCheckedChange={onCheckedChange}/>
      </label>
      {desc?.length > numOfTextLength ? <p className='text-sm m-4 mt-0 text-[#006AFF] inline-flex items-center gap-x-1 cursor-pointer font-medium' onClick={() => setShowFullDesc(!showFullDesc)}>
        {showFullDesc ? <>Read less<ChevronUp className="h-4 w-4"/></> : <>Read more<ChevronDown className="h-4 w-4"/></>}
      </p> : null}
    </div>
  )
}