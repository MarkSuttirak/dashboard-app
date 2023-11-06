import React, {useState, useEffect, createContext} from "react"

const AnimationContext = createContext({})

const AnimationProvider = ({children}) => {
    const [SideBarRight, setSideBarRight] = useState(false)
    const [Sidebar, setSidebar] = useState(false)
    const [SideApp, setSideApp] = useState(false)
    const [ItemSideBar, setItemSideBar] = useState(false)

    const toggle = (value) => {
        switch(value)
        {
            case 'SideBar':
                setSidebar(!Sidebar)
                break;
            case 'SideApp':
                setSideApp(!SideApp)
                break;
            case 'SideBarRight':
                setSideBarRight(!SideBarRight)
                break;
            case 'ItemSideBar':
                setItemSideBar(!ItemSideBar)
                break;
        }
    }

    const contextValue = {
        sidebarRight : SideBarRight,
        sidebar : Sidebar,
        sideApp : SideApp,
        itemSideBar : ItemSideBar,
        toggle : toggle
    }

    return <AnimationContext.Provider value={contextValue}>{children}</AnimationContext.Provider>
}

export {AnimationProvider, AnimationContext}