import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "src/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageDialog({currentImage, setCurrentImage, length, image, mainImage, onOpen}){
  const handleNextImage = () => {
    if (currentImage > length){
      setCurrentImage(0)
    } else {
      setCurrentImage(currentImage + 1)
    }
  }

  const handlePrevImage = () => {
    if (currentImage == 0){
      setCurrentImage(length - 1)
    } else {
      setCurrentImage(currentImage - 1)
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="p-0 h-fit w-full" onClick={onOpen}>
        <img src={image} className={`${mainImage ? 'rounded-md' : 'img-apps'}`} width={`${!mainImage ? '330' : '100%'}`}/>
      </DialogTrigger>
      <DialogContent className='p-0 max-w-3xl max-h-3xl items-center bg-transparent'>
        <button className="absolute flex left-5 bg-white/80 rounded-full p-2" onClick={handlePrevImage}>
          <ChevronLeft width='30' height='30'/>
        </button>
        <img src={image} className="rounded-md w-full h-full"/>
        <button className="absolute flex right-5 bg-white/80 rounded-full p-2" onClick={handleNextImage}>
          <ChevronRight width='30' height='30'/>
        </button>

        <p className="text-center">{currentImage + 1} / {length}</p>
      </DialogContent>
    </Dialog>
  )
}