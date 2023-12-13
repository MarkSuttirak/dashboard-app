import { Progress } from "src/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"
import { CheckIcon, LightningBoltIcon } from "@radix-ui/react-icons";
import { Check, Dot } from "lucide-react";

export default function SidebarSetupBusiness(){
  function GuideButton({icon, title, buttonText, buttonIcon, link, isCompleted}){
    return (
      <button className="guide-btn p-[6px] h-10 rounded-md">
        <div className="flex items-center gap-1">
          {isCompleted ? <CheckIcon className="h-5 w-5" color='#51B77B'/> : <Dot className="h-5 w-5"/>}
          <h2 className={`text-xs ${isCompleted ? 'line-through text-[#71717A]' : 'text-[#09090B]'}`}>{title}</h2>
        </div>
        {!isCompleted ? (
          <button className='inner-guide-btn px-4 py-1 font-medium h-[22px] text-[10px]'>
            {buttonIcon}
            {buttonText}
          </button>
        ) : null}
      </button>
    )
  }

  return (
    <Popover>
      <PopoverTrigger className="text-left">
        <div className="bg-[#F7F7F8] rounded-[9px] m-3 px-[15px] py-[13px]">
          <h2 className="text-[13px] font-medium text-[#09090B]">Let's set up your business</h2>
          <Progress value={50} className='my-[10px] h-[6px]'/>
          <p className="text-[10px]">0/6 completed</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className='relative top-[-108px] left-[268px] w-[120%]'>
        <div className="flex gap-x-[10px] items-center mb-4">
          <h2 className="text-base text-[#09090B] font-medium">Let's setup your business</h2>
          <p className="text-[10px] text-[#71717A]">0/6 completed</p>
        </div>
        <div className="flex flex-col gap-y-[10px]">
          <GuideButton title='Create new customer' buttonText='Add Customer'/>
          <GuideButton title='Add your first product' buttonText='Add Product'/>
          <GuideButton title='Create your first draft order' buttonText='Add Draft Order'/>
          <GuideButton title='Add first page' buttonText='Add New Page'/>
          <GuideButton title='Write your first blog' buttonText='Add Blog'/>
          <GuideButton title='Create new customer' buttonText='Add Customer' isCompleted={true}/>
        </div>
      </PopoverContent>
    </Popover>
  )
}