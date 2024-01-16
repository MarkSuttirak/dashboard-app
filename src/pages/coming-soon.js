import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ZaviagoIcon from "src/components/icon-menus/ZaviagoIcon";
import { Icons } from "src/components/ui/icons";

export default function ComingSoonPage(){
  const { t } = useTranslation()
  document.title = t('coming_soon.title')
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-9">
      <Icons.zaviagoTitle />
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-zinc-900 text-[44px] font-semibold">{t('coming_soon.title')}</h1>
        <div className="flex flex-col items-center justify-center">
          <p className="text-secondary text-sm">{t('coming_soon.desc1')}</p>
          <p className="text-secondary text-sm">{t('coming_soon.desc2')}</p>
        </div>
      </div>

      <div className="flex gap-x-2 mt-1">
        <Button className='w-[246px]' onClick={() => window.location.href = "https://page.line.me/zaviago"}>
          {t('contact_us')}
        </Button>
        <Button className='w-[246px]' onClick={() => navigate('/')}>
          {t('back_to_workspace')}
        </Button>
      </div>
    </div>
  )
}