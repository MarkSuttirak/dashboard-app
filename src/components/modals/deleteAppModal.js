import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { Button } from "src/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Textarea } from "../ui/textarea"
import { Progress } from "../ui/progress"
import { useState } from 'react'
import { useTranslation } from "react-i18next"

export default function DeleteAppModal({status, setStatus, title}){
  const { t } = useTranslation()
  const [installingAppPercent, setInstallingAppPercent] = useState(50)
  const reasons = [
    t('delete_app.reason_1'),
    t('delete_app.reason_2'),
    t('delete_app.reason_3'),
    t('delete_app.reason_4'),
    t('delete_app.reason_5')
  ]
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="w-full px-2 py-1.5">{t('uninstall')}</p>
      </DialogTrigger>
      {status === 'deleting' ? (
        <DialogContent className="sm:max-w-md">
          <DialogDescription className='flex flex-col gap-y-4 items-center justify-center'>
            <h1 className="secondary-heading">{t('uninstalling')} {title}</h1>

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
            <DialogTitle>{t('uninstall')} {title}?</DialogTitle>
            <DialogDescription>
              {status === 'trying-to-delete' ? 
                t('delete_app.sorry_to_see_you_go')
              : t('delete_app.are_you_sure')}
            </DialogDescription>
          </DialogHeader>
          {status === 'trying-to-delete' ? (
            <>
              <form>
                <div className="space-y-5">
                  <div className="anim-up flex flex-col">
                    <label className="subheading mb-2 font-medium">
                      {t('delete_app.why_delete')} <span className="required">*</span>
                    </label>
                    <Select name="reason-to-delete" defaultValue={reasons[0]}>
                      <SelectTrigger className="w-full">
                        <SelectValue defaultValue={reasons[0]} />
                      </SelectTrigger>
                      <SelectContent>
                        {reasons.map(r => 
                          <SelectItem value={r} key={r} className='hover:bg-accent'>{r}</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="anim-up flex flex-col">
                    <label className="subheading mb-2 font-medium">
                      {t('delete_app.details')}
                    </label>
                    <Textarea name="reason-to-delete" placeholder={t('delete_app.tell_us')}/>
                  </div>
                </div>

                <p className="main-desc mt-[18px]">
                  <strong className="subheading font-medium">{t('delete_app.note')} : </strong> {t('delete_app.note_desc_prefix')} {title} {t('delete_app.note_desc_suffix')}
                </p>
              </form>
              <DialogFooter>
                <div className="flex w-full justify-between">
                  <DialogClose asChild>
                    <Button type="button" variant="outline" onClick={() => setTimeout(() => setStatus(''), 100)}>
                      {t('cancel')}
                    </Button>
                  </DialogClose>
                  <Button type="button" onClick={() => setStatus('deleting')}>
                    {t('uninstall')}
                  </Button>
                </div>
              </DialogFooter>
            </>
          ) : (
            <DialogFooter className="justify-end">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  {t('cancel')}
                </Button>
              </DialogClose>
              <Button type="button" onClick={() => setStatus('trying-to-delete')}>
                {t('uninstall')}
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      )}
    </Dialog>
  )
}