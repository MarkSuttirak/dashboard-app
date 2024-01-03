import { PlayCircle } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import videoMock1 from "src/img/videomock1.png"
import videoMock2 from "src/img/videomock2.png"
import videoMock3 from "src/img/videomock3.png"
import videoMock4 from "src/img/videomock4.png"

export default function DashboardVideo(){
  const { t } = useTranslation()
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/G7WVnk2WEIc")
  const [videoTitle, setVideoTitle] = useState("02. Introduction to Frappe Framework &amp; ERPNext")
  const [playing, setPlaying] = useState(0)
  const videoLists = [
    {
      img:videoMock1,
      title:"Explore Zaviago WorkSpace",
      src:"https://www.youtube.com/embed/G7WVnk2WEIc"
    },
    {
      img:videoMock2,
      title:"แนะนำการสร้างเว็บใหม่",
      src:"https://www.youtube.com/embed/Hzr3ogqn6V0"
    },
    {
      img:videoMock3,
      title:"วิธีจัดการสินค้าและการขาย",
      src:"https://www.youtube.com/embed/Pw78nj58Hy4"
    },
    {
      img:videoMock4,
      title:"สอนวิธีปรับหน้า Catalogs",
      src:"https://www.youtube.com/embed/Pw78nj58Hy4"
    }
  ]

  const handleChangeVideo = (src, title, index) => {
    setVideoSrc(src)
    setVideoTitle(title)
    setPlaying(index)
  }

  return (
    <section className="bg-[#F7F7F8] my-6 rounded-xl">
      <div className="p-6 flex gap-x-12 items-center">
        <iframe width="644" height="384" className="rounded-xl" src={videoSrc} frameborder="0" allowfullscreen title={videoTitle}/>
        <div className="w-1/3 flex flex-col gap-y-[31px]">
          {videoLists.map((list, index) => (
            <button key={index} onClick={() => handleChangeVideo(list.src, list.title, index)} className="w-full text-left flex items-center gap-x-4">
              <img src={list.img} className="rounded-sm"/>
              <div className="flex flex-col gap-y-[10px]">
                <h2 className='text-[#09090B] text-[13px] eventpop'>{list.title}</h2>
                <p className="text-[#7009FF] flex items-center gap-x-2 text-[13px] font-bold eventpop">
                  <PlayCircle className="h-4 w-4 text-[#7009FF]"/>
                  {playing === index ? t('playing') : t('play_video')}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}