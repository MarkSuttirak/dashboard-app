import { ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage(){
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-y-6">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        <h1 className="text-zinc-900 text-3xl font-semibold">404 - Page Not Found</h1>
        <p className="text-zinc-500 text-lg font-medium">Sorry, the page you are looking for does not exist.</p>
      </div>

      <Button variant='ghost' className='btn-with-icon' onClick={() => navigate('/')}>
        <ArrowLeft viewBox='0 0 24 24' width='16' height='16' />
        Go back to Home
      </Button>
    </div>
  )
}