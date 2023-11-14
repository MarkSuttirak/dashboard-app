import React, {useState, useEffect, createContext} from "react"

const ServiceContext = createContext(false)

const ServiceProvider = ({children}) => {
  const [app, setApp] = useState(0);
  const [model, setModel] = useState()

  const clickApp = (value) => {
    console.log(value)
  }

  return <ServiceContext.Provider value={{ clickApp }}>{children}</ServiceContext.Provider>
}

export {ServiceProvider, ServiceContext}