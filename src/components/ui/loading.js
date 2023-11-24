import { Loader2 } from "lucide-react";

export default function Loading(){
  return (
    <div className='flex justify-center items-center gap-x-2'>
      <Loader2 className='animate-spin'/>
      Loading...
    </div>
  )
}