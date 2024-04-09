import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "src/components/ui/sheet"
import { ChevronDown } from "lucide-react"

const PaymentMobileSheet = ({children}) => {
  return (
    <Sheet>
      <SheetTrigger className='flex items-center gap-x-2 text-sm'>
        Show Detail
        <ChevronDown className="w-4 h-4"/>
      </SheetTrigger>
      <SheetContent side="top" className="pt-12">
        {children}
      </SheetContent>
    </Sheet>
  )
}

export default PaymentMobileSheet