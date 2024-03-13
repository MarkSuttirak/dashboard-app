import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "src/components/ui/dialog"
import { useUser } from '../../hooks/useUser'
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function LogoutModal({children}){
  const { t } = useTranslation()
  const { user, auth, logout } = useUser();

  const logoutnow = () => {
    logout();
  }

  return (
    <Dialog>
      <DialogTrigger className="flex items-center w-full py-[6px] px-2 text-base md:text-sm">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2 className="secondary-heading">{t('topbar.are_you_sure_log_out')}</h2>
          <p className="main-desc">{t('topbar.logout_desc')}</p>
        </DialogHeader>
        <div className="flex items-center justify-end gap-x-2">
          <DialogClose>
            <Button variant='outline'>{t('cancel')}</Button>
          </DialogClose>
          <Button onClick={logoutnow}>
            {t('topbar.menus.logout')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}