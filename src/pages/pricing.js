import { ArrowDown } from "lucide-react";
import CustomPricing from "src/components/pricing/customPricing";
import Packages from "src/components/pricing/packages";

export default function Pricing(){
  return (
    <div className="max-w-[1280px] px-6 py-[60px] mx-auto">
      <div className="mb-12">
        <h1 className="text-center text-4xl font-extrabold tracking-[-0.9px]">Manage Members</h1>
        <p className="main-desc text-center mt-[6px]">Anyone with the link can view this document.</p>
      </div>

      <h2 className="text-2xl font-semibold tracking-[-0.6px] mb-4">Packages</h2>
      <Packages />
    </div>
  )
}