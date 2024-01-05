import enjoyPremium from 'src/img/enjoypremium.svg'
import { Button } from '../ui/button'
import { LightningBoltIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SetupBusinessImg from '../icon-menus/SetupBusinessImg'

export default function SidebarUpgrade(){
  const [degree, setDegree] = useState(0);
  const borderStyle = {
    background:"transparent",
    padding:"18px",
    backgroundImage:`linear-gradient(30deg, #FAF6FF 22.69%, #FAFAFA 75.93%), linear-gradient(${degree}deg, #00A3FF , #D035E9, #009DF6)`,
    backgroundClip:"padding-box, border-box",
    backgroundOrigin:"border-box",
    border:"1px solid transparent",
    borderRadius:"12px",
    margin:"12px"
  }

  useEffect(() => {
    const changeDegree = setInterval(() => {
      degree < 360 ? setDegree(degree + 1) : setDegree(0)
    }, 10)
    return () => {clearInterval(changeDegree)}
  }, [degree])

  return (
    <div style={borderStyle}>
      <div>
        <h2 className='text-[13px] leading-4 tracking-[-0.52px] font-medium text-darkergray text-center'>Enjoy premium growing library of template and more</h2>
        <SetupBusinessImg className='m-auto'/>
        <Link to='/payment/plan/pro'>
          <Button className='btn-with-icon w-full'>
            <LightningBoltIcon />
            Upgrade to Pro
          </Button>
        </Link>
      </div>
    </div>
  )
}