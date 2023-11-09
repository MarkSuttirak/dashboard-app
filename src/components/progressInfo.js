import Progress from "./progress";

export default function ProgressInfo({title,value,desc}){
  return (
    <div className="flex gap-x-2 items-center columns-4">
      <div className="w-[30%]">
        <p className="text-[13px]">{title}</p>
      </div>
      <Progress value={value}/>
      <p className="text-[13px]">({value}%)</p>

      <div className="text-right w-1/4">
        <p className="text-[11px] text-[#687178]">{desc}</p>
      </div>
    </div>
  )
}