import { useTranslation } from "react-i18next"
import UpgradeProModal from "../modals/upgradeProModal"
import UpgradeProIcon from "../apps/upgradeProIcon"
import { ChevronRight } from 'lucide-react'

const UpgradeProButton = () => {

  const { t } = useTranslation()

  return (
    <UpgradeProModal triggerClassName='w-full md:w-fit px-5 py-3 md:p-0 bg-[#F6EFFF] md:bg-transparent mr-[3px]'>
      <div className='flex gap-x-2'>
        <div className='whitespace-pre text-[13px] flex gap-x-[5px] items-center font-semibold bg-white md:bg-accent pl-2 py-1 pr-1 rounded-md h-[34px]'>
          {t('upgrade')}
          <div className='flex bg-black rounded-md text-white cal-sans text-[13px] font-semibold h-full p-[6px] gap-x-[5px]'>
            <UpgradeProIcon />
            {t('pro')}
          </div>
        </div>

        <div className='flex items-center justify-between w-full md:hidden'>
        <p className='text-secondary text-sm'>เพื่อการเติบโตอย่างก้าวกระโดด</p>
        <ChevronRight className='w-4 h-4' color="#8321FF"/>
        </div>
      </div>
    </UpgradeProModal>
  )
}

export default UpgradeProButton