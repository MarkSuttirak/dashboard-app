import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Progress } from "../ui/progress"
import { useState } from 'react'

export default function DeleteAppModal({status, setStatus, title}){
  const [installingAppPercent, setInstallingAppPercent] = useState(50)
  const reasons = [
    "I don't need it anymore.",
    "It's missing features I need.",
    "I just wanted to try it out.",
    "I'm having a technical issue.",
    "I don't know how to use, it's too complicated."
  ]
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="w-full px-2 py-1.5">Delete</p>
      </DialogTrigger>
      {status === 'deleting' ? (
        <DialogContent className="sm:max-w-md">
          <DialogDescription className='flex flex-col gap-y-4 items-center justify-center'>
            <h1 className="secondary-heading">Deleting {title}</h1>

            <div className="flex gap-x-[10px] w-full items-center">
              <Progress value={installingAppPercent}/>
              {installingAppPercent}%
            </div>

            <p className="main-desc">Uninstalling app</p>
          </DialogDescription>
        </DialogContent>
      ) : (
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Delete {title}?</DialogTitle>
            <DialogDescription>
              {status === 'trying-to-delete' ? 
                'Sorry to see you go. Your feedback will help us improve our apps.'  
              : 'This app has visual elements on your site. To delete it, go to the Editor. After deleting, publish your site so changes go live.'}
            </DialogDescription>
          </DialogHeader>
          {status === 'trying-to-delete' ? (
            <>
              <form>
                <div className="space-y-5">
                  <div className="anim-up flex flex-col">
                    <label className="subheading mb-2 font-medium">
                      Why are you deleting this app? <span className="required">*</span>
                    </label>
                    <Select className='form-input' name="reason-to-delete" defaultValue={reasons[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={reasons[0]} />
                      </SelectTrigger>
                      <SelectContent>
                        {reasons.map(r => 
                          <SelectItem value={r}>{r}</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="anim-up flex flex-col">
                    <label className="subheading mb-2 font-medium">
                      Details
                    </label>
                    <Textarea className='form-input' name="reason-to-delete" placeholder='Tell us more about your reason for deleting this app.'/>
                  </div>
                </div>

                <p className="main-desc mt-[18px]">
                  <strong className="subheading font-medium">Note : </strong> All {title} will be removed from your site and publish changes go live
                </p>
              </form>
              <DialogFooter>
                <div className="flex w-full justify-between">
                  <DialogClose asChild>
                    <Button type="button" variant="ghost" onClick={() => setTimeout(() => setStatus(''), 100)}>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="button" onClick={() => setStatus('deleting')}>
                    Continue
                  </Button>
                </div>
              </DialogFooter>
            </>
          ) : (
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
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}