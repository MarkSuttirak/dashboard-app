import { Progress } from "src/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "src/components/ui/popover"

export default function SidebarSetupBusiness(){
  return (
    <Popover>
      <PopoverTrigger className="text-left">
        <div className="bg-[#F7F7F8] rounded-[9px] m-3 px-[15px] py-[13px]">
          <h2 className="text-[13px] font-medium text-[#09090B]">Let's set up your business</h2>
          <Progress value={50} className='my-[10px] h-[6px]'/>
          <p className="text-[10px]">0/6 completed</p>
        </div>
      </PopoverTrigger>
      <PopoverContent className='relative top-[-108px] left-[268px]'>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}