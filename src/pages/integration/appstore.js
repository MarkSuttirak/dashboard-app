import { ButtonAppStoreImage01, ButtonAppStoreImage02, ButtonAppStoreImage03, ButtonAppStoreImage04, ButtonAppStoreImage05, ButtonAppStoreImage06 } from "src/components/buttonImage"
import { useState } from 'react'

export default function AppStore(){
  const [isMenuCardHover, setIsMenuCardHover] = useState(false)
  const [menuCardIndex, setMenuCardIndex] = useState(0)

  const handleCardHover = (index) => {
    setIsMenuCardHover(true)
    setMenuCardIndex(index)
  }

  const handleCardHoverLeave = () => {
    setIsMenuCardHover(false)
  }

  const newOrManageMenus = [
    {
      title:'Social Media',
      image:<ButtonAppStoreImage01 shadow={false}/>,
      background:"#E4F4FE",
      color:"#5099FF"
    },
    {
      title:'Manage',
      image:<ButtonAppStoreImage02 shadow={false}/>,
      background:"#DDFDF3",
      color:"#0DA7BA"
    },
    {
      title:'Marketing',
      image:<ButtonAppStoreImage03 shadow={false}/>,
      background:"#F6F3FF",
      color:"#EB67FF"
    },
    {
      title:'Sell Online',
      image:<ButtonAppStoreImage04 shadow={false}/>,
      background:"#E5F5FF",
      color:"#419CFF"
    },
    {
      title:'Media & Content',
      image:<ButtonAppStoreImage05 shadow={false}/>,
      background:"#FFF9E9",
      color:"#FABF20"
    },
    {
      title:'Communication',
      image:<ButtonAppStoreImage06 shadow={false}/>,
      background:"#DEFFEA",
      color:"#19D85C"
    },
  ]

  return (
    <div className="dashboard-container">
      <h1 className="main-heading tracking-[-0.6px]">App Store</h1>

      <div className="flex gap-x-[15px] mt-6">
        {newOrManageMenus.map((n, index) => (
          <div className="menu-card-app-store" key={index} style={{backgroundColor:n.background,color:n.color,boxShadow:isMenuCardHover && menuCardIndex === index ? `0 0 3px ${n.color}` : null}} onMouseEnter={() => handleCardHover(index)} onMouseLeave={handleCardHoverLeave}>
            {n.image}
            <span className="absolute bottom-4">{n.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}