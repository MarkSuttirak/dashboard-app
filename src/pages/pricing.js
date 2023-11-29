import FreePricing from "src/components/pricing/freePricing";
import LineCRMPricing from "src/components/pricing/lineCRMPricing";
import StarterPricing from "src/components/pricing/starterPricing";

export default function Pricing(){
  return (
    <div className="max-w-[1200px] py-[60px] mx-auto">
      <div className="flex gap-x-8 justify-center h-auto">
        <FreePricing />
        <StarterPricing />
        <LineCRMPricing />
      </div>
    </div>
  )
}