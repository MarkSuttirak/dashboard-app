import { Button } from '../ui/button'
import SetupBusinessImg from '../icon-menus/SetupBusinessImg'
import UpgradeProModal from '../modals/upgradeProModal'
import UpgradeProIcon from '../apps/upgradeProIcon'

export default function SidebarUpgrade(){
  const bgStyle = {
    background:"linear-gradient(30.37deg, #F8EEFF 22.69%, #FFFFFF 75.93%)"
  }

  return (
    <div className='m-3 pb-3'>
      <div style={bgStyle} className='p-3 rounded-md border'>
        <h2 className='text-[13px] text-darkergray text-center'>เพลิดเพลินกับการเติบโตทางธุรกิจ อย่างก้าวกระโดด</h2>
        <SetupBusinessImg className='m-auto'/>

        <UpgradeProModal triggerClassName='w-full'>
          <Button className='btn-with-icon w-full'>
            <UpgradeProIcon />
            Upgrade to Pro
          </Button>
        </UpgradeProModal>
      </div>
    </div>
  )
}