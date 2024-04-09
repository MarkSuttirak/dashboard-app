import { PlusCircle } from "lucide-react"
import { Button } from "src/components/ui/button"
import sellingOnline from "src/img/selling-online.png"

const Bannerteam = () => {
  return (
    <section className="banner-team">
      <div className="p-6 flex flex-col gap-y-[22px] w-full">
        <h1 className="text-lg font-bold xl:whitespace-pre">You are a part of others team, but you can create your<br className="hidden xl:block"/> own free Zaviago WorkSpace.</h1>
        <p className="text-sm text-secondary">Create your own team and your own Zaviago WorkSpace for free.</p>

        <Button className="btn-with-icon w-fit">
          <PlusCircle className="w-4 h-4"/>
          Create your workspace
        </Button>
      </div>

      <img src={sellingOnline} className="banner-team-img"/>
    </section>
  )
}

export default Bannerteam