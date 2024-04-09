import { dashboardActivitiesImages, workspaceImages } from "src/components/icon-menus/workspace-images"
import { Button } from "src/components/ui/button"

const ManageBusinessBanner = () => {

  const icons = [
    workspaceImages.manageBusiness,
    workspaceImages.blogAndNews,
    workspaceImages.customerDataSystem,
    workspaceImages.manageWebsite,
    workspaceImages.projectManagement,
    workspaceImages.graphicDesign,
    workspaceImages.linecrm
  ]

  return (
    <section className="bg-[#F7F7F8] mb-8 rounded-3xl mx-5 flex items-center overflow-hidden">
      <div className="flex flex-col gap-y-8 p-[5.5%]">
        <div className="flex items-center gap-x-5">
          {icons.map(icon => <img src={icon} className="w-5 h-5"/>)}
        </div>
        <h1 className="text-4xl font-semibold text-[#363636] whitespace-pre">บริหารและต่อยอด<br/>ธุรกิจของคุณ</h1>
        <p className="text-sm text-[#AAAAAA]">เพิ่มประสิทธิภาพให้กับธุรกิจของคุณด้วยเครื่องมือที่จะช่วยอำนวยความสะดวกในการจัดการงานประจำวันต่างๆ</p>

        <Button className='w-fit !bg-white shadow-none rounded-full text-[#8E8E8F]'>อ่านข้อมูลเพิ่มเติม</Button>
      </div>
      <div className="w-full">
        <img src={dashboardActivitiesImages.manageYourBusiness}/>
      </div>
    </section>
  )
}

export default ManageBusinessBanner