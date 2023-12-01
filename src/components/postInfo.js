import { Button } from "../components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";

export default function PostInfo({title, desc, buttonText, onClick, image}){
  return (
    <div className="bg-zinc-100 rounded-xl h-[423px] flex flex-col justify-between">
      <div className="p-6">
        <h3 className="secondary-heading">{title}</h3>
        <p className="text-[13px] text-zinc-500 font-medium leading-4 mt-4 mb-6">{desc}</p>
        <Button variant="outline" className='rounded-md flex items-center gap-x-2 text-xs font-medium leading-5 bg-white' onClick={onClick}>
          <PlusCircledIcon />
          {buttonText}
        </Button>
      </div>
      <img src={image} className="w-full"/>
    </div>
  )
}