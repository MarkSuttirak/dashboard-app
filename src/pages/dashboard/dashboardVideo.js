import { PlayCircle } from "lucide-react"
import { useState } from "react"

export default function DashboardVideo(){
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/KXRHQIrNvu8")
  const videoLists = [
    {
      img:"",
      title:"Bossanova-Musik",
      src:"https://www.youtube.com/embed/6OZDJzlpXIU"
    },
    {
      img:"",
      title:"Wie können Sie das Geschäft gründen?",
      src:""
    }
  ]
  return (
    <section className="bg-[#F7F7F8] my-6 rounded-xl">
      <div className="p-6 flex gap-x-12">
        <iframe width="768" height="384" className="rounded-xl" src={videoSrc} title="Meine Musik" frameborder="0" allowfullscreen></iframe>
        <div className="w-1/3 flex flex-col gap-y-4">
          {videoLists.map(list => (
            <button onClick={() => setVideoSrc(list.src)} className="w-full text-left">
              <img src={list.img}/>
              <div className="flex flex-col gap-y-[10px]">
                <h2 className='text-[#09090B] text-[13px] eventpop'>{list.title}</h2>
                <p className="text-[#7009FF] flex items-center gap-x-2 text-[13px] font-bold eventpop">
                  <PlayCircle className="h-4 w-4 text-[#7009FF]"/>
                  Play Video
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}