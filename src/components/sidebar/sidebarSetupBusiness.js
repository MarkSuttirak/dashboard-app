import enjoyPremium from 'src/img/enjoypremium.svg'
import { Button } from '../ui/button'
import { LightningBoltIcon } from '@radix-ui/react-icons'

export default function SidebarSetupBusiness(){
  const borderStyle = {
    background:"transparent",
    padding:"18px",
    backgroundImage:"linear-gradient(30deg, #FAF6FF 22.69%, #FAFAFA 75.93%), linear-gradient(90deg, #00A3FF , #D035E9, #009DF6)",
    backgroundClip:"padding-box, border-box",
    backgroundOrigin:"border-box",
    border:"1px solid transparent",
    borderRadius:"12px",
    margin:"12px"
  }
  return (
    <div style={borderStyle}>
      <div>
        <h2 className='text-[13px] leading-4 tracking-[-0.52px] font-medium text-[#18181B] text-center'>Enjoy premium growing library of template and more</h2>
        <img src={enjoyPremium} className='m-auto'/>
        <Button className='btn-with-icon w-full'>
          <LightningBoltIcon />
          Upgrade to Pro
        </Button>
      </div>
    </div>
  )
}