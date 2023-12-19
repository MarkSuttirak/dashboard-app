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

export default function LogoutModal({children}){
  const { user, auth, logout } = useUser();

  const logoutnow = () => {
    logout();
  }

  return (
    <Dialog>
      <DialogTrigger className="flex items-center w-full py-[6px] px-2">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2 className="secondary-heading">Are you sure to log out?</h2>
          <p className="main-desc">When you log out, you will be able to log back in with your intact data.</p>
        </DialogHeader>
        <div className="flex items-center justify-end gap-x-2">
          <DialogClose>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button onClick={logoutnow}>
            Log out
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}