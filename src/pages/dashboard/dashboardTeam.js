import { useState } from "react"
import { useTranslation } from "react-i18next"
import dashTeamImg from "../../img/dashboard-team.png"
import { Badge } from "src/components/ui/badge"
import { Button } from "src/components/ui/button"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"

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
    <section className="bg-[#F7F7F8] rounded-3xl min-w-[1100px] max-w-[1100px]">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-12">

          <Badge style={badgeStyle}>
            <div className={`w-1 h-1 rounded-full`} style={{ backgroundColor: badgeColour }}/>
            Recommended
          </Badge>

          <div className="flex flex-col gap-y-2 mt-6 mb-10">
            <h1 className="text-primary text-3xl font-semibold">{t("dashboard.teams.title")}</h1>
            <p className="text-secondary">{t("dashboard.teams.desc")}</p>
          </div>

          <Link to="/dashboard/teams/members">
            <Button className='btn-with-icon'>
              <EnvelopeOpenIcon className="w-4 h-4"/>
              {t("dashboard.teams.button")}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col justify-end h-full pt-6">
          <img src={dashTeamImg} className="dash-team-img"/>
        </div>
      </div>
    </section>
  )
}