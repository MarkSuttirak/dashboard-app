import { workspaceImages } from "src/components/icon-menus/workspace-images"
import { dashboardActivities } from "src/components/icon-menus/workspace-images"
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
    <section className="bg-[#F7F7F8] mb-8 lg:mb-[72px] rounded-xl mx-5 flex items-center">
      <div className="flex flex-col gap-y-8 p-[100px]">
        <div className="flex items-center gap-x-5">
          {icons.map(icon => <img src={icon} className="w-5 h-5"/>)}
        </div>
        <h1 className="text-4xl font-semibold text-[#363636]">บริหารและต่อยอดธุรกิจของคุณ</h1>
        <p className="text-sm text-[#AAAAAA]">เพิ่มประสิทธิภาพให้กับธุรกิจของคุณด้วยเครื่องมือที่จะช่วยอำนวยความสะดวกในการจัดการงานประจำวันต่างๆ</p>

        <Button className='w-fit !bg-white shadow-none rounded-full text-[#8E8E8F]'>อ่านข้อมูลเพิ่มเติม</Button>
      </div>
      <div className="w-full">
        <img src={dashboardActivities.manageYourBusiness}/>
      </div>
    </section>
  )
}

export default ManageBusinessBanner