import { Card } from "src/components/ui/card";
import Topbar from "src/components/topbar/topbar";
import 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'

export default function CheckoutReceived(){
  return (
    <>
      <Topbar isSidebarOpen={false} hasNoLeftSidebar={true}/>
      <div className="page-section max-w-[580px] mx-auto">
        <Card className='justify-center'>
          <lottie-player src="https://lottie.host/35c8156d-ab67-4f80-9372-797e1c8dd147/lMQYkT9cd9.json" background="transparent" speed="1" style={{width:"80px",height:"80px"}} direction="1" mode="normal" autoplay></lottie-player>
        </Card>
      </div>
    </>
  )
}