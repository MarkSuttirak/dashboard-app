import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"

export default function DeleteAppModal({status, setStatus, title}){
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="w-full px-2 py-1.5">Delete</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Delete {title}?</DialogTitle>
          <DialogDescription>
            {status === 'trying-to-delete' ? 
              'Sorry to see you go. Your feedback will help us improve our apps.'  
            : 'This app has visual elements on your site. To delete it, go to the Editor. After deleting, publish your site so changes go live.'}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="justify-end">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={() => setStatus('trying-to-delete')}>
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}