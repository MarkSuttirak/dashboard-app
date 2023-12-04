import { Checkbox } from "src/components/ui/checkbox";

export default function BundleSelect({id, title, price, checked, onCheckedChange, width, desc, size}){
  return (
    <label htmlFor={id} name={id} className={`border rounded-lg p-4 flex justify-between ${checked === true ? 'border-[#09090B]' : 'border-[#E4E4E7]'}`} style={{width:width}}>
      <div className="pr-4">
        <h2 className={`${size === 'large' ? 'text-xl font-semibold text-[#09090B]' : 'subheading font-medium'}`}>{title}</h2>
        <p className="subheading mt-1">{price}</p>
        <p className="main-desc mt-2">{desc}</p>
      </div>
      <Checkbox id={id} className='mt-1' checked={checked} onCheckedChange={onCheckedChange}/>
    </label>
  )
}