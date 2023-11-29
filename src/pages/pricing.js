import ProPricing from "src/components/pricing/proPricing";
import CompareCards from "./compare-plan/compareCards";
import FreePricing from "src/components/pricing/freePricing";
import SwitchPricing from "src/components/pricing/switchPricing";

export default function Pricing(){
  return (
    <>
      <SwitchPricing />
      <FreePricing />
      <ProPricing />
    </>
  )
}