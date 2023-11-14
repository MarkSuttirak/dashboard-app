import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { serviceMenus } from "./serviceMenus";

export default function ServiceModals(){
  return (
    <>
      {serviceMenus.map((d, index) => (
        <div className="nav-btns add-ons">
          <Dialog key={index}>
            <DialogTrigger>{d.icon}</DialogTrigger>
            <DialogContent className='p-0 border-0 max-w-4xl'>
              <DialogHeader className='flex-row'>
                <DialogTitle>
                  <img src={d.image} className='rounded-l-lg h-full w-[800px]'/>
                </DialogTitle>
                <DialogDescription className='px-10 pt-6 pb-10 shadow-lg'>
                  {d.children}
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </>
  )
}