import React, {useState, useEffect, createContext} from "react"
import lineCRMbg from 'src/img/linecrm-bg.png'
import untitleBg from 'src/img/untitle-bg.png'
import marketConnectBg from 'src/img/marketConnectBg.png'
import posBg from 'src/img/pos-bg.png'
import rewardfulBg from 'src/img/rewardful-bg.png'
import reducoedBg from 'src/img/reducoed-bg.png'
import crmBg from 'src/img/crmBg.png'
import onlineStoreBg from 'src/img/online-store-bg.png'
import { appPrivileges } from "../sidebar/servicePrivileges"

const ServiceContext = createContext({})

const ServiceProvider = ({children}) => {
  const [data, setData] = useState({image:'', title:'', desc:'', require_pro_text:'', link:'', privilege:[]})

  const selectMenu = (val) => {
    switch (val){
      case 0:
        setData({image:crmBg, title:(<>Elevate Your Business with Seamless <span className="text-[#A755E3]">Customer Relationship Management</span></>), desc:'Cutting-edge tools for modern businesses to effectively manage relationships.', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.crmApp});
        break
      case 1:
        setData({image:lineCRMbg, title:(<>Unlock your bizs to the next level with <span className="text-[#3BCD76]">Line CRM</span></>), desc:'Membership system on LINE, a board for announcing promotions, along with a point & reward redemption system', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.lineCRMApp})
        break
      case 2:
        setData({image:rewardfulBg, title:(<>Set your Loyalty Program by <span className="text-[#FF7009]">Rewardful</span></>), desc:'Turn every expense into points, increasing sales and repeat purchases', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.rewardfulApp})
        break
      case 3:
        setData({image:reducoedBg, title:(<>Boost Sales with Exclusive <span className="text-[#EB4F9F]">Reduced</span> Coupons and Deals!</>), desc:'Giving away coupons and dynamic discount value that you can customize.', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.reducoedApp})
        break
      case 4:
        setData({image:marketConnectBg, title:(<>Connect with <span className="text-[#FF4A00]">MarketConnect</span> across All Sales Channels.</>), desc:'Efficiently manage orders regardless of the number of sales channels.', require_pro_text:'Coming soon', link:'', privilege:appPrivileges.marketConnectApp})
        break
      case 5:
        setData({image:untitleBg, title:(<>Building your website creation with <span className="text-[#FBB604]">Untitled</span></>), desc:'Access exclusive tools to help you build client sites and scale your business', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.untitleApp})
        break
      case 6:
        setData({image:posBg, title:(<>Manage store seamlessly with <span className="text-[#013395]">POS in.store</span></>),desc:'An easy-to-use POS for retailers that caters to all your in-store needs', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.posApp});
        break
      case 7:
        setData({image:onlineStoreBg, title:(<>Smooth and Seemless <span className="text-[#0A5FD9]">Online Store</span> in your style</>),desc:'Propel your brand to new heights by unveiling a website that outshines the competition', require_pro_text:'Upgrade pro plan to use this feature', link:'', privilege:appPrivileges.onlineStoreApp});
        break
      default:
        console.log("Cannot select this menu")
    }
  }

  const services = {
    image:data.image,
    title:data.title,
    desc:data.desc,
    require_pro_text:data.require_pro_text,
    link:data.link,
    privilege:data.privilege,
    select:selectMenu
  }

  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>
}

export {ServiceProvider, ServiceContext}