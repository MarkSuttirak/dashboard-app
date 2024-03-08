import { useState } from "react"
import { useTranslation } from "react-i18next"
import dashTeamImg from "../../img/dashboard-team.png"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"

export default function DashboardTeam(){
  const { t } = useTranslation()

  const badgeColour = "#460051"
  const badgeStyle = {
    background: "linear-gradient(96.29deg, #C7BEFF 5.86%, #FFD3FB 104.34%)",
    backgroundSize: "110%",
    color: badgeColour,
    boxShadow: "none",
    borderRadius: "30px",
    display:"inline-flex",
    gap:"8px",
    fontSize: "12px"
  }

  return (
    <section className="bg-[#F7F7F8] mb-[72px] rounded-xl">
      <div className="grid md:grid-cols-2 items-center">
        <div className="order-last md:order-none md:p-0 md:pl-6 flex flex-col justify-end h-full">
          <img src={dashTeamImg} />
        </div>
        <div className="p-6 md:py-12">

          <Badge style={badgeStyle}>
            <div className={`w-1 h-1 rounded-full bg-[${badgeColour}]`} />
            Recommended
          </Badge>

          <div className="flex flex-col gap-y-2 mt-6 mb-10">
            <h1 className="text-primary text-3xl font-semibold">ปลดล็อกการทำงานร่วมกัน ไม่พลาดทุกการอัปเดต</h1>
            <p className="text-secondary">ไม่ว่าทีมงานของคุณจะอยู่ที่ไหน ทำงานร่วมกันและอัปเดตพร้อมกันได้</p>
          </div>

          <Button className='btn-with-icon'>
            <EnvelopeOpenIcon className="w-4 h-4"/>
            เชิญทีมงานของคุณ
          </Button>
        </div>
      </div>
    </section>
  )
}