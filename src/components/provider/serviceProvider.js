import React, {useState, useEffect, createContext} from "react"
import { appsList } from "../sidebar/servicePrivileges"

const ServiceContext = createContext({})

const ServiceProvider = ({children}) => {
  const [data, setData] = useState({name:'', image:'', title:'', desc:'', require_pro_text:'', link:'', privilege:[]})

  const selectMenu = (val) => {
    switch (val){
      case 0: setData(appsList.crm); break
      case 1: setData(appsList.lineCRM); break
      case 2: setData(appsList.rewardful); break
      case 3: setData(appsList.reducoed); break
      case 4: setData(appsList.marketConnect); break
      case 5: setData(appsList.untitled); break
      case 6: setData(appsList.pos); break
      case 7: setData(appsList.onlineStore); break
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