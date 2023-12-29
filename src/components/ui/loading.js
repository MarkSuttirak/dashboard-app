import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Loading(){
  const { t } = useTranslation()
  return (
    <div className='flex justify-center items-center gap-x-2'>
      <Loader2 className='animate-spin'/>
      {t('loading')}
    </div>
  )
}