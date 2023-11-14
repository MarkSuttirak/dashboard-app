import { LightningBoltIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function ServiceFooter({link}){
  return (
    <section>
      <Button className='btn-with-icon w-full mt-10 mb-[7px]'>
        <LightningBoltIcon />
        Upgrade to Pro
      </Button>
      <p className="main-desc">See all features in <Link className="text-[#006AFF]" to={link}>App store Detail</Link></p>
    </section>
  )
}