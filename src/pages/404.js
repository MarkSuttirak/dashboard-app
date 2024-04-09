import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NotFoundPage(){

  const { t } = useTranslation()

  document.title = t("not_found.title")
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-6 p-4 text-center">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-zinc-900 text-3xl font-semibold">{t("not_found.title")}</h1>
        <p className="text-zinc-500 text-lg font-medium">{t("not_found.desc")}</p>
      </div>

      <Button variant='ghost' className='btn-with-icon' onClick={() => navigate('/')}>
        <ArrowLeft viewBox='0 0 24 24' width='16' height='16' />
        {t("not_found.go_back")}
      </Button>
    </div>
  )
}