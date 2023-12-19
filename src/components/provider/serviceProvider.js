import React, {useState, useEffect, createContext} from "react"
import { appsList } from "../sidebar/servicePrivileges"

const ServiceContext = createContext({})

const ServiceProvider = ({children}) => {
  const [data, setData] = useState({name:'', image:'', title:'', desc:'', require_pro_text:'', link:'', privilege:[]})

  const selectMenu = (val) => {
    switch (val){
      case 'CRM': setData(appsList.crm); break
      case 'LINEOA CRM': setData(appsList.lineCRM); break
      case 'Rewardful': setData(appsList.rewardful); break
      case 'Reduced%': setData(appsList.reducoed); break
      case 'MarketConnect': setData(appsList.marketConnect); break
      case 'Untitled': setData(appsList.untitled); break
      case 'POS in.store': setData(appsList.pos); break
      case 'OnlineStore': setData(appsList.onlineStore); break
      default: console.log("Cannot select this menu")
    }
  }

  const services = {
    name:data.name,
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