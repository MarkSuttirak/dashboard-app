import { Button } from "../components/ui/button"
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Badge } from "./ui/badge";

export default function PostInfo({title, desc, buttonText, comingSoon, onClick, image, imageStyle}){
  return (
    <div className="bg-zinc-100 rounded-xl h-auto flex flex-col justify-between overflow-hidden md:max-w-[350px]">
      <div className="px-6 py-10">
        <h3 className="secondary-heading">{title}</h3>
        <p className="text-sm text-zinc-500 mt-4 mb-6">{desc}</p>
        {buttonText && <Button onClick={onClick}>
          {buttonText}
        </Button>}
        {comingSoon && (
          <Badge className="text-[#3D3D3D] inline-flex items-center gap-x-2 bg-white shadow-none rounded-full">
            <div className={`w-1 h-1 rounded-full bg-[#3D3D3D]`} />
            Coming soon
          </Badge>
        )}
      </div>
      <img src={image} className={`w-full ${imageStyle || ""}`}/>
    </div>
  )
}