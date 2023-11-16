import React, {useState, useEffect, createContext} from "react"
import lineCRMbg from 'src/img/line-crm-bg.png'
import untitleBg from 'src/img/untitle-bg.png'
import inbioBg from 'src/img/inbio-bg.png'
import posBg from 'src/img/pos-bg.png'
import erpBg from 'src/img/erp-bg.png'
import blogAndPagesBg from 'src/img/blog-and-pages-bg.png'
import rewardfulBg from 'src/img/rewardful-bg.png'
import reducoedBg from 'src/img/reducoed-bg.png'

const ServiceContext = createContext(null)

const ServiceProvider = ({children}) => {
  const [data, setData] = useState({image:'', title:'', desc:'', require_pro_text:'', link:''})

  const selectMenu = (val) => {
    switch (val){
      case 0:
        setData({image:erpBg, title:(<>For enterprises, time to upgrade to <span className="text-[#0A5FD9]">Zaviago ERP</span></>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''});
        break
      case 1:
        setData({image:posBg, title:(<><span className="text-[#013395]">POS in.store</span> : store management</>),desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''});
        break
      case 2:
        setData({image:rewardfulBg, title:(<>Set your Loyalty Program by <span className="text-[#FF7009]">Rewardful</span></>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''})
        break
      case 3:
        setData({image:untitleBg, title:(<>Building your website creation with <span className="text-[#FBB604]">Untitle</span></>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''})
        break
      case 4:
        setData({image:reducoedBg, title:(<><span className="text-[#EB4F9F]">REDUCOED</span> : The most advanced campaign</>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''})
        break
      case 5:
        setData({image:inbioBg, title:(<>Everything you are. In one, simple <span className="text-[#FF4A00]">Inbio</span></>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Coming soon', link:''})
        break
      case 6:
        setData({image:blogAndPagesBg, title:(<><span className="text-[#7000FF]">Blog and Pages</span> in your style</>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Coming soon', link:''})
        break
      case 7:
        setData({image:lineCRMbg, title:(<>Unlock <span class='text-[#3BCD76]'>Line CRM</span> to let people engage</>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:''})
        break
      default:
        console.log("Cannot select this menu")
    }
  }

  const services = {
    id:data.id,
    icon:data.icon,
    image:data.image,
    title:data.title,
    desc:data.desc,
    require_pro_text:data.require_pro_text,
    link:data.link,
    select:selectMenu
  }

  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>
}

export {ServiceProvider, ServiceContext}