import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function ImageDialog({images, open, setOpen, site}){
  const [currentImage, setCurrentImage] = useState()
  const handleNextImage = () => {
    setCurrentImage((prev) =>{
      const imagePrev = images.indexOf(images.find(image => image.image === prev))
      if (imagePrev < images.length - 1){
        return images[imagePrev + 1].image
      } else {
        return images[0].image
      }
    })
  }

  const handlePrevImage = () => {
    setCurrentImage((prev) =>{
      const imagePrev = images.indexOf(images.find(image => image.image === prev))
      if (imagePrev == 0){
        return images[images.length - 1].image
      } else {
        return images[imagePrev - 1].image
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-0 h-fit w-fit">
        <div className="flex flex-col gap-y-6">
          {images.map((image) => (
            <img src={site + image.image} className='img-apps' onClick={() => setCurrentImage(image.image)}/>
          ))}
        </div>
      </DialogTrigger>
      <DialogContent className='p-0 max-w-3xl max-h-3xl items-center bg-transparent'>
        <button className="absolute flex left-5 bg-white/80 rounded-full p-2" onClick={handlePrevImage}>
          <ChevronLeft width='30' height='30'/>
        </button>
        <img src={site + currentImage } className="rounded-md w-full h-full"/>
        <button className="absolute flex right-5 bg-white/80 rounded-full p-2" onClick={handleNextImage}>
          <ChevronRight width='30' height='30'/>
        </button>
      </DialogContent>
    </Dialog>
  )
}